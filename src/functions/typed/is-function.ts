/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Checks if `value` is classified as a String primitive or object.
 *
 * @example
 *
 * isFunction(function () {})
 * // true
 *
 * isFunction(() => {})
 * // true
 *
 * isFunction(class NotAFunction {})
 * // true
 *
 * isFunction(/abc/)
 * // false
 */
export function isFunction(value?: any): value is Function {
  return !!(value && value.constructor && value.call && value.apply);
}
