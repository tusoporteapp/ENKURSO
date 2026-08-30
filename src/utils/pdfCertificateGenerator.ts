import { jsPDF } from 'jspdf';
import QRCode from 'qrcode';
import { generateCertificateHexSignature, buildVerificationUrl, CertificateSignaturePayload } from './cryptoSignature';
import { triggerHaptic } from './haptics';
import confetti from 'canvas-confetti';

interface DownloadPdfOptions {
  recipientName: string;
  bookTitle: string;
  categoryName?: string;
  verificationCode: string;
  issueDate?: string;
  score?: number;
}

export interface CertificateExportResult {
  success: boolean;
  message?: string;
  method?: 'share' | 'download' | 'open';
}

/**
 * Generates an Official Executive Master Certificate in Vertical 3:4 Format (jsPDF).
 */
export async function downloadCertificatePdf({
  recipientName,
  bookTitle,
  categoryName = 'Especialización Ejecutiva',
  verificationCode,
  issueDate = new Date().toLocaleDateString('es-ES'),
  score = 100,
}: DownloadPdfOptions): Promise<CertificateExportResult> {
  try {
    triggerHaptic('medium');

    const payload: CertificateSignaturePayload = {
      name: recipientName || 'Director Ejecutivo',
      bookTitle,
      categoryName,
      verificationCode,
      issueDate,
      score,
    };

    const hexSignature = generateCertificateHexSignature(payload);
    const verifyUrl = buildVerificationUrl(payload);

    // Create Portrait A4 PDF (210mm x 297mm) formatted in vertical 3:4 ratio
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
    const pageHeight = doc.internal.pageSize.getHeight(); // 297mm

    // ==========================================
    // 1. BACKGROUND & SECURITY PATTERNS
    // ==========================================
    doc.setFillColor(253, 251, 247); // Ivory Parchment #FDFBF7
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    // Subtle guilloche security lines
    doc.setDrawColor(240, 230, 210);
    doc.setLineWidth(0.15);
    for (let i = 0; i < 6; i++) {
      const offset = i * 1.5;
      doc.rect(5 + offset, 5 + offset, pageWidth - (10 + offset * 2), pageHeight - (10 + offset * 2), 'S');
    }

    // ==========================================
    // 2. LUXURY GOLD TRIPLE VERTICAL FRAME
    // ==========================================
    // Outer bold gold border
    doc.setDrawColor(212, 175, 55); // #D4AF37 Gold
    doc.setLineWidth(1.6);
    doc.rect(8, 8, pageWidth - 16, pageHeight - 16, 'S');

    // Deep Indigo Inner Border
    doc.setDrawColor(30, 27, 75); // #1E1B4B
    doc.setLineWidth(0.4);
    doc.rect(10.5, 10.5, pageWidth - 21, pageHeight - 21, 'S');

    // Fine Gold Filigree Border
    doc.setDrawColor(212, 175, 55);
    doc.setLineWidth(0.3);
    doc.rect(12.5, 12.5, pageWidth - 25, pageHeight - 25, 'S');

    // Corner rosettes
    const cornerOffsets = [
      [13.5, 13.5],
      [pageWidth - 13.5, 13.5],
      [13.5, pageHeight - 13.5],
      [pageWidth - 13.5, pageHeight - 13.5],
    ];
    doc.setFillColor(212, 175, 55);
    cornerOffsets.forEach(([cx, cy]) => {
      doc.circle(cx, cy, 1.5, 'F');
      doc.setDrawColor(212, 175, 55);
      doc.setLineWidth(0.5);
      doc.line(cx - 3, cy, cx + 3, cy);
      doc.line(cx, cy - 3, cx, cy + 3);
    });

    // ==========================================
    // 3. HEADER & INSTITUTIONAL CREST (PORTRAIT)
    // ==========================================
    doc.setFillColor(30, 27, 75); // Midnight Purple
    doc.setDrawColor(212, 175, 55);
    doc.setLineWidth(0.4);
    doc.roundedRect(pageWidth / 2 - 55, 20, 110, 8, 4, 4, 'FD');

    doc.setTextColor(245, 230, 190);
    doc.setFontSize(6.8);
    doc.setFont('helvetica', 'bold');
    doc.text('ENKURSO EXECUTIVE INSTITUTE OF BUSINESS', pageWidth / 2, 25.5, { align: 'center' });

    doc.setTextColor(180, 83, 9); // Gold Amber
    doc.setFontSize(6.5);
    doc.setFont('times', 'italic');
    doc.text('— EXCELLENTIA • DISCIPLINA • IMPACTUS —', pageWidth / 2, 33, { align: 'center' });

    doc.setTextColor(15, 23, 42); // Navy Slate
    doc.setFontSize(19);
    doc.setFont('times', 'bold');
    doc.text('CERTIFICADO OFICIAL DE MAESTRÍA EJECUTIVA', pageWidth / 2, 45, { align: 'center' });

    doc.setTextColor(100, 116, 139);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text(
      'El Consejo Académico y Claustro de Evaluación de EnKurso certifican que:',
      pageWidth / 2,
      52,
      { align: 'center' }
    );

    // ==========================================
    // 4. RECIPIENT HERO SECTION
    // ==========================================
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(19);
    doc.setFont('times', 'bold');
    const cleanName = (recipientName || 'Director Ejecutivo').toUpperCase();
    doc.text(cleanName, pageWidth / 2, 66, { align: 'center' });

    // Gold underline
    const nameMeasure = Math.min(Math.max(doc.getTextWidth(cleanName) + 20, 60), 160);
    doc.setDrawColor(212, 175, 55);
    doc.setLineWidth(0.6);
    doc.line(pageWidth / 2 - nameMeasure / 2, 70, pageWidth / 2 + nameMeasure / 2, 70);
    doc.setLineWidth(0.2);
    doc.line(pageWidth / 2 - nameMeasure / 2 + 8, 71.5, pageWidth / 2 + nameMeasure / 2 - 8, 71.5);

    doc.setFillColor(212, 175, 55);
    doc.rect(pageWidth / 2 - 1.2, 70.3, 2.4, 2.4, 'F');

    // ==========================================
    // 5. COURSE & SPECIALIZATION
    // ==========================================
    doc.setTextColor(100, 116, 139);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('Por haber acreditado con calificación sobresaliente el programa:', pageWidth / 2, 80, { align: 'center' });

    doc.setTextColor(79, 70, 229); // #4F46E5
    doc.setFontSize(13.5);
    doc.setFont('helvetica', 'bold');
    const splitTitle = doc.splitTextToSize(bookTitle, 160);
    doc.text(splitTitle, pageWidth / 2, 88, { align: 'center' });

    const titleExtra = Array.isArray(splitTitle) && splitTitle.length > 1 ? (splitTitle.length - 1) * 5 : 0;

    doc.setTextColor(71, 85, 105);
    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'italic');
    doc.text(`Área de Especialización: ${categoryName}`, pageWidth / 2, 95 + titleExtra, { align: 'center' });

    // ==========================================
    // 6. DENSE COMPETENCIES BREAKDOWN (2x2 Grid)
    // ==========================================
    const boxY = 104 + titleExtra;
    const boxWidth = 176;
    const boxHeight = 44;
    const boxX = (pageWidth - boxWidth) / 2;

    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.roundedRect(boxX, boxY, boxWidth, boxHeight, 2, 2, 'FD');

    doc.setFillColor(241, 245, 249);
    doc.roundedRect(boxX + 3, boxY + 2, boxWidth - 6, 5, 1, 1, 'F');
    doc.setTextColor(71, 85, 105);
    doc.setFontSize(6.5);
    doc.setFont('helvetica', 'bold');
    doc.text('COMPETENCIAS PROFESIONALES EVALUADAS Y CERTIFICADAS', pageWidth / 2, boxY + 5.5, { align: 'center' });

    const colW = (boxWidth - 8) / 2;
    const competencies = [
      { title: '✦ Marco Estratégico', desc: 'Fundamentos, diagnósticos y modelos de valor cuantificados.' },
      { title: '✦ Metodología Táctica', desc: 'Plan operativo de implementación paso a paso (Días 1-30).' },
      { title: '✦ Benchmarking & KPIs', desc: 'Resolución de casos de estudio y cuadros de mando.' },
      { title: '✦ Mitigación de Riesgos', desc: 'Auditoría de puntos ciegos y protocolo de contingencia.' },
    ];

    // Row 1
    competencies.slice(0, 2).forEach((comp, idx) => {
      const colX = boxX + 4 + idx * colW;
      doc.setTextColor(30, 27, 75);
      doc.setFontSize(6.5);
      doc.setFont('helvetica', 'bold');
      doc.text(comp.title, colX, boxY + 12);

      doc.setTextColor(100, 116, 139);
      doc.setFontSize(5.5);
      doc.setFont('helvetica', 'normal');
      const descLines = doc.splitTextToSize(comp.desc, colW - 4);
      doc.text(descLines, colX, boxY + 16);
    });

    // Row 2
    competencies.slice(2, 4).forEach((comp, idx) => {
      const colX = boxX + 4 + idx * colW;
      doc.setTextColor(30, 27, 75);
      doc.setFontSize(6.5);
      doc.setFont('helvetica', 'bold');
      doc.text(comp.title, colX, boxY + 28);

      doc.setTextColor(100, 116, 139);
      doc.setFontSize(5.5);
      doc.setFont('helvetica', 'normal');
      const descLines = doc.splitTextToSize(comp.desc, colW - 4);
      doc.text(descLines, colX, boxY + 32);
    });

    // ==========================================
    // 7. PLATFORM HEX SIGNATURE, SEAL & QR SECTION
    // ==========================================
    const bottomBaseY = 160 + titleExtra;

    // --- PLATFORM HEX SIGNATURE BOX ---
    const sigBoxX = boxX;
    const sigBoxWidth = boxWidth;
    
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(212, 175, 55);
    doc.setLineWidth(0.4);
    doc.roundedRect(sigBoxX, bottomBaseY, sigBoxWidth, 38, 2, 2, 'FD');

    doc.setFillColor(30, 27, 75);
    doc.roundedRect(sigBoxX + 2, bottomBaseY + 2, sigBoxWidth - 4, 5, 1, 1, 'F');
    doc.setTextColor(245, 230, 190);
    doc.setFontSize(6);
    doc.setFont('helvetica', 'bold');
    doc.text('FIRMA DIGITAL CRIPTOGRÁFICA DE LA PLATAFORMA (ENKURSO.ORG)', sigBoxX + sigBoxWidth / 2, bottomBaseY + 5.5, { align: 'center' });

    doc.setTextColor(79, 70, 229);
    doc.setFontSize(5.2);
    doc.setFont('courier', 'bold');
    const compactSig = hexSignature.substring(0, 130) + '...';
    const splitSig = doc.splitTextToSize(compactSig, sigBoxWidth - 6);
    doc.text(splitSig, sigBoxX + 4, bottomBaseY + 12);

    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.2);
    doc.line(sigBoxX + 4, bottomBaseY + 22, sigBoxX + sigBoxWidth - 4, bottomBaseY + 22);

    doc.setTextColor(15, 23, 42);
    doc.setFontSize(6.8);
    doc.setFont('helvetica', 'bold');
    doc.text(`Titular: ${cleanName} • Calificación: ${score}% Sobresaliente`, sigBoxX + 4, bottomBaseY + 27);

    doc.setTextColor(100, 116, 139);
    doc.setFontSize(5.5);
    doc.setFont('helvetica', 'normal');
    doc.text(`Acreditado por EnKurso Trust Protocol • Registro: ${verificationCode} • ${issueDate}`, sigBoxX + 4, bottomBaseY + 32);

    // --- SEAL & QR ROW ---
    const sealRowY = bottomBaseY + 45;

    // Relievo Seal (Left-Center)
    const sealCenterX = 65;
    doc.setFillColor(79, 70, 229); // Royal Purple
    doc.setDrawColor(212, 175, 55); // Gold
    doc.setLineWidth(1.2);
    doc.roundedRect(sealCenterX - 14, sealRowY - 2, 28, 28, 5, 5, 'FD');

    doc.setDrawColor(245, 230, 190);
    doc.setLineWidth(0.3);
    doc.circle(sealCenterX, sealRowY + 12, 11, 'S');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('EK', sealCenterX, sealRowY + 11, { align: 'center' });

    doc.setFontSize(5);
    doc.text('OFICIAL', sealCenterX, sealRowY + 16, { align: 'center' });
    doc.setFontSize(4);
    doc.text('★ MASTER ★', sealCenterX, sealRowY + 20, { align: 'center' });

    // Dynamic QR Code (Right-Center)
    const qrCenterX = 145;
    try {
      const qrDataUrl = await QRCode.toDataURL(verifyUrl, {
        margin: 1,
        width: 200,
        color: { dark: '#1e1b4b', light: '#ffffff' },
      });
      doc.addImage(qrDataUrl, 'PNG', qrCenterX - 14, sealRowY - 2, 28, 28);
    } catch (qrErr) {
      console.warn('QR fallback:', qrErr);
    }

    doc.setTextColor(15, 23, 42);
    doc.setFontSize(6.5);
    doc.setFont('helvetica', 'bold');
    doc.text('ESCANEAR PARA VALIDAR', qrCenterX, sealRowY + 30, { align: 'center' });

    doc.setTextColor(79, 70, 229);
    doc.setFontSize(6);
    doc.setFont('courier', 'bold');
    doc.text(verificationCode, qrCenterX, sealRowY + 33.5, { align: 'center' });

    // ==========================================
    // 8. CRYPTOGRAPHIC SECURITY MICROPRINT FOOTER
    // ==========================================
    doc.setFillColor(30, 27, 75);
    doc.rect(13, pageHeight - 12, pageWidth - 26, 4, 'F');

    doc.setTextColor(245, 230, 190);
    doc.setFontSize(4.8);
    doc.setFont('courier', 'normal');
    doc.text(
      `DOCUMENTO OFICIAL VALIDADOR • REGISTRO: ${verificationCode} • ENKURSO.ORG • FORMATO VERTICAL 3:4`,
      pageWidth / 2,
      pageHeight - 9.4,
      { align: 'center' }
    );

    const sanitizedName = recipientName.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]/g, '_');
    const sanitizedTitle = bookTitle.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]/g, '_').substring(0, 30);
    const fileName = `Diploma_Oficial_EnKurso_${sanitizedTitle}_${sanitizedName}.pdf`;

    const pdfBlob = doc.output('blob');

    // Web Share API with File for iPhone & Android
    if (typeof navigator !== 'undefined' && typeof File !== 'undefined') {
      try {
        const pdfFile = new File([pdfBlob], fileName, { type: 'application/pdf' });
        if (navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
          await navigator.share({
            files: [pdfFile],
            title: `Diploma Oficial EnKurso - ${bookTitle}`,
            text: `Certificado de Maestría Ejecutiva emitido por EnKurso para ${recipientName}.`,
          });

          triggerHaptic('success');
          triggerCelebration();
          return { success: true, method: 'share', message: '¡Diploma listo en tu menú de Guardar / Compartir!' };
        }
      } catch (shareErr: any) {
        if (shareErr && shareErr.name === 'AbortError') {
          return { success: true, method: 'share', message: 'Menú cerrado.' };
        }
        console.warn('Web Share API fallback:', shareErr);
      }
    }

    const blobUrl = URL.createObjectURL(pdfBlob);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    if (isIOS) {
      window.open(blobUrl, '_blank');
      triggerHaptic('success');
      triggerCelebration();
      return { success: true, method: 'open', message: 'Abriendo PDF en tu iPhone para guardar o imprimir.' };
    }

    const downloadLink = document.createElement('a');
    downloadLink.href = blobUrl;
    downloadLink.download = fileName;
    downloadLink.target = '_blank';
    document.body.appendChild(downloadLink);
    downloadLink.click();

    setTimeout(() => {
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(blobUrl);
    }, 2000);

    triggerHaptic('success');
    triggerCelebration();
    return { success: true, method: 'download', message: '¡Diploma PDF descargado con éxito!' };
  } catch (err: any) {
    console.error('Error generating 3:4 vector PDF:', err);
    return { success: false, message: err?.message || 'Error al generar el diploma en PDF.' };
  }
}

/**
 * Generates and downloads or shares a Certificate High-Resolution Image (PNG) in 3:4 Ratio (1500x2000).
 */
export async function downloadCertificateImage({
  recipientName,
  bookTitle,
  categoryName = 'Especialización Ejecutiva',
  verificationCode,
  issueDate = new Date().toLocaleDateString('es-ES'),
  score = 100,
}: DownloadPdfOptions): Promise<CertificateExportResult> {
  try {
    triggerHaptic('medium');

    const payload: CertificateSignaturePayload = {
      name: recipientName || 'Director Ejecutivo',
      bookTitle,
      categoryName,
      verificationCode,
      issueDate,
      score,
    };

    const hexSignature = generateCertificateHexSignature(payload);
    const verifyUrl = buildVerificationUrl(payload);

    // Exact 3:4 Aspect Ratio (1500 x 2000 px)
    const width = 1500;
    const height = 2000;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return { success: false, message: 'No se pudo inicializar el motor gráfico 2D.' };
    }

    // 1. Background Fill
    ctx.fillStyle = '#fdfbf7';
    ctx.fillRect(0, 0, width, height);

    // 2. Guilloche lines
    ctx.strokeStyle = '#f0e6d2';
    ctx.lineWidth = 1;
    for (let i = 0; i < 6; i++) {
      const offset = i * 8;
      ctx.strokeRect(25 + offset, 25 + offset, width - (50 + offset * 2), height - (50 + offset * 2));
    }

    // 3. Gold Triple Borders
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 8;
    ctx.strokeRect(40, 40, width - 80, height - 80);

    ctx.strokeStyle = '#1e1b4b';
    ctx.lineWidth = 2.5;
    ctx.strokeRect(55, 55, width - 110, height - 110);

    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.strokeRect(65, 65, width - 130, height - 130);

    // Corner rosettes
    const corners = [
      [72, 72],
      [width - 72, 72],
      [72, height - 72],
      [width - 72, height - 72],
    ];
    ctx.fillStyle = '#d4af37';
    corners.forEach(([cx, cy]) => {
      ctx.beginPath();
      ctx.arc(cx, cy, 7, 0, Math.PI * 2);
      ctx.fill();
    });

    // 4. Header Badge
    ctx.fillStyle = '#1e1b4b';
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(width / 2 - 320, 110, 640, 48, 24);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#f5e6be';
    ctx.font = 'bold 18px "Helvetica Neue", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('ENKURSO EXECUTIVE INSTITUTE OF BUSINESS', width / 2, 140);

    ctx.fillStyle = '#b45309';
    ctx.font = 'italic 16px "Times New Roman", serif';
    ctx.fillText('— EXCELLENTIA • DISCIPLINA • IMPACTUS —', width / 2, 185);

    // Main Title
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 44px "Times New Roman", "Cinzel", serif';
    ctx.fillText('CERTIFICADO OFICIAL DE MAESTRÍA EJECUTIVA', width / 2, 250);

    ctx.fillStyle = '#64748b';
    ctx.font = '17px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText('El Consejo Académico y Claustro de Evaluación de EnKurso certifican que:', width / 2, 290);

    // Recipient Name
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 46px "Times New Roman", serif';
    const cleanName = (recipientName || 'Director Ejecutivo').toUpperCase();
    ctx.fillText(cleanName, width / 2, 365);

    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;
    const nameMeasure = ctx.measureText(cleanName);
    const uWidth = Math.max(nameMeasure.width + 100, 360);
    ctx.beginPath();
    ctx.moveTo(width / 2 - uWidth / 2, 385);
    ctx.lineTo(width / 2 + uWidth / 2, 385);
    ctx.stroke();

    // Course Title
    ctx.fillStyle = '#64748b';
    ctx.font = '17px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText('Por haber acreditado con calificación sobresaliente el programa:', width / 2, 440);

    ctx.fillStyle = '#4f46e5';
    ctx.font = 'bold 34px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText(bookTitle, width / 2, 485);

    ctx.fillStyle = '#475569';
    ctx.font = 'italic 19px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText(`Área de Especialización: ${categoryName}`, width / 2, 530);

    // 5. Competencies Box (2x2 Grid)
    const boxY = 575;
    const boxW = width - 200;
    const boxH = 260;
    const boxX = 100;

    ctx.fillStyle = '#f8fafc';
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(boxX, boxY, boxW, boxH, 12);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#f1f5f9';
    ctx.beginPath();
    ctx.roundRect(boxX + 20, boxY + 12, boxW - 40, 32, 6);
    ctx.fill();

    ctx.fillStyle = '#475569';
    ctx.font = 'bold 15px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText('COMPETENCIAS PROFESIONALES EVALUADAS Y CERTIFICADAS', width / 2, boxY + 34);

    const cW = (boxW - 40) / 2;
    const comps = [
      { t: '✦ Marco Estratégico', d: 'Fundamentos, diagnósticos y modelos de valor cuantificados.' },
      { t: '✦ Metodología Táctica', d: 'Plan operativo de implementación paso a paso (Días 1-30).' },
      { t: '✦ Benchmarking & KPIs', d: 'Resolución de casos de estudio y cuadros de mando.' },
      { t: '✦ Mitigación de Riesgos', d: 'Auditoría de puntos ciegos y protocolo de contingencia.' },
    ];

    ctx.textAlign = 'left';
    // Row 1
    comps.slice(0, 2).forEach((c, i) => {
      const cX = boxX + 25 + i * cW;
      ctx.fillStyle = '#1e1b4b';
      ctx.font = 'bold 16px "Helvetica Neue", Arial, sans-serif';
      ctx.fillText(c.t, cX, boxY + 80);

      ctx.fillStyle = '#64748b';
      ctx.font = '13px "Helvetica Neue", Arial, sans-serif';
      ctx.fillText(c.d, cX, boxY + 105);
    });

    // Row 2
    comps.slice(2, 4).forEach((c, i) => {
      const cX = boxX + 25 + i * cW;
      ctx.fillStyle = '#1e1b4b';
      ctx.font = 'bold 16px "Helvetica Neue", Arial, sans-serif';
      ctx.fillText(c.t, cX, boxY + 160);

      ctx.fillStyle = '#64748b';
      ctx.font = '13px "Helvetica Neue", Arial, sans-serif';
      ctx.fillText(c.d, cX, boxY + 185);
    });

    // 6. Platform Hex Signature Box
    const sigY = 875;
    const sigBoxW = boxW;
    const sigBoxH = 220;

    ctx.fillStyle = '#f8fafc';
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(boxX, sigY, sigBoxW, sigBoxH, 12);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#1e1b4b';
    ctx.beginPath();
    ctx.roundRect(boxX + 10, sigY + 10, sigBoxW - 20, 34, 6);
    ctx.fill();

    ctx.fillStyle = '#f5e6be';
    ctx.font = 'bold 15px "Helvetica Neue", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('FIRMA DIGITAL CRIPTOGRÁFICA DE LA PLATAFORMA (ENKURSO.ORG)', width / 2, sigY + 33);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#4f46e5';
    ctx.font = 'bold 13px "Courier New", monospace';
    ctx.fillText(hexSignature.substring(0, 72), boxX + 25, sigY + 75);
    ctx.fillText(hexSignature.substring(72, 144), boxX + 25, sigY + 98);
    ctx.fillText(hexSignature.substring(144, 216) + '...', boxX + 25, sigY + 121);

    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(boxX + 20, sigY + 145);
    ctx.lineTo(boxX + sigBoxW - 20, sigY + 145);
    ctx.stroke();

    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 16px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText(`Titular: ${cleanName} • Calificación: ${score}% Sobresaliente`, boxX + 25, sigY + 175);

    ctx.fillStyle = '#64748b';
    ctx.font = '13px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText(`Acreditado por EnKurso Trust Protocol • Registro: ${verificationCode} • ${issueDate}`, boxX + 25, sigY + 198);

    // 7. Seal & QR Row
    const bottomRowY = 1140;

    // Relievo Seal (Left)
    const sealX = width / 2 - 250;
    ctx.fillStyle = '#4f46e5';
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.roundRect(sealX - 85, bottomRowY, 170, 170, 24);
    ctx.fill();
    ctx.stroke();

    ctx.strokeStyle = '#f5e6be';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(sealX, bottomRowY + 85, 68, 0, Math.PI * 2);
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 56px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText('EK', sealX, bottomRowY + 80);
    ctx.font = 'bold 17px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText('OFICIAL', sealX, bottomRowY + 115);
    ctx.font = '12px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText('★ MASTER ★', sealX, bottomRowY + 138);

    // QR Code (Right)
    const qrX = width / 2 + 150;
    try {
      const qrDataUrl = await QRCode.toDataURL(verifyUrl, {
        margin: 1,
        width: 300,
        color: { dark: '#1e1b4b', light: '#ffffff' },
      });
      const img = new Image();
      img.src = qrDataUrl;
      await new Promise((res) => {
        img.onload = res;
      });
      ctx.drawImage(img, qrX - 85, bottomRowY, 170, 170);
    } catch (e) {}

    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 16px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText('ESCANEAR PARA VALIDAR', qrX, bottomRowY + 205);
    ctx.fillStyle = '#4f46e5';
    ctx.font = 'bold 14px "Courier New", monospace';
    ctx.fillText(verificationCode, qrX, bottomRowY + 228);

    // 8. Microprint strip
    ctx.fillStyle = '#1e1b4b';
    ctx.fillRect(60, height - 70, width - 120, 26);

    ctx.fillStyle = '#f5e6be';
    ctx.font = '11px "Courier New", monospace';
    ctx.fillText(
      `DOCUMENTO OFICIAL VALIDADOR • REGISTRO: ${verificationCode} • ENKURSO.ORG • FORMATO VERTICAL 3:4`,
      width / 2,
      height - 53
    );

    const sanitizedName = recipientName.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]/g, '_');
    const sanitizedTitle = bookTitle.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]/g, '_').substring(0, 30);
    const fileName = `Diploma_Oficial_EnKurso_${sanitizedTitle}_${sanitizedName}.png`;

    return new Promise((resolve) => {
      canvas.toBlob(async (blob) => {
        if (!blob) {
          resolve({ success: false, message: 'No se pudo generar la imagen.' });
          return;
        }

        if (typeof navigator !== 'undefined' && typeof File !== 'undefined') {
          try {
            const imgFile = new File([blob], fileName, { type: 'image/png' });
            if (navigator.canShare && navigator.canShare({ files: [imgFile] })) {
              await navigator.share({
                files: [imgFile],
                title: `Diploma Oficial EnKurso - ${bookTitle}`,
                text: `Certificado de Maestría otorgado a ${recipientName}.`,
              });
              triggerHaptic('success');
              triggerCelebration();
              resolve({ success: true, method: 'share', message: '¡Diploma guardado / compartido!' });
              return;
            }
          } catch (shareErr: any) {
            if (shareErr && shareErr.name === 'AbortError') {
              resolve({ success: true, method: 'share' });
              return;
            }
          }
        }

        const blobUrl = URL.createObjectURL(blob);
        const downloadLink = document.createElement('a');
        downloadLink.href = blobUrl;
        downloadLink.download = fileName;
        downloadLink.target = '_blank';
        document.body.appendChild(downloadLink);
        downloadLink.click();

        setTimeout(() => {
          document.body.removeChild(downloadLink);
          URL.revokeObjectURL(blobUrl);
        }, 2000);

        triggerHaptic('success');
        triggerCelebration();
        resolve({ success: true, method: 'download', message: '¡Imagen del diploma guardada!' });
      }, 'image/png');
    });
  } catch (err: any) {
    console.error('Error generating 3:4 certificate image:', err);
    return { success: false, message: err?.message || 'Error al generar la imagen.' };
  }
}

function triggerCelebration() {
  try {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 },
    });
  } catch {}
}
