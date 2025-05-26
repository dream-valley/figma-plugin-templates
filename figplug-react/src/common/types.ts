// Shared type definitions

export interface PluginMessage {
  type: string;
}

export interface CreateShapesMessage extends PluginMessage {
  type: 'create-shapes';
  count: number;
  color?: string;
}

export interface CancelMessage extends PluginMessage {
  type: 'cancel';
}

export type UIMessage = CreateShapesMessage | CancelMessage;

export interface RGBColor {
  r: number;
  g: number;
  b: number;
}
