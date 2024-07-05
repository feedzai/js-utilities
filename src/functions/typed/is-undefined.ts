/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Checks if `value` is undefined.
 *
 * @example
 *
 * isUndefined(undefined)
 * // true
 *
 * isUndefined(null)
 * // false
 */
export function isUndefined(value: unknown): value is undefined {
  return value === void 0;
}
