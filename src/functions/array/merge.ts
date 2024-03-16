/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { ObjTypeWithAny } from "src/typings";

/**
 * This method is like `assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object.
 *
 * Source properties that resolve to `undefined` are
 * skipped if a destination value exists.
 *
 * Array and plain object properties are merged recursively.
 *
 * Other objects and value types are overridden by
 * assignment.
 *
 * Source objects are applied from left to right.
 *
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @example
 *
 * const object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * }
 *
 * const other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * }
 *
 * merge(object, other)
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
export function merge<T extends ObjTypeWithAny, U extends ObjTypeWithAny>(
  target: T,
  source: U
): T & U {
  const merged: any = { ...target };

  for (const key in source) {
    if (typeof source[key] === "object" && source[key] !== null && !Array.isArray(source[key])) {
      merged[key] = merge(target[key] ?? {}, source[key]);
    } else if (Array.isArray(source[key]) && Array.isArray(target[key])) {
      // Merge arrays recursively @ts-ignore
      merged[key] = target[key].map((item: any, index: number) => merge(item, source[key][index]));
    } else {
      merged[key] = source[key];
    }
  }

  return merged as T & U;
}
