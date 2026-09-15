// The small part of opentype.js that scripts/render-card.ts uses. The package
// ships no type declarations.
declare module "opentype.js" {
  export interface Path {
    toPathData(decimalPlaces?: number): string;
  }
  export interface RenderOptions {
    kerning?: boolean;
    features?: Record<string, boolean>;
  }
  export interface Font {
    getPath(text: string, x: number, y: number, fontSize: number, options?: RenderOptions): Path;
    getAdvanceWidth(text: string, fontSize: number, options?: RenderOptions): number;
  }
  export function parse(buffer: ArrayBuffer): Font;
  const opentype: { parse: typeof parse };
  export default opentype;
}
