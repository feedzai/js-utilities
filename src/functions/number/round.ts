/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Computes `number` rounded to `precision`.
 *
 * @example
 *
 * round(4.006)
 * // => 4
 *
 * round(4.006, 2)
 * // => 4.01
 *
 * round(4060, -2)
 * // => 4100
 */
export function round(number: number, precision = 0): number {
  const modifier = 10 ** precision;
  return Math.round(number * modifier) / modifier;
}
