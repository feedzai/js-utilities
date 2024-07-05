/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Checks if `value` is an empty object or collection.
 *
 * @example
 *
 * isEmpty(null)
 * // true
 *
 * isEmpty('')
 * // true
 *
 * isEmpty({})
 * // true
 *
 * isEmpty([])
 * // true
 *
 * isEmpty({a: '1'})
 * // false
 */
export function isEmpty(value: unknown): boolean {
  // Check for null or undefined
  if (value == null) {
    return true;
  }

  // Check for empty string or array
  if (typeof value === "string" || Array.isArray(value)) {
    return value.length === 0;
  }

  // Check for empty Map or Set
  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  // Check for empty object
  if (typeof value === "object") {
    return Object.keys(value as object).length === 0;
  }

  // All other values are considered non-empty
  return false;
}
