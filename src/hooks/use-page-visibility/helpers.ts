/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Performs a simple check on the browser support for the Page Visibility API
 */
export function getBrowserCompatibility(): {
  hidden: string;
  visibilityChange: string;
} {
  switch (true) {
    // If it is an evergreen browser (97% support)
    default:
    case "hidden" in document:
      return {
        hidden: "hidden",
        visibilityChange: "visibilitychange",
      };

    // If it is Firefox v10-v17
    case "mozHidden" in document:
      return {
        hidden: "mozHidden",
        visibilityChange: "mozvisibilitychange",
      };

    // If it is Chrome v14-v32
    // Or if it is Opera v15-v19
    case "webkitHidden" in document:
      return {
        hidden: "webkitHidden",
        visibilityChange: "webkitvisibilitychange",
      };
  }
}
