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
export function isEmpty(value?: any): boolean {
  return [Object, Array].includes((value || {}).constructor) && !Object.entries(value || {}).length;
}
