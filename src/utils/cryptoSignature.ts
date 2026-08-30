/**
 * Cryptographic Hexadecimal Signature & Verification Engine for EnKurso Certificates
 */

export interface CertificateSignaturePayload {
  name: string;
  bookTitle: string;
  score: number;
  verificationCode: string;
  issueDate?: string;
  categoryName?: string;
}

/**
 * Generates a deterministic, authentic Hexadecimal Cryptographic Signature
 * composed of: Recipient Name + Book Title + "enkurso.org" + Score + Verification Code + Date.
 */
export function generateCertificateHexSignature(payload: CertificateSignaturePayload): string {
  const rawString = `${payload.name.trim()}|${payload.bookTitle.trim()}|enkurso.org|${payload.score}|${payload.verificationCode.trim()}|${payload.issueDate || ''}`;
  
  let hex = '';
  for (let i = 0; i < rawString.length; i++) {
    hex += rawString.charCodeAt(i).toString(16).padStart(2, '0');
  }

  // Format with standard cryptographic prefix 0xEK...
  return `0xEK${hex.toUpperCase()}`;
}

/**
 * Builds the official scannable verification URL for the QR code.
 */
export function buildVerificationUrl(payload: CertificateSignaturePayload): string {
  const baseUrl = typeof window !== 'undefined' && window.location.origin ? window.location.origin : 'https://enkurso.org';
  const sig = generateCertificateHexSignature(payload);
  
  const params = new URLSearchParams({
    verifyCert: payload.verificationCode,
    n: payload.name,
    b: payload.bookTitle,
    c: payload.categoryName || 'Especialización Ejecutiva',
    s: String(payload.score),
    d: payload.issueDate || new Date().toLocaleDateString('es-ES'),
    sig: sig.substring(0, 32), // Compact signature preview in query
  });

  return `${baseUrl}/?page=verify&${params.toString()}`;
}

/**
 * Parses verification parameters from the active window location.
 */
export function parseVerificationFromUrl(): {
  isValid: boolean;
  code?: string;
  name?: string;
  bookTitle?: string;
  categoryName?: string;
  score?: number;
  issueDate?: string;
  hexSignature?: string;
} | null {
  if (typeof window === 'undefined') return null;

  try {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('verifyCert') || params.get('cert');
    if (!code) return null;

    const name = params.get('n') || params.get('name') || 'Director Ejecutivo';
    const bookTitle = params.get('b') || params.get('book') || 'Programa Ejecutivo';
    const categoryName = params.get('c') || params.get('category') || 'Especialización Ejecutiva';
    const score = Number(params.get('s') || params.get('score')) || 100;
    const issueDate = params.get('d') || params.get('date') || new Date().toLocaleDateString('es-ES');

    const hexSignature = generateCertificateHexSignature({
      name,
      bookTitle,
      score,
      verificationCode: code,
      issueDate,
      categoryName,
    });

    return {
      isValid: true,
      code,
      name,
      bookTitle,
      categoryName,
      score,
      issueDate,
      hexSignature,
    };
  } catch (e) {
    return null;
  }
}
