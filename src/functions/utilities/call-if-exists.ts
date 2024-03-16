/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Executes the given callback function, if present.
 *
 * @example
 *
 * // Calling a function with several arguments
 * callIfExists(functionName, arg1, arg2);
 *
 * // Calling a function without any argument
 * callIfExists(functionName);
 *
 * @param {Function|undefined} callback Holds the callback to be executed.
 * @param {any[]} args Holds a list of arguments to be passed to the callback.
 * @returns {void}
 */
export function callIfExists<GenericFunctionType>(
  callback: GenericFunctionType,
  ...args: any[]
): void {
  if (typeof callback === "function") {
    // eslint-disable-next-line prefer-spread
    callback.apply(undefined, args);
  }
}
