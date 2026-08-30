// Local Currency & Country Localization Engine for EnKurso (EnKurso.org)
// Designed for realistic, clean, commercial rounding in all Latin American currencies

export interface PricingTierDetail {
  minUsd: number;
  maxUsd: number;
  minLocal: number;
  maxLocal: number;
  samplePitchPrice: string;
  formatted: string;
}

export interface CountryCurrencyConfig {
  code: string; // ISO 2 code (e.g. 'CO', 'MX', 'PE')
  name: string;
  flag: string;
  currencyCode: string; // e.g. 'COP', 'MXN', 'PEN', 'USD'
  currencySymbol: string; // e.g. '$', 'S/.', 'Q', '₡', 'RD$', 'Bs.', '€'
  currencyName: string;
  pricingTiers: {
    junior: PricingTierDetail;
    mid: PricingTierDetail;
    senior: PricingTierDetail;
  };
}

export const SUPPORTED_COUNTRIES: CountryCurrencyConfig[] = [
  {
    code: 'MX',
    name: 'México',
    flag: '🇲🇽',
    currencyCode: 'MXN',
    currencySymbol: '$',
    currencyName: 'Peso Mexicano',
    pricingTiers: {
      junior: {
        minUsd: 25,
        maxUsd: 60,
        minLocal: 500,
        maxLocal: 1200,
        samplePitchPrice: '$700 MXN',
        formatted: '$500 – $1,200 MXN',
      },
      mid: {
        minUsd: 80,
        maxUsd: 180,
        minLocal: 1600,
        maxLocal: 3600,
        samplePitchPrice: '$2,200 MXN',
        formatted: '$1,600 – $3,600 MXN',
      },
      senior: {
        minUsd: 220,
        maxUsd: 500,
        minLocal: 4500,
        maxLocal: 10000,
        samplePitchPrice: '$6,000 MXN',
        formatted: '$4,500 – $10,000+ MXN',
      },
    },
  },
  {
    code: 'CO',
    name: 'Colombia',
    flag: '🇨🇴',
    currencyCode: 'COP',
    currencySymbol: '$',
    currencyName: 'Peso Colombiano',
    pricingTiers: {
      junior: {
        minUsd: 25,
        maxUsd: 60,
        minLocal: 100000,
        maxLocal: 250000,
        samplePitchPrice: '$150.000 COP',
        formatted: '$100.000 – $250.000 COP',
      },
      mid: {
        minUsd: 80,
        maxUsd: 180,
        minLocal: 320000,
        maxLocal: 750000,
        samplePitchPrice: '$450.000 COP',
        formatted: '$320.000 – $750.000 COP',
      },
      senior: {
        minUsd: 220,
        maxUsd: 500,
        minLocal: 900000,
        maxLocal: 2000000,
        samplePitchPrice: '$1.200.000 COP',
        formatted: '$900.000 – $2.000.000+ COP',
      },
    },
  },
  {
    code: 'PE',
    name: 'Perú',
    flag: '🇵🇪',
    currencyCode: 'PEN',
    currencySymbol: 'S/.',
    currencyName: 'Sol Peruano',
    pricingTiers: {
      junior: {
        minUsd: 25,
        maxUsd: 60,
        minLocal: 90,
        maxLocal: 220,
        samplePitchPrice: 'S/. 130 PEN',
        formatted: 'S/. 90 – S/. 220 PEN',
      },
      mid: {
        minUsd: 80,
        maxUsd: 180,
        minLocal: 300,
        maxLocal: 680,
        samplePitchPrice: 'S/. 420 PEN',
        formatted: 'S/. 300 – S/. 680 PEN',
      },
      senior: {
        minUsd: 220,
        maxUsd: 500,
        minLocal: 800,
        maxLocal: 1900,
        samplePitchPrice: 'S/. 1,200 PEN',
        formatted: 'S/. 800 – S/. 1,900+ PEN',
      },
    },
  },
  {
    code: 'CL',
    name: 'Chile',
    flag: '🇨🇱',
    currencyCode: 'CLP',
    currencySymbol: '$',
    currencyName: 'Peso Chileno',
    pricingTiers: {
      junior: {
        minUsd: 25,
        maxUsd: 60,
        minLocal: 25000,
        maxLocal: 60000,
        samplePitchPrice: '$35.000 CLP',
        formatted: '$25.000 – $60.000 CLP',
      },
      mid: {
        minUsd: 80,
        maxUsd: 180,
        minLocal: 75000,
        maxLocal: 170000,
        samplePitchPrice: '$110.000 CLP',
        formatted: '$75.000 – $170.000 CLP',
      },
      senior: {
        minUsd: 220,
        maxUsd: 500,
        minLocal: 210000,
        maxLocal: 480000,
        samplePitchPrice: '$280.000 CLP',
        formatted: '$210.000 – $480.000+ CLP',
      },
    },
  },
  {
    code: 'AR',
    name: 'Argentina',
    flag: '🇦🇷',
    currencyCode: 'ARS',
    currencySymbol: '$',
    currencyName: 'Peso Argentino',
    pricingTiers: {
      junior: {
        minUsd: 25,
        maxUsd: 60,
        minLocal: 30000,
        maxLocal: 75000,
        samplePitchPrice: '$45.000 ARS',
        formatted: '$30.000 – $75.000 ARS',
      },
      mid: {
        minUsd: 80,
        maxUsd: 180,
        minLocal: 100000,
        maxLocal: 230000,
        samplePitchPrice: '$150.000 ARS',
        formatted: '$100.000 – $230.000 ARS',
      },
      senior: {
        minUsd: 220,
        maxUsd: 500,
        minLocal: 280000,
        maxLocal: 650000,
        samplePitchPrice: '$400.000 ARS',
        formatted: '$280.000 – $650.000+ ARS',
      },
    },
  },
  {
    code: 'EC',
    name: 'Ecuador',
    flag: '🇪🇨',
    currencyCode: 'USD',
    currencySymbol: '$',
    currencyName: 'Dólar Estadounidense',
    pricingTiers: {
      junior: {
        minUsd: 25,
        maxUsd: 60,
        minLocal: 25,
        maxLocal: 60,
        samplePitchPrice: '$35 USD',
        formatted: '$25 – $60 USD',
      },
      mid: {
        minUsd: 80,
        maxUsd: 180,
        minLocal: 80,
        maxLocal: 180,
        samplePitchPrice: '$120 USD',
        formatted: '$80 – $180 USD',
      },
      senior: {
        minUsd: 220,
        maxUsd: 500,
        minLocal: 220,
        maxLocal: 500,
        samplePitchPrice: '$300 USD',
        formatted: '$220 – $500+ USD',
      },
    },
  },
  {
    code: 'GT',
    name: 'Guatemala',
    flag: '🇬🇹',
    currencyCode: 'GTQ',
    currencySymbol: 'Q',
    currencyName: 'Quetzal Guatemalteco',
    pricingTiers: {
      junior: {
        minUsd: 25,
        maxUsd: 60,
        minLocal: 200,
        maxLocal: 450,
        samplePitchPrice: 'Q 280 GTQ',
        formatted: 'Q 200 – Q 450 GTQ',
      },
      mid: {
        minUsd: 80,
        maxUsd: 180,
        minLocal: 600,
        maxLocal: 1400,
        samplePitchPrice: 'Q 950 GTQ',
        formatted: 'Q 600 – Q 1,400 GTQ',
      },
      senior: {
        minUsd: 220,
        maxUsd: 500,
        minLocal: 1700,
        maxLocal: 3900,
        samplePitchPrice: 'Q 2,500 GTQ',
        formatted: 'Q 1,700 – Q 3,900+ GTQ',
      },
    },
  },
  {
    code: 'CR',
    name: 'Costa Rica',
    flag: '🇨🇷',
    currencyCode: 'CRC',
    currencySymbol: '₡',
    currencyName: 'Colón Costarricense',
    pricingTiers: {
      junior: {
        minUsd: 25,
        maxUsd: 60,
        minLocal: 13000,
        maxLocal: 30000,
        samplePitchPrice: '₡18.000 CRC',
        formatted: '₡13.000 – ₡30.000 CRC',
      },
      mid: {
        minUsd: 80,
        maxUsd: 180,
        minLocal: 40000,
        maxLocal: 95000,
        samplePitchPrice: '₡60.000 CRC',
        formatted: '₡40.000 – ₡95.000 CRC',
      },
      senior: {
        minUsd: 220,
        maxUsd: 500,
        minLocal: 115000,
        maxLocal: 260000,
        samplePitchPrice: '₡160.000 CRC',
        formatted: '₡115.000 – ₡260.000+ CRC',
      },
    },
  },
  {
    code: 'DO',
    name: 'Rep. Dominicana',
    flag: '🇩🇴',
    currencyCode: 'DOP',
    currencySymbol: 'RD$',
    currencyName: 'Peso Dominicano',
    pricingTiers: {
      junior: {
        minUsd: 25,
        maxUsd: 60,
        minLocal: 1500,
        maxLocal: 3600,
        samplePitchPrice: 'RD$ 2,200 DOP',
        formatted: 'RD$ 1,500 – RD$ 3,600 DOP',
      },
      mid: {
        minUsd: 80,
        maxUsd: 180,
        minLocal: 4800,
        maxLocal: 11000,
        samplePitchPrice: 'RD$ 7,500 DOP',
        formatted: 'RD$ 4,800 – RD$ 11,000 DOP',
      },
      senior: {
        minUsd: 220,
        maxUsd: 500,
        minLocal: 13000,
        maxLocal: 30000,
        samplePitchPrice: 'RD$ 18,000 DOP',
        formatted: 'RD$ 13,000 – RD$ 30,000+ DOP',
      },
    },
  },
  {
    code: 'BO',
    name: 'Bolivia',
    flag: '🇧🇴',
    currencyCode: 'BOB',
    currencySymbol: 'Bs.',
    currencyName: 'Boliviano',
    pricingTiers: {
      junior: {
        minUsd: 25,
        maxUsd: 60,
        minLocal: 170,
        maxLocal: 420,
        samplePitchPrice: 'Bs. 250 BOB',
        formatted: 'Bs. 170 – Bs. 420 BOB',
      },
      mid: {
        minUsd: 80,
        maxUsd: 180,
        minLocal: 550,
        maxLocal: 1250,
        samplePitchPrice: 'Bs. 850 BOB',
        formatted: 'Bs. 550 – Bs. 1,250 BOB',
      },
      senior: {
        minUsd: 220,
        maxUsd: 500,
        minLocal: 1500,
        maxLocal: 3500,
        samplePitchPrice: 'Bs. 2,200 BOB',
        formatted: 'Bs. 1,500 – Bs. 3,500+ BOB',
      },
    },
  },
  {
    code: 'PA',
    name: 'Panamá',
    flag: '🇵🇦',
    currencyCode: 'USD',
    currencySymbol: '$',
    currencyName: 'Dólar / Balboa',
    pricingTiers: {
      junior: {
        minUsd: 25,
        maxUsd: 60,
        minLocal: 25,
        maxLocal: 60,
        samplePitchPrice: '$35 USD',
        formatted: '$25 – $60 USD',
      },
      mid: {
        minUsd: 80,
        maxUsd: 180,
        minLocal: 80,
        maxLocal: 180,
        samplePitchPrice: '$120 USD',
        formatted: '$80 – $180 USD',
      },
      senior: {
        minUsd: 220,
        maxUsd: 500,
        minLocal: 220,
        maxLocal: 500,
        samplePitchPrice: '$300 USD',
        formatted: '$220 – $500+ USD',
      },
    },
  },
  {
    code: 'SV',
    name: 'El Salvador',
    flag: '🇸🇻',
    currencyCode: 'USD',
    currencySymbol: '$',
    currencyName: 'Dólar Estadounidense',
    pricingTiers: {
      junior: {
        minUsd: 25,
        maxUsd: 60,
        minLocal: 25,
        maxLocal: 60,
        samplePitchPrice: '$35 USD',
        formatted: '$25 – $60 USD',
      },
      mid: {
        minUsd: 80,
        maxUsd: 180,
        minLocal: 80,
        maxLocal: 180,
        samplePitchPrice: '$120 USD',
        formatted: '$80 – $180 USD',
      },
      senior: {
        minUsd: 220,
        maxUsd: 500,
        minLocal: 220,
        maxLocal: 500,
        samplePitchPrice: '$300 USD',
        formatted: '$220 – $500+ USD',
      },
    },
  },
  {
    code: 'UY',
    name: 'Uruguay',
    flag: '🇺🇾',
    currencyCode: 'UYU',
    currencySymbol: '$',
    currencyName: 'Peso Uruguayo',
    pricingTiers: {
      junior: {
        minUsd: 25,
        maxUsd: 60,
        minLocal: 1000,
        maxLocal: 2400,
        samplePitchPrice: '$1.500 UYU',
        formatted: '$1.000 – $2.400 UYU',
      },
      mid: {
        minUsd: 80,
        maxUsd: 180,
        minLocal: 3200,
        maxLocal: 7200,
        samplePitchPrice: '$4.800 UYU',
        formatted: '$3.200 – $7.200 UYU',
      },
      senior: {
        minUsd: 220,
        maxUsd: 500,
        minLocal: 9000,
        maxLocal: 20000,
        samplePitchPrice: '$13.000 UYU',
        formatted: '$9.000 – $20.000+ UYU',
      },
    },
  },
  {
    code: 'PY',
    name: 'Paraguay',
    flag: '🇵🇾',
    currencyCode: 'PYG',
    currencySymbol: '₲',
    currencyName: 'Guaraní Paraguayo',
    pricingTiers: {
      junior: {
        minUsd: 25,
        maxUsd: 60,
        minLocal: 190000,
        maxLocal: 450000,
        samplePitchPrice: '₲270.000 PYG',
        formatted: '₲190.000 – ₲450.000 PYG',
      },
      mid: {
        minUsd: 80,
        maxUsd: 180,
        minLocal: 600000,
        maxLocal: 1350000,
        samplePitchPrice: '₲900.000 PYG',
        formatted: '₲600.000 – ₲1.350.000 PYG',
      },
      senior: {
        minUsd: 220,
        maxUsd: 500,
        minLocal: 1650000,
        maxLocal: 3800000,
        samplePitchPrice: '₲2.400.000 PYG',
        formatted: '₲1.650.000 – ₲3.800.000+ PYG',
      },
    },
  },
  {
    code: 'ES',
    name: 'España (Europa)',
    flag: '🇪🇸',
    currencyCode: 'EUR',
    currencySymbol: '€',
    currencyName: 'Euro',
    pricingTiers: {
      junior: {
        minUsd: 25,
        maxUsd: 60,
        minLocal: 25,
        maxLocal: 55,
        samplePitchPrice: '35€ EUR',
        formatted: '25€ – 55€ EUR',
      },
      mid: {
        minUsd: 80,
        maxUsd: 180,
        minLocal: 75,
        maxLocal: 165,
        samplePitchPrice: '110€ EUR',
        formatted: '75€ – 165€ EUR',
      },
      senior: {
        minUsd: 220,
        maxUsd: 500,
        minLocal: 200,
        maxLocal: 460,
        samplePitchPrice: '280€ EUR',
        formatted: '200€ – 460€+ EUR',
      },
    },
  },
  {
    code: 'US',
    name: 'Internacional / USD',
    flag: '🌐',
    currencyCode: 'USD',
    currencySymbol: '$',
    currencyName: 'Dólar (USD)',
    pricingTiers: {
      junior: {
        minUsd: 25,
        maxUsd: 60,
        minLocal: 25,
        maxLocal: 60,
        samplePitchPrice: '$35 USD',
        formatted: '$25 – $60 USD',
      },
      mid: {
        minUsd: 80,
        maxUsd: 180,
        minLocal: 80,
        maxLocal: 180,
        samplePitchPrice: '$120 USD',
        formatted: '$80 – $180 USD',
      },
      senior: {
        minUsd: 220,
        maxUsd: 500,
        minLocal: 220,
        maxLocal: 500,
        samplePitchPrice: '$300 USD',
        formatted: '$220 – $500+ USD',
      },
    },
  },
];

export const DEFAULT_COUNTRY = SUPPORTED_COUNTRIES.find(c => c.code === 'MX') || SUPPORTED_COUNTRIES[0];

export function getCountryConfig(code?: string): CountryCurrencyConfig {
  if (!code) return DEFAULT_COUNTRY;
  const found = SUPPORTED_COUNTRIES.find(c => c.code.toUpperCase() === code.toUpperCase());
  return found || DEFAULT_COUNTRY;
}

/**
 * Localizes any pitch text dynamically by replacing USD price occurrences (e.g. '$35 USD', '$45 USD', '$50 USD')
 * with the user's selected local currency sample price.
 */
export function localizePitchText(pitch: string, countryCode?: string): string {
  const config = getCountryConfig(countryCode);
  if (!pitch) return '';
  if (config.code === 'US' || config.currencyCode === 'USD') {
    return pitch;
  }

  // Replace common junior/starter pitch references ($35 USD, $40 USD, $45 USD, $50 USD, $60 USD)
  return pitch
    .replace(/\$35\s*USD/gi, config.pricingTiers.junior.samplePitchPrice)
    .replace(/\$40\s*USD/gi, config.pricingTiers.junior.samplePitchPrice)
    .replace(/\$45\s*USD/gi, config.pricingTiers.junior.samplePitchPrice)
    .replace(/\$50\s*USD/gi, config.pricingTiers.junior.samplePitchPrice)
    .replace(/\$60\s*USD/gi, config.pricingTiers.junior.samplePitchPrice)
    .replace(/\$120\s*USD/gi, config.pricingTiers.mid.samplePitchPrice)
    .replace(/\$150\s*USD/gi, config.pricingTiers.mid.samplePitchPrice)
    .replace(/\$300\s*USD/gi, config.pricingTiers.senior.samplePitchPrice);
}

/**
 * Returns clean local price tier description for reader & overview modals
 */
export function getPricingDisplayForCountry(countryCode?: string) {
  const config = getCountryConfig(countryCode);
  return {
    junior: config.pricingTiers.junior.formatted,
    mid: config.pricingTiers.mid.formatted,
    senior: config.pricingTiers.senior.formatted,
    currencyCode: config.currencyCode,
    currencySymbol: config.currencySymbol,
    countryName: config.name,
    countryFlag: config.flag,
  };
}
