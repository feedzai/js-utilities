/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Formats the given string in pascal case fashion
 *
 * @example
 * pascalCase('hello world') -> 'HelloWorld'
 * pascalCase('va va boom') -> 'VaVaBoom'
 */
export function pascalCase(str: string): string {
  const parts =
    str
      ?.split(/[\.\-\s_#$%&@]/)
      .filter((x) => x)
      .map((x) => x.toLowerCase()) ?? [];
  if (parts.length === 0) return "";
  return parts.map((str) => str.charAt(0).toUpperCase() + str.slice(1)).join("");
}
