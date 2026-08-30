# Guía de Desarrollo y Arquitectura - EnKurso (Antigravity & AI Studio)

## 📌 Visión del Proyecto
**EnKurso (`EnKurso.org`)** es una plataforma educativa de libros y cursos ejecutivos orientada a fundadores, directores y emprendedores.
- **Enfoque de Diseño**: **Mobile-First nativo** (diseñada con ergonomía táctil para smartphones, barras inferiores de navegación, *bottom sheets* y *safe areas*, totalmente responsiva y adaptable a tablets/pantallas grandes).
- **Hosting y Despliegue**: Preparada para **Cloudflare Pages** (distribución estática ultrarrápida del directorio `dist/`), con PWA instalable y soporte SPA con `_redirects` y `_headers`.
- **Persistencia**: **100% Local en el dispositivo del usuario (`localStorage`)** sin dependencias obligatorias de backend externo para progreso, certificados, notas, racha, favoritos, ajustes del lector y mentoría IA (respaldo y exportación JSON disponible en la pestaña *Copia de Seguridad* de *Mi Biblioteca*).

---

## 🏗️ Arquitectura de Archivos y Componentes

### 1. Estado y Persistencia (`src/utils/storage.ts`)
Maneja todas las claves en `localStorage`:
- `enkurso_user_library_v1`: Progreso por libro (`UserProgress`), racha diaria, tiempo total leído, completados y certificados.
- `enkurso_reader_settings_v1`: Tipografía, tamaño de fuente, interlineado, modo scroll/paginado, tema del lector (claro, sepia, oscuro, noche).
- `enkurso_theme_mode_v1`: Modo de la app (`light`, `dark`, `system`).
- `enkurso_user_name_v1`: Nombre del titular para certificados y perfil.
- `enkurso_mentor_chats_v1_{bookId}`: Historial de conversaciones con el Mentor IA por libro.
- `exportAllDataBackup()` y `importAllDataBackup()`: Permiten exportar/importar todo el estado en JSON.

### 2. Motor del Mentor IA (`src/utils/aiMentorEngine.ts` y `src/components/AiMentorModal.tsx`)
- Funciona tanto con backend (`/api/mentor`) como en modo estático/offline autónomo para Cloudflare Pages mediante el motor ejecutivo integrado con soporte para distintos sectores comerciales (Retail, SaaS, B2B, Restaurantes, etc.).

### 3. Componentes Principales (`src/components/`)
- `BottomNavBar.tsx`: Barra de navegación inferior móvil para acceso rápido a Biblioteca, Búsqueda, Progreso y Categorías.
- `Header.tsx`: Cabecera superior con estadísticas de racha, buscador y selector de tema (`ThemeToggle.tsx`).
- `CategoryNav.tsx` & `CategoryBottomSheet.tsx`: Selector horizontal y panel deslizante para las 24 categorías.
- `BookCard.tsx`: Tarjeta de libro con indicadores de progreso, tiempo de lectura y guardado a favoritos.
- `BookReader.tsx`: Lector inmersivo tipo Apple Books / Kindle con 6 capítulos por libro, selector de apariencia (`ReadingAppearanceBottomSheet.tsx`), tabla de contenidos (`TableOfContentsBottomSheet.tsx`), toma de notas y examen final.
- `QuizModal.tsx`: Examen de 3 preguntas de opción múltiple por libro para evaluar la comprensión y emitir el certificado.
- `CertificateModal.tsx` & `CertificatesGallery.tsx`: Generación e impresión de certificados oficiales con ID único verificable y nombre editable del titular.
- `ActionPlanModal.tsx`: Plan de acción ejecutable en 7-30 días con checklists interactivos.
- `MyLibrary.tsx`: Gestión de lecturas en progreso, guardados, libros completados, notas y copia de seguridad.

---

## 📚 Estructura de Contenido y Libros (223 Tomos en 24 Categorías)

Cada libro cuenta con 6 capítulos estructurados con literatura de 2,000 a 2,500 palabras de alto nivel profesional:
1. **Capítulo 1**: Fundamentos Teóricos y Contexto Estratégico.
2. **Capítulo 2**: Metodología y Marco Operativo Paso a Paso.
3. **Capítulo 3**: Guía Táctica y Plan de Implementación (Días 1 al 30).
4. **Capítulo 4**: Caso de Estudio Empresarial y Benchmarking Cuantificado.
5. **Capítulo 5**: Errores Fatales y Matriz de Mitigación de Riesgos.
6. **Capítulo 6**: Plan de Acción Inmediato (48 Horas) y Cuadro de Mando de KPIs.

### 📊 Estado de Implementación de Categorías Especializadas:
- ✅ **Categoría 1** (`src/data/category1Content.ts`): Tomos 1 al 8 (Planeación de Negocios - 8 tomos).
- ✅ **Categoría 2** (`src/data/category2Content.ts`): Tomos 9 al 24 (Manejo de Presupuesto - 16 tomos).
- ✅ **Categoría 3** (`src/data/category3Content.ts`): Tomos 25 al 32 (Servicio al Cliente - 8 tomos).
- ✅ **Categoría 4** (`src/data/category4Content.ts`): Tomos 33 al 35 (Reclutamiento - 3 tomos).
- ✅ **Categoría 5** (`src/data/category5Content.ts`): Tomos 36 al 48 (Operaciones y Comercio - 13 tomos).
- ✅ **Categoría 6** (`src/data/category6Content.ts`): Tomos 49 al 57 (Ventas - 9 tomos).
- ✅ **Categoría 7** (`src/data/category7Content.ts`): Tomos 58 al 60 (Inclusión en el Trabajo - 3 tomos).
- ✅ **Categoría 8** (`src/data/category8Content.ts`): Tomos 61 al 74 (Productividad Laboral - 14 tomos).
- ✅ **Categoría 9** (`src/data/category9Content.ts`): Tomos 75 al 81 (Gestión de Empleados - 7 tomos).
- ✅ **Categoría 10** (`src/data/category10Content.ts`): Tomos 82 al 101 (Desarrollo de Carrera - 20 tomos completos).
- ✅ **Categoría 11** (`src/data/category11Content.ts`): Tomos 102 al 109 (Fidelidad del Cliente - 8 tomos completos).
- ✅ **Categoría 12** (`src/data/category12Content.ts`): Tomos 110 al 115 (Sitio Web - 6 tomos completos).
- ✅ **Categoría 13** (`src/data/category13Content.ts`): Tomos 116 al 124 (Branding - 9 tomos completos).
- ✅ **Categoría 14** (`src/data/category14Content.ts`): Tomos 125 al 130 (Experiencia del Usuario - 6 tomos completos).
- ✅ **Categoría 15** (`src/data/category15Content.ts`): Tomos 131 al 145 (Intro al Marketing Digital - 15 tomos completos).
- ✅ **Categoría 16** (`src/data/category16Content.ts`): Tomos 146 al 161 (Marketing Digital Avanzado - 16 tomos completos).
- ✅ **Categoría 17** (`src/data/category17Content.ts`): Tomos 162 al 172 (Tracking y Análisis - 11 tomos completos).
- ✅ **Categoría 18** (`src/data/category18Content.ts`): Tomos 173 al 178 (Marketing en Redes Sociales - 6 tomos completos).
- ✅ **Categoría 19** (`src/data/category19Content.ts`): Tomos 179 al 184 (Video Marketing - 6 tomos completos).
- ✅ **Categoría 20** (`src/data/category20Content.ts`): Tomos 185 al 192 (Email Marketing - 8 tomos completos).
- ✅ **Categoría 21** (`src/data/category21Content.ts`): Tomos 193 al 202 (Marketing de Contenido - 10 tomos completos).
- ✅ **Categoría 22** (`src/data/category22Content.ts`): Tomos 203 al 212 (Investigación de Mercado - 10 tomos completos).
- ✅ **Categoría 23** (`src/data/category23Content.ts`): Tomos 213 al 219 (Promoción de App - 7 tomos completos).
- ✅ **Categoría 24** (`src/data/category24Content.ts`): Tomos 220 al 223 (Gestión de Agencias - 4 tomos completos).
- ✅ **Categoría 25** (`src/data/category25Content.ts`): Tomos 224 al 243 (Inteligencia Artificial - 20 tomos completos).
- ✅ **Categoría 26** (`src/data/category26Content.ts`): Tomos 244 al 263 (Inglés Profesional y Ejecutivo con Fonética Figurativa - 20 tomos completos).
- ✅ **Categoría 27** (`src/data/category27Content.ts`): Tomos 264 al 283 (Google Studio: AI Studio y Looker Studio - 20 tomos completos).
- ✅ **Categoría 28** (`src/data/category28Content.ts`): Tomos 284 al 303 (Google Antigravity - 20 tomos completos).
- ✅ **Categoría 29** (`src/data/category29Content.ts`): Tomos 304 al 343 (Google Workspace - 40 tomos completos).
- ✅ **Categoría 30** (`src/data/category30Content.ts`): Tomos 344 al 363 (Nequi y Bold - 20 tomos completos).

🎉 **¡TODAS LAS 30 CATEGORÍAS Y 363 TOMOS TOTALMENTE IMPLEMENTADOS AL 100%!**

---

## 🚀 Cómo Continuar Desarrollando Nuevas Categorías

Para añadir el contenido detallado de las siguientes categorías (ej. `category10Content.ts`):
1. Crear el archivo `src/data/categoryXContent.ts` siguiendo la interfaz `SpecificBookContent` definida en `category1Content.ts`.
2. Incluir para cada tomo:
   - `frameworkName`, `coreMetrics`, `caseCompany`, `caseOutcome`, `pitfall`.
   - `actionItem1`, `actionItem2`, `actionItem3`, `domainContext`, `strategicRationale`.
   - `ch1CustomNarrative` (4 párrafos profundos), `ch2MethodologyDetails` (4 puntos), `ch3TacticalSteps` (4 fases semanales), `ch4CaseDeepDive` (4 párrafos de caso real), `ch5RiskMitigation` (3 riesgos críticos), `ch6ActionSummary` (acciones a 24h, 48h y 30 días).
   - `quizQuestions` (3 preguntas de examen con `options`, `correctIndex` y `explanation`).
3. Importar y concatenar `CATEGORY_X_CUSTOM_BOOKS` en `src/data/courseContentGenerator.ts`.
4. Ejecutar `npm run lint` y `npm run build` para verificar cero errores de tipos.

---

## 📦 Guía de Despliegue en Cloudflare Pages
1. Compilación: `npm run build` genera la carpeta `dist/`.
2. Archivos estáticos clave en `dist/`:
   - `_redirects`: Permite el enrutamiento directo de URLs.
   - `_headers`: Cabeceras de caché inmutable para `/assets/*`.
   - `manifest.json` y `robots.txt`.
3. Conectar en Cloudflare Pages con GitHub:
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
4. Asignar el dominio personalizado `EnKurso.org` en la configuración de Cloudflare Pages.
