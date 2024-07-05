/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Checks if `value` is null.
 *
 * @example
 *
 * isNull(null)
 * // true
 *
 * isNull(undefined)
 * // false
 */
export function isNull(value: unknown): value is null {
  return value === null;
}
