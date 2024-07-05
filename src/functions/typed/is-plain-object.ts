/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Checks if value is a plain object, that is, an object created by the Object constructor or one with a [[Prototype]] of null.
 *
 * @param value - The value to check
 * @returns True if the value is a plain object, false otherwise
 *
 * @example
 * isPlainObject({})                 // true
 * isPlainObject(Object.create(null)) // true
 * isPlainObject([])                 // false
 * isPlainObject(null)               // false
 * isPlainObject(undefined)          // false
 * isPlainObject(new Date())         // false
 * isPlainObject('string')           // false
 * isPlainObject(123)                // false
 * isPlainObject(function(){})       // false
 */
export function isPlainObject(value: unknown): value is Record<string, unknown> {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}
