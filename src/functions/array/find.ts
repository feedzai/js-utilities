/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Iterates over elements of collection, returning the first element predicate returns truthy for.
 * The predicate is invoked with three arguments: (value, index|key, collection).
 *
 * @example
 *
 * const users = [
 *  { user: 'barney', age: 36, active: true },
 *  { user: 'fred', age: 40, active: false },
 *  { user: 'pebbles', age: 1, active: true },
 * ]
 *
 * find(users, o => o.age < 40)
 * // => { user: "barney", age: 36, active: true }
 */
export function find<T>(
  arr: T[],
  predicate: (value: T, index: number, obj: T[]) => unknown
): T | undefined {
  return arr.find(predicate);
}
