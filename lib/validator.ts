import { PhotoRequirements } from './requirements';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  faceDetected: boolean;
  headPosition?: { x: number; y: number; width: number; height: number };
  eyePosition?: { left: { x: number; y: number }; right: { x: number; y: number } };
  backgroundColor?: string;
  fileSize: number;
  dimensions: { width: number; height: number };
}

export class PhotoValidator {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d')!;
  }

  async validatePhoto(imageFile: File, requirements: PhotoRequirements): Promise<ValidationResult> {
    const result: ValidationResult = {
      isValid: true,
      errors: [],
      warnings: [],
      faceDetected: false,
      fileSize: imageFile.size,
      dimensions: { width: 0, height: 0 }
    };

    // Load image
    const img = await this.loadImage(imageFile);
    result.dimensions = { width: img.width, height: img.height };

    // Check file size
    if (imageFile.size > requirements.maxFileSizeKB * 1024) {
      result.errors.push(`File size ${Math.round(imageFile.size/1024)}KB exceeds limit of ${requirements.maxFileSizeKB}KB`);
      result.isValid = false;
    }

    // Check dimensions
    if (img.width !== requirements.pixelWidth || img.height !== requirements.pixelHeight) {
      result.errors.push(`Dimensions ${img.width}x${img.height} don't match required ${requirements.pixelWidth}x${requirements.pixelHeight}`);
      result.isValid = false;
    }

    // Check background color
    const bgColor = await this.detectBackgroundColor(img);
    result.backgroundColor = bgColor;
    if (!this.isColorSimilar(bgColor, requirements.backgroundColor)) {
      result.errors.push(`Background color ${bgColor} doesn't match required ${requirements.backgroundColor}`);
      result.isValid = false;
    }

    // Face detection would go here (simplified for MVP)
    const faceData = await this.detectFace(img);
    if (faceData) {
      result.faceDetected = true;
      result.headPosition = faceData.head;
      result.eyePosition = faceData.eyes;

      // Validate head position
      const headRatio = faceData.head.height / img.height;
      if (headRatio < requirements.headHeightRatio.min || headRatio > requirements.headHeightRatio.max) {
        result.errors.push(`Head height ratio ${headRatio.toFixed(2)} outside range ${requirements.headHeightRatio.min}-${requirements.headHeightRatio.max}`);
        result.isValid = false;
      }
    } else {
      result.errors.push('No face detected in photo');
      result.isValid = false;
    }

    return result;
  }

  private loadImage(file: File): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  }

  private async detectBackgroundColor(img: HTMLImageElement): Promise<string> {
    this.canvas.width = img.width;
    this.canvas.height = img.height;
    this.ctx.drawImage(img, 0, 0);

    // Sample corners for background color
    const corners = [
      this.ctx.getImageData(0, 0, 1, 1),
      this.ctx.getImageData(img.width - 1, 0, 1, 1),
      this.ctx.getImageData(0, img.height - 1, 1, 1),
      this.ctx.getImageData(img.width - 1, img.height - 1, 1, 1)
    ];

    const avgColor = corners.reduce((acc, corner) => {
      const [r, g, b] = corner.data;
      return [acc[0] + r, acc[1] + g, acc[2] + b];
    }, [0, 0, 0]).map(c => Math.round(c / 4));

    return `#${avgColor.map(c => c.toString(16).padStart(2, '0')).join('')}`;
  }

  private async detectFace(img: HTMLImageElement): Promise<any> {
    // Simplified face detection - in production use MediaPipe or TensorFlow.js
    // For MVP, return mock data
    return {
      head: { x: img.width * 0.3, y: img.height * 0.2, width: img.width * 0.4, height: img.height * 0.6 },
      eyes: {
        left: { x: img.width * 0.4, y: img.height * 0.35 },
        right: { x: img.width * 0.6, y: img.height * 0.35 }
      }
    };
  }

  private isColorSimilar(color1: string, color2: string, threshold = 30): boolean {
    const rgb1 = this.hexToRgb(color1);
    const rgb2 = this.hexToRgb(color2);
    
    if (!rgb1 || !rgb2) return false;
    
    const diff = Math.sqrt(
      Math.pow(rgb1.r - rgb2.r, 2) +
      Math.pow(rgb1.g - rgb2.g, 2) +
      Math.pow(rgb1.b - rgb2.b, 2)
    );
    
    return diff <= threshold;
  }

  private hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
}
