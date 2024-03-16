/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { isNil } from "..";

/**
 * Creates an object composed of the picked object properties.
 *
 * @example
 *
 * const object = {
 *  a: 1,
 *  b: 2,
 *  c: 3,
 * }
 *
 * pick(object, ['a', 'c'])
 * // => {a: 1, c: 3}
 */
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const picked: Partial<T> = {};

  if (!isNil(obj)) {
    keys.forEach((key) => {
      if (obj.hasOwnProperty(key)) {
        picked[key] = obj[key];
      }
    });
  }

  return picked as Pick<T, K>;
}
