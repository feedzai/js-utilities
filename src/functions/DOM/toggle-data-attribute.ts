/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Adds a data attribute to a DOM element, without its state bein rendered as a value
 *
 * @example
 *
 * <Button data-attribute={toggleDataAttribute(someprop)}>Content</Button>
 *
 * would render:
 *
 * <button data-attribute>Content</button>
 *
 * @param {boolean | null | undefined} prop
 * @returns {string | undefined}
 */
export function toggleDataAttribute(prop?: "true" | "false" | boolean | null): string | undefined {
  const isTrue = prop && (prop === true || prop === "true");

  return isTrue ? "" : undefined;
}
