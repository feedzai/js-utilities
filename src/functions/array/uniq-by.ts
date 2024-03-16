/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
type Iteratee<T> = keyof T | ((item: T) => any);

/**
 * This method is like `uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).

 * @example
 *
 * uniqBy([2.1, 1.2, 2.3], Math.floor)
 * // => [2.1, 1.2]
 */
export function uniqBy<T>(arr: T[], iteratee: Iteratee<T>): T[] {
  const getKey = (item: T): any => {
    if (typeof iteratee === "function") {
      return iteratee(item);
    }

    return item[iteratee];
  };

  const uniqueKeys = new Set<any>();

  return arr.filter((item) => {
    const key = getKey(item);
    if (uniqueKeys.has(key)) {
      return false;
    } else {
      uniqueKeys.add(key);
      return true;
    }
  });
}
