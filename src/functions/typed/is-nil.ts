/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Checks if `value` is null or undefined.
 *
 * @example
 *
 * isNil(null)
 * // true
 *
 * isNil(undefined)
 * // true
 *
 * isNil(NaN)
 * // false
 */
export function isNil(value?: any): value is null | undefined {
  return value === null || value === undefined;
}
