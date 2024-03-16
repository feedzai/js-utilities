/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Capitalize the first word of the string
 *
 * @example
 *
 * capitalize('hello')
 * //-> 'Hello'
 *
 * capitalize('va va voom')
 * //-> 'Va va voom'
 */
export function capitalize(str: string): string {
  if (!str || str.trim().length === 0) return "";
  const lower = str.toLowerCase();
  return lower.substring(0, 1).toUpperCase() + lower.substring(1, lower.length);
}
