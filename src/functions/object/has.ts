/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { ObjTypeWithAny } from "src/typings";
import { isNil } from "..";

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @example
 *
 * const object = { a: { bar: 2 } }
 *
 * has(object, 'a')
 * // => true
 *
 * has(object, 'a.bar')
 * // => true
 *
 * has(object, ['a', 'bar'])
 * // => true
 *
 * has(object, ['a', 'c'])
 * // => false
 */
export function has(obj: ObjTypeWithAny, path: string | string[]): boolean {
  if (isNil(obj) || isNil(path)) {
    return false;
  }

  const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);

  return !!pathArray?.reduce((prevObj: ObjTypeWithAny | undefined, key: string) => {
    return prevObj && prevObj[key];
  }, obj);
}
