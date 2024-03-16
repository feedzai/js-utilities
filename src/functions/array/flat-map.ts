/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.
 *
 * @example
 *
 * flatMap([1, 2], n => [n, n])
 * // => [1, 1, 2, 2]
 */
export function flatMap<T>(arr: T[], callback: (value: T, index: number, array: T[]) => T[]): T[] {
  return arr.reduce((acc, value, index, array) => {
    const mappedValues = callback(value, index, array);
    return acc.concat(mappedValues as any);
  }, []) as T[];
}
