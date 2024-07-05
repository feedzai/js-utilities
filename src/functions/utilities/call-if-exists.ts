/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Executes the given callback function, if it exists.
 *
 * @param callback - The function to be executed if it exists
 * @param args - Arguments to be passed to the callback
 *
 * @example
 * // Calling a function with several arguments
 * callIfExists((a: number, b: string) => console.log(a, b), 1, "test");
 *
 * // Calling a function without any argument
 * callIfExists(() => console.log("Hello"));
 *
 * // Nothing happens if the callback is not a function
 * callIfExists(undefined);
 * callIfExists(null);
 * callIfExists("not a function");
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function callIfExists<T extends (...args: any[]) => any>(
  callback: T | undefined | null,
  ...args: Parameters<T>
): void {
  if (typeof callback === "function") {
    callback(...args);
  }
}
