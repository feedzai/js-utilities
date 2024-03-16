/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { isFunction } from ".";

/**
 * Determine if a value is a Promise
 *
 * Pass in a value and get a boolean telling you if the value is a Promise.
 * This function is not “bullet proof” because determining if a value is a Promise in javascript is not “bullet proof”.
 * The standard/recommended method is to use Promise.resolve to essentially cast any value, promise or not, into an awaited value.
 * However, this may do in a pinch.
 *
 * @example
 *
 * isPromise('hello')
 * // false
 *
 * isPromise(['hello'])
 * // false
 *
 * isPromise(new Promise(res => res()))
 * // true
 */
export function isPromise(value: any): value is Promise<any> {
  if (!value || !value.then || !isFunction(value.then)) {
    return false;
  }

  return true;
}
