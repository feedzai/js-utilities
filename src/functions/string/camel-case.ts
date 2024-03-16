/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { capitalize } from ".";
import { isNil } from "../typed";

/**
 * Formats the given string in camel case fashion
 *
 * @example
 *
 * camelCase('hello world')   -> 'helloWorld'
 * camelCase('va va-VOOM') -> 'vaVaVoom'
 * camelCase('helloWorld') -> 'helloWorld'
 */
export function camelCase(str: string): string {
  if (isNil(str)) {
    return "";
  }

  const parts =
    str
      ?.replace(/([A-Z])+/g, capitalize)
      ?.split(/(?=[A-Z])|[\.\-\s_#$%&@]/) // Include # in the split characters
      .filter((x) => x)
      .map((x) => x.toLowerCase()) ?? [];
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0];
  return parts.reduce((acc, part) => {
    return `${acc}${part.charAt(0).toUpperCase()}${part.slice(1)}`;
  });
}
