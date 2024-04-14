/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import type { UserConfig } from "vite";
import type { RollupOptions } from "rollup";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import istanbul from "vite-plugin-istanbul";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

type ModuleFormat =
  | "amd"
  | "cjs"
  | "es"
  | "iife"
  | "system"
  | "umd"
  | "commonjs"
  | "esm"
  | "module"
  | "systemjs";

const BASE_EXTERNAL_LIBRARIES = {
  react: "React",
  "react-dom": "ReactDOM",
  "react/jsx-runtime": "react/jsx-runtime",
};

const ROLLUP_OPTIONS: RollupOptions = {
  external: [...Object.keys(BASE_EXTERNAL_LIBRARIES)],
  output: {
    preserveModules: true,
    inlineDynamicImports: false,
    globals: {
      ...BASE_EXTERNAL_LIBRARIES,
    },
  },
};

/**
 * Gets a per-file format filename.
 *
 * @param format
 * @returns
 */
function getFilename(format: ModuleFormat, entryName: string) {
  const OUTPUT: Partial<Record<typeof format, string>> = {
    es: `${entryName}.mjs`,
    cjs: `${entryName}.cjs`,
  };

  return OUTPUT[format] ?? `${entryName}.cjs`;
}

const CONFIG: UserConfig = {
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
    dts({
      insertTypesEntry: false,
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: [
      {
        find: "src",
        replacement: resolve(__dirname, "./src"),
      },
    ],
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "JSUtilities",
      formats: ["es", "cjs"],
      fileName: getFilename,
    },
    terserOptions: {
      format: {
        comments: false,
      },
    },
    rollupOptions: ROLLUP_OPTIONS,
  },
};

// https://vitejs.dev/config/
export default defineConfig(CONFIG);
