# Guía de Continuidad para Antigravity - EnKurso (`EnKurso.org`)

Este documento resume el estado técnico, los patrones de diseño y la hoja de ruta para continuar el desarrollo del proyecto **EnKurso**.

---

## 🎯 Resumen Ejecutivo del Proyecto
- **Nombre**: EnKurso
- **Dominio**: `EnKurso.org`
- **Plataforma**: Cursos y libros empresariales ejecutivos (218 tomos en 24 categorías).
- **Target Principal**: Móviles (Smartphone / Mobile-First) con navegación inferior ergonómica y diseño adaptativo a tablet/desktop.
- **Despliegue Objetivo**: Cloudflare Pages (archivos estáticos en la carpeta `dist/`).
- **Persistencia**: 100% `localStorage` en el navegador del usuario (sin base de datos obligatoria, con exportación/importación JSON).

---

## 🧭 Arquitectura y Archivos Clave

| Archivo / Directorio | Función Principal |
| :--- | :--- |
| `src/utils/storage.ts` | Gestión de `localStorage` (progreso, racha, certificados, notas, tema, lector, chats de mentor y copias de seguridad). |
| `src/utils/aiMentorEngine.ts` | Motor del mentor de negocios inteligente (opera offline / estático en Cloudflare Pages). |
| `src/components/BookReader.tsx` | Lector de 6 capítulos con ajuste de fuente, modo noche/sepia, notas y examen. |
| `src/components/MyLibrary.tsx` | Biblioteca personal con pestañas (En progreso, Guardados, Completados, Notas y Copia de seguridad). |
| `src/components/BottomNavBar.tsx` | Navegación inferior táctil con *safe-area* para smartphones. |
| `src/data/category1Content.ts` a `category9Content.ts` | Contenido enriquecido y exámenes de los tomos 1 al 81. |
| `src/data/courseContentGenerator.ts` | Generador y ensamblador maestro de los 218 libros. |
| `public/_redirects` | Regla SPA `/* /index.html 200` para Cloudflare Pages. |
| `public/_headers` | Cabeceras de seguridad y optimización de caché para Cloudflare Pages. |

---

## 📋 Tareas Realizadas hasta la Fecha
1. ✅ Arquitectura Mobile-First completa con barras de navegación táctiles y bottom sheets.
2. ✅ Persistencia completa de datos en `localStorage` con módulo de copia de seguridad (exportar/importar `.json`).
3. ✅ Sistema de 6 capítulos extensos por libro (teoría, metodología, táctica, caso real, riesgos y plan de acción).
4. ✅ Evaluaciones finales con exámenes de opción múltiple interactivos y emisión de certificados de graduación.
5. ✅ Mentor Ejecutivo IA con motor local compatible con Cloudflare Pages.
6. ✅ Categorías 1 a 16 con literatura especializada, casos de estudio cuantificados y exámenes rigurosos (Tomos 1 al 161 completos).
7. ✅ Preparación y validación de compilación para Cloudflare Pages (`npm run build` genera `dist/` verificado).

---

## 🛠️ Cómo Continuar Agregando Nuevas Categorías (17 a 24)

Para redactar las siguientes categorías (ejemplo: Categoría 17, Tracking y Análisis, tomos 162 al 172):
1. Crear `src/data/category15Content.ts`.
2. Seguir el tipado `SpecificBookContent` presente en las categorías existentes.
3. Importar el objeto en `src/data/courseContentGenerator.ts` y añadirlo a la lista de libros personalizados.
4. Validar con `npm run lint` y compilar con `npm run build`.
