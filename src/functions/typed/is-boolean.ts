/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @example
 *
 * isBoolean(false)
 * // true
 *
 * isBoolean(null)
 * // false
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean" || value instanceof Boolean;
}
