/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

import { isNil } from "..";

/**
 * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
 * in its place.
 *
 * @example
 *
 * const simpleObject = { a: { b: 2 } }
 * const complexObject = { a: [{ bar: { c: 3 } }] }
 * const falsyObject = { a: null, b: undefined, c: 0 }
 *
 * get(simpleObject, 'a.b')
 * // => 2
 *
 * get(complexObject, 'a[0].bar.c')
 * // => 3
 *
 * get(complexObject, ['a', '0', 'bar', 'c'])
 * // => 2
 *
 * get(simpleObject, 'a.bar.c', 'default')
 * // => 'default'
 *
 * get(complexObject, 'a.bar.c', 'default')
 * // =>  'default'
 *
 * get(complexObject, null)
 * // =>  undefined
 *
 * get(falsyObject, 'a', 'default')
 * // =>  null
 *
 * get(falsyObject, 'b', 'default')
 * // =>  undefined
 *
 * get(falsyObject, 'c', 'default')
 * // =>  zero
 *
 * @param object The object to query.
 * @param path The path of the property to get.
 * @param defaultValue The value returned if the resolved value is undefined.
 * @return Returns the resolved value.
 */
export function get<TDefault = unknown>(
  value: any,
  path: string,
  defaultValue?: TDefault
): TDefault | undefined {
  if (isNil(path)) {
    return;
  }

  const segments = Array.isArray(path) ? path : path.split(/[\.\[\]]/g);
  let current: any = value;
  for (const key of segments) {
    if (current === null) return defaultValue as TDefault;
    if (current === undefined) return defaultValue as TDefault;
    if (key.trim() === "") continue;
    current = current[key];
  }
  if (current === undefined) return defaultValue as TDefault;
  return current;
}
