// Shared constant definitions

export const MESSAGE_TYPES = {
  CREATE_SHAPES: 'create-shapes',
  CANCEL: 'cancel'
} as const;

export const DEFAULT_VALUES = {
  RECTANGLE_COUNT: 7,
  RECTANGLE_COLOR: '#ff8000',
  RECTANGLE_SPACING: 150
} as const;

export const VALIDATION = {
  MIN_COUNT: 1,
  MAX_COUNT: 100
} as const;
