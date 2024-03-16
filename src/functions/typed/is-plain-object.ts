/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { isNil } from ".";

/**
 * Checks if value is a plain object, that is, an object created by the Object constructor or one with a [[Prototype]] of null.
 *
 * @example
 *
 * isPlainObject({});
 * // true
 *
 * isPlainObject([]);
 * // false
 *
 * isPlainObject(null);
 * // false
 *
 * isPlainObject(new Date());
 * // false
 *
 * isPlainObject('string');
 * // false
 *
 * isPlainObject(123);
 * // false
 *
 * isPlainObject(Object.create(null));
 * // true
 */
export function isPlainObject(value?: any): value is object {
  if (isNil(value)) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}
