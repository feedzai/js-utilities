/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Determines if a value is a Promise-like object.
 *
 * This function checks if the value is an object with a `then` method.
 * Note that this is not foolproof, as it can't distinguish between actual
 * Promises and "thenable" objects.
 *
 * @param value - The value to check
 * @returns True if the value is Promise-like, false otherwise
 *
 * @example
 * isPromise(Promise.resolve())          // true
 * isPromise(new Promise(res => res())) // true
 * isPromise({ then: () => {} })        // true
 * isPromise('hello')                   // false
 * isPromise(['hello'])                 // false
 * isPromise(null)                      // false
 * isPromise(undefined)                 // false
 *
 * @note For robust handling of potential Promises, consider using
 * `Promise.resolve()` to coerce values into Promises.
 */
export function isPromise(value: unknown): value is Promise<unknown> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return !!value && typeof value === "object" && typeof (value as any).then === "function";
}
