/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Checks if `value` is classified as a String primitive or object.
 *
 * @example
 * isFunction(function() {})  // true
 * isFunction(() => {})       // true
 * isFunction(class {})       // true
 * isFunction(/abc/)          // false
 * isFunction(null)           // false
 * isFunction(undefined)      // false
 */
export function isFunction(value: unknown): value is Function {
  return typeof value === "function";
}
