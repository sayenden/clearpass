export interface PhotoRequirements {
  country: string;
  documentType: string;
  pixelWidth: number;
  pixelHeight: number;
  maxFileSizeKB: number;
  backgroundColor: string;
  headHeightRatio: { min: number; max: number };
  eyeHeightRatio: { min: number; max: number };
  dpi: number;
  format: string[];
}

export const REQUIREMENTS: Record<string, PhotoRequirements> = {
  'US_PASSPORT': {
    country: 'United States',
    documentType: 'Passport',
    pixelWidth: 600,
    pixelHeight: 600,
    maxFileSizeKB: 240,
    backgroundColor: '#FFFFFF',
    headHeightRatio: { min: 0.5, max: 0.69 },
    eyeHeightRatio: { min: 0.56, max: 0.69 },
    dpi: 300,
    format: ['JPEG', 'PNG']
  },
  'US_VISA': {
    country: 'United States',
    documentType: 'Visa',
    pixelWidth: 600,
    pixelHeight: 600,
    maxFileSizeKB: 240,
    backgroundColor: '#FFFFFF',
    headHeightRatio: { min: 0.5, max: 0.69 },
    eyeHeightRatio: { min: 0.56, max: 0.69 },
    dpi: 300,
    format: ['JPEG']
  },
  'UK_PASSPORT': {
    country: 'United Kingdom',
    documentType: 'Passport',
    pixelWidth: 413,
    pixelHeight: 531,
    maxFileSizeKB: 10240,
    backgroundColor: '#F0F0F0',
    headHeightRatio: { min: 0.7, max: 0.8 },
    eyeHeightRatio: { min: 0.5, max: 0.6 },
    dpi: 300,
    format: ['JPEG', 'PNG']
  },
  'INDIA_PASSPORT': {
    country: 'India',
    documentType: 'Passport',
    pixelWidth: 200,
    pixelHeight: 230,
    maxFileSizeKB: 300,
    backgroundColor: '#FFFFFF',
    headHeightRatio: { min: 0.7, max: 0.8 },
    eyeHeightRatio: { min: 0.5, max: 0.6 },
    dpi: 300,
    format: ['JPEG']
  }
};

export function getRequirements(country: string, docType: string): PhotoRequirements | null {
  const key = `${country.toUpperCase()}_${docType.toUpperCase()}`;
  return REQUIREMENTS[key] || null;
}
