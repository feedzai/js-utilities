/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

// Regex explained: https://regexr.com/5c55v
const kcRegex = /([0-9]+|([A-Z][a-z]+)|[a-z]+|([A-Z]+)(?![a-z]))/g;

/**
 * Converts string to kebab case.
 *
 * @example
 *
 * kebabCase('Foo Bar')
 * // => 'foo-bar'
 *
 * kebabCase('fooBar')
 * // => 'foo-bar'
 *
 * kebabCase('__FOO_BAR__')
 * // => 'foo-bar'
 *
 * kebabCase(null)
 * // => ''
 *
 * kebabCase('UPPERCASE')
 * // => 'uppercase'
 *
 * kebabCase(false)
 * // => 'false'
 *
 * kebabCase(undefined)
 * // => ''
 *
 * kebabCase(0)
 * // => '0'
 *
 * kebabCase('camelCase')
 * // => 'camel-case'
 *
 * kebabCase('?')
 * // => ''
 *
 * kebabCase('Custom*XML*Parser')
 * // => 'custom-xml-parser'
 *
 * kebabCase('APIFinder')
 * // => 'api-finder'
 *
 * kebabCase('UserAPI20Endpoint')
 * // => 'user-api-20-endpoint'
 *
 * kebabCase('30fghIJ')
 * // => '30-fgh-ij'
 */
export function kebabCase(str: string): string {
  const MatchingValue = String(str ?? "").match(kcRegex) || [];

  return MatchingValue.map((char) => char.toLowerCase()).join("-");
}
