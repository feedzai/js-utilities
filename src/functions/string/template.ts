/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { isNil } from "../typed";

/**
 * template is used to replace data by name in template strings.
 * The default expression looks for {{name}} to identify names.
 *
 * @example
 * Ex. template('Hello, {{name}}', { name: 'ray' })
 * Ex. template('Hello, <name>', { name: 'ray' }, /<(.+?)>/g)
 */
export function template(str: string, data: Record<string, any>, regex = /\{\{(.+?)\}\}/g) {
  if (isNil(str)) {
    return "";
  }

  return Array.from(str.matchAll(regex)).reduce((acc, match) => {
    return acc.replace(match[0], data[match[1]]);
  }, str);
}
