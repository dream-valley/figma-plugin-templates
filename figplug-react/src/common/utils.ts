import { RGBColor } from './types';

/**
 * Convert hexadecimal color to RGB color object
 * @param hex Hexadecimal color string (e.g., "#ff8000")
 * @returns RGB color object with values ranging from 0-1
 */
export function hexToRgb(hex: string): RGBColor {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16) / 255,
    g: parseInt(result[2], 16) / 255,
    b: parseInt(result[3], 16) / 255
  } : { r: 1, g: 0.5, b: 0 }; // Default orange color
}

/**
 * Convert RGB color object to hexadecimal color string
 * @param rgb RGB color object with values ranging from 0-1
 * @returns Hexadecimal color string
 */
export function rgbToHex(rgb: RGBColor): string {
  const toHex = (value: number) => {
    const hex = Math.round(value * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
}

/**
 * Validate if the color value is valid
 * @param hex Hexadecimal color string
 * @returns Whether it is a valid color value
 */
export function isValidHexColor(hex: string): boolean {
  return /^#?([a-f\d]{6})$/i.test(hex);
}

/**
 * Get default color
 * @returns Default orange color
 */
export function getDefaultColor(): RGBColor {
  return { r: 1, g: 0.5, b: 0 };
}
