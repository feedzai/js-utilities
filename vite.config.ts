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

const BASE_EXTERNAL_LIBRARIES = {
  react: "React",
  "react-dom": "ReactDOM",
  "react/jsx-runtime": "react/jsx-runtime",
};

const ROLLUP_OPTIONS: RollupOptions = {
  external: [...Object.keys(BASE_EXTERNAL_LIBRARIES)],
  output: {
    globals: {
      ...BASE_EXTERNAL_LIBRARIES,
    },
  },
};

const CONFIG: UserConfig = {
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
    dts({
      outDir: "dist/types",
      insertTypesEntry: true,
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
      formats: ["es", "umd"],
      fileName: (format) => {
        const OUTPUT: Partial<Record<typeof format, string>> = {
          es: "index.es.mjs",
          umd: "index.umd.cjs",
        };

        return OUTPUT[format] ?? "cindex.js";
      },
    },
    rollupOptions: ROLLUP_OPTIONS,
  },
};

// https://vitejs.dev/config/
export default defineConfig(CONFIG);
