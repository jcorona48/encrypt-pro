/// <reference types="bun" />

interface ImportMetaEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly IV_LENGTH: string;
    readonly AES_ALGORITHM: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  