/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Flattens array a certain number of levels deep.
 *
 * It can do it up to a certain depth or recursively.
 *
 * @example
 *
 * const array = [1, [2, [3, [4]], 5]]
 *
 * flatten(array, 5]])
 * // => [1, 2, [3, [4]], 5]
 *
 * flatten(array, true)
 * // => [1, 2, 3, 4, 5]
 *
 * flattenDepth(array, 1)
 * // => [1, 2, [3, [4]], 5]
 *
 * flattenDepth(array, 2)
 * // => [1, 2, 3, [4], 5]
 */
export function flatten<T>(arr: T[], level?: number | boolean) {
  if (typeof level === "boolean") {
    return arr.flat(level ? Infinity : 1);
  }

  if (typeof level === "number" && level >= 0) {
    // Check if level is a non-negative number
    return arr.flat(level);
  }

  return arr.flat();
}
