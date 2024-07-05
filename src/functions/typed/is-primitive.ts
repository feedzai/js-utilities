/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Checks if the given value is primitive.
 *
 * Primitive Types: number, string, boolean, symbol, bigint, undefined, null
 *
 * @param value - The value to check
 * @returns True if the value is primitive, false otherwise
 *
 * @example
 * isPrimitive(42)        // true
 * isPrimitive('string')  // true
 * isPrimitive(true)      // true
 * isPrimitive(Symbol())  // true
 * isPrimitive(BigInt(1)) // true
 * isPrimitive(undefined) // true
 * isPrimitive(null)      // true
 * isPrimitive({})        // false
 * isPrimitive([])        // false
 * isPrimitive(() => {})  // false
 */
export function isPrimitive(value: unknown): boolean {
  return value === null || (typeof value !== "object" && typeof value !== "function");
}
