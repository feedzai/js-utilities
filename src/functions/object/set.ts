/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { clone, toInt } from "..";

/**
 * Sets the value at path of object.
 * If a portion of path doesn’t exist, it’s created.
 * Arrays are created for missing index properties while objects are created for all other missing properties
 *
 * @example
 *
 * const object = { a: [{ bar: { c: 3 } }] }
 * set(object, 'a[0].bar.c', 4)
 * object.a[0].bar.c
 * // => 4
 *
 * set(object, ['x', '0', 'y', 'z'], 5)
 * object.x[0].y.z
 * // => 5
 */
export function set<T extends object, K>(initial: T, path: string, value: K): T {
  if (!initial) return {} as T;
  if (!path || value === undefined) return initial;
  const pathArray = Array.isArray(path) ? path : path.split(/[\.\[\]]/g);
  const segments = pathArray.filter((x) => !!x.trim());
  const _set = (node: any) => {
    if (segments.length > 1) {
      const key = segments.shift() as string;
      const nextIsNum = toInt(segments[0], null) === null ? false : true;
      node[key] = node[key] === undefined ? (nextIsNum ? [] : {}) : node[key];
      _set(node[key]);
    } else {
      node[segments[0]] = value;
    }
  };
  // NOTE: One day, when structuredClone has more
  // compatability use it to clone the value
  // https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
  const cloned = clone(initial);
  _set(cloned);
  return cloned;
}
