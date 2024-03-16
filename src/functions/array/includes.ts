/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Checks if value is in collection.
 * If collection is a string, it’s checked for a substring of value.
 *
 * @example
 *
 * includes([1, 2, 3], 1)
 * // => true
 */
export function includes<T>(array: T[], value: any): boolean {
  return array.includes(value);
}
