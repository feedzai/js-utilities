/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Checks if the given value is primitive.
 *
 * Primitive Types: number , string , boolean , symbol, bigint, undefined, null
 *
 * @param {*} value value to check
 * @returns {boolean} result
 */
export function isPrimitive(value: any): boolean {
  return (
    value === undefined ||
    value === null ||
    (typeof value !== "object" && typeof value !== "function")
  );
}
