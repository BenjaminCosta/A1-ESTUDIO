/// <reference types="vite/client" />
/// <reference types="vite-imagetools" />

// WebP assets generated at build time
declare module "*.webp" {
  const src: string;
  export default src;
}
