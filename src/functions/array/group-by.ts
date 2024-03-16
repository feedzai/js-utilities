/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @example
 *
 * groupBy([6.1, 4.2, 6.3], Math.floor)
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 */
export function groupBy<T, K>(collection: T[], iteratee: (element: T) => K): Record<string, T[]> {
  const groups: Record<string, T[]> = {};

  collection.forEach((element) => {
    const key = String(iteratee(element));
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(element);
  });

  return groups;
}
