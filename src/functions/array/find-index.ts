/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * This method is like find except that it returns the index of the first element predicate returns truthy for instead of the element itself.
 *
 * @example
 *
 * const users = [
 *  { user: 'barney', age: 36, active: true },
 *  { user: 'fred', age: 40, active: false },
 *  { user: 'pebbles', age: 1, active: true },
 * ]
 *
 * findIndex(users, o => o.age >= 40)
 * // => 1
 */
export function findIndex<T>(
  arr: T[],
  predicate: (value: T, index: number, obj: T[]) => unknown
): number {
  return arr.findIndex(predicate);
}
