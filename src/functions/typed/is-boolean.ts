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
export function isBoolean(value?: any): value is boolean {
  return value === !!value || typeof value === "boolean" || value instanceof Boolean;
}
