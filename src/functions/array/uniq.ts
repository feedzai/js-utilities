/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Creates a duplicate-free version of an array, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.
 *
 * @example
 *
 * uniq([2, 1, 2])
 * // => [2, 1]
 *
 * @param array
 * @returns
 */
export function uniq<T>(array: T[]): T[] {
  return [...new Set(array)];
}
