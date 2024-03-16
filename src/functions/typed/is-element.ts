/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { isNil } from ".";

/**
 * Checks if `value` is likely a DOM element.
 *
 * @example
 *
 * isElement(document.body)
 * // true
 *
 * isElement('<body>')
 * // false
 */
export function isElement(value: any): value is Element {
  if (isNil(value)) {
    return false;
  }

  const IS_INSTANCE = value instanceof Element;
  const IS_OBJECT_ELEMENT =
    typeof value === "object" && value.nodeType === 1 && typeof value.nodeName === "string";
  return IS_INSTANCE || IS_OBJECT_ELEMENT;
}
