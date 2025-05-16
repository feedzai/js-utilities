/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2024 Feedzai, Rights Reserved.
 */

/**
 * Joins strings to format IDs for compound components.
 *
 * @example
 * makeId("fdz-js-tabbable-button", "123")
 * // => "fdz-js-tabbable--button-123"
 *
 * @param args
 * @returns {string}
 */
export function makeId(...args: (string | number | null | undefined)[]) {
  return args.filter((val) => val !== null).join("--");
}
