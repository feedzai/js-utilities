/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
const reHasRegExpChar = RegExp(reRegExpChar.source);

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @example
 *
 * escapeRegExp('[github](https://github.com/)')
 * // => '\[github\]\(https://github\.com/\)'
 */
export function escapeRegExp(string = "") {
  return string && reHasRegExpChar.test(string)
    ? string.replace(reRegExpChar, "\\$&")
    : string || "";
}
