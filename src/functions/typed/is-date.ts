/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Determine if a value is a Date.
 *
 * Note: Does not check that the input date is valid, only that it is a Javascript Date type.
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date || Object.prototype.toString.call(value) === "[object Date]";
}
