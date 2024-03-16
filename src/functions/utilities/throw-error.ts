/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Helper function to throw errors with the following string template <fileName>.<functionName>:<errorMsg>.
 *
 * @param {string} fileName Holds the file name.
 * @param {string} functionName Holds the function name.
 * @param {string} errMsg Holds the error message.
 * @returns {void}
 */
export function throwError(fileName: string, functionName: string, errMsg: string): void {
  const errorMessage = `${fileName}.${functionName}: ${errMsg}`;

  throw new Error(errorMessage);
}
