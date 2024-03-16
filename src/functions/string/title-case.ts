/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { capitalize } from ".";

/**
 * Formats the given string in title case fashion
 *
 * @example
 * titleCase('hello world') -> 'Hello World'
 * titleCase('va_va_boom') -> 'Va Va Boom'
 * titleCase('root-hook') -> 'Root Hook'
 * titleCase('queryItems') -> 'Query Items'
 */
export function titleCase(str: string | null | undefined): string {
  if (!str) {
    return "";
  }

  return str
    .split(/(?=[A-Z])|[\.\-\s_#$%&@]/)
    .map((s) => s.trim())
    .filter((s) => !!s)
    .map((s) => capitalize(s.toLowerCase()))
    .join(" ");
}
