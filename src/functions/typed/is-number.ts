/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Checks if `value` is classified as a Number primitive or object.
 *
 * @example
 *
 * isNumber(3)
 * // true
 *
 * isNumber(Number.MIN_VALUE)
 * // true
 *
 * isNumber(Infinity)
 * // true
 *
 * isNumber('3')
 * // false
 */
export function isNumber(value?: any): value is number {
  return typeof value === "number" || value instanceof Number;
}

export { isNumber as isInteger };
