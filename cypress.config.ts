/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { defineConfig } from "cypress";
import codeCoverageTask from "@cypress/code-coverage/task";

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: "cypress/**/*.*",
    },
    TZ: "Europe/Lisbon",
  },
  component: {
    retries: {
      runMode: 2,
    },
    video: false,
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    viewportWidth: 800,
    viewportHeight: 800,
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);

      return config;
    },
  },
});
