/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

import { isFunction } from "../typed";

/**
 * Safely executes a callback function if it exists.
 *
 * @template T - The type of the callback function
 *
 * @param callback - The function to be executed if it exists
 * @param args - Arguments to be passed to the callback
 *
 * @returns The result of the callback function, or undefined if callback is not a function
 *
 * @example
 * // Basic usage
 * callIfExists((a: number, b: string) => console.log(a, b), 1, "test");
 *
 * // No arguments
 * callIfExists(() => console.log("Hello"));
 *
 * // Non-function callback
 * callIfExists(undefined); // => undefined
 * callIfExists(null); // => undefined
 */
export function callIfExists<T extends (...args: unknown[]) => ReturnType<T>>(
  callback: T | undefined | null,
  ...args: Parameters<T>
): ReturnType<T> | undefined {
  if (isFunction(callback)) {
    return callback(...args);
  }
}
