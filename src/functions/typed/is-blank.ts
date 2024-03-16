/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { isEmpty, isNil, isString } from ".";
import { throwError } from "..";

/**
 * Checks if a string is blank or not (empty, even with white spaces)
 * Nil values are also considered empty.
 *
 * @example
 *
 * isBlank("test")
 * // false
 *
 * isBlank("")
 * // true
 *
 * isBlank(" ")
 * // true
 *
 * isBlank(undefined)
 * // true
 *
 * isBlank(null)
 * // true
 *
 * isBlank()
 * // true
 */
export function isBlank(text: string): boolean {
  if (isNil(text)) {
    return true;
  }

  if (!isString(text)) {
    throwError("js-utilities", "isBlank", "This value is not a string");
  }

  return isEmpty(text.trim());
}
