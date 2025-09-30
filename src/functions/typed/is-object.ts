/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Checks if `value` is the language type of `Object`.
 *
 * (e.g. arrays, functions, objects, regexes, new Number(0), and new String(’’))
 *
 * @example
 *
 * isObject({})
 * // true
 *
 * isObject([1, 2, 3])
 * // true
 *
 * isObject(() => {})
 * // true
 *
 * isObject(null)
 * // false
 */
export function isObject(value: unknown): value is object {
  if (value === null) {
    return false;
  }

  if (typeof value !== "object") {
    return false;
  }

  return (value as any).constructor === Object;
}
