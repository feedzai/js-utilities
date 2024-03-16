/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 *
 * @example
 *
 * const object = { a: 1, b: '2', c: 3 };
 * omit(object, ['a', 'c'])
 * // => { 'b': '2' }
 */
export function omit<T, TKeys extends keyof T>(obj: T, keys: TKeys[]): Omit<T, TKeys> {
  if (!obj) {
    return {} as Omit<T, TKeys>;
  }

  if (!keys || keys.length === 0) {
    return obj as Omit<T, TKeys>;
  }

  return keys.reduce(
    (acc, key) => {
      // This is mutating the object, but we
      // are allowing it in this very limited scope due
      // to the performance implications of an omit func.
      delete acc[key];
      return acc;
    },
    { ...obj }
  );
}
