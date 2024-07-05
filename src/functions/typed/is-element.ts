/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

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
export function isElement(value: unknown): value is Element {
  if (value == null) {
    return false;
  }

  const IS_INSTANCE = typeof Element !== "undefined" && value instanceof Element;
  const IS_OBJECT_ELEMENT =
    typeof value === "object" &&
    "nodeType" in value &&
    (value as any).nodeType === 1 &&
    typeof (value as any).nodeName === "string";

  return IS_INSTANCE || IS_OBJECT_ELEMENT;
}
