/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { isBrowser } from "src/functions";

export const getElement = (function () {
  const targetElement = isBrowser ? document.createElement("div") : null;

  return function () {
    return targetElement;
  };
})();
