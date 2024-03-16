/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Creates an array of elements split into groups the length of size.
 * If array can’t be split evenly, the final chunk will be the remaining elements.
 *
 * @example
 *
 * chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
 * // => [['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g']]
 *
 * chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3)
 * // => [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']]
 *
 * chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 0)
 * // => []
 *
 * chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], -1)
 * // => []
 */
export function chunk<T>(arr: T[], chunkSize: number = 1): T[][] {
  if (!Array.isArray(arr) || arr.length === 0 || chunkSize <= 0) {
    return [];
  }

  const chunks: T[][] = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}
