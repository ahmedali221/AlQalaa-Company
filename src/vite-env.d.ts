/// <reference types="vite/client" />

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

// Uppercase extensions (for Windows/macOS files with .JPG/.JPEG)
declare module "*.JPG" {
  const src: string;
  export default src;
}

declare module "*.JPEG" {
  const src: string;
  export default src;
}
