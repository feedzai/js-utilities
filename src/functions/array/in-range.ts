/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Checks if `n` is between `start` and up to, but not including, `end`.
 *
 * If `end` is not specified, it’s set to start with `start` then set to 0. If `start` is greater than `end` the params are swapped to support negative ranges.
 *
 * @example
 *
 * inRange(3, 2, 4)
 * // => true
 *
 * inRange(4, 8)
 * // => true
 *
 * inRange(4, 2)
 * // => false
 *
 * inRange(2, 2)
 * // => false
 *
 * inRange(1.2, 2)
 * // => true
 *
 * inRange(5.2, 4)
 * // => false
 *
 * inRange(-3, -2, -6)
 * // => true
 */
export function inRange(num: number, rangeStart: number, rangeEnd = 0): boolean {
  return (rangeStart < num && num < rangeEnd) || (rangeEnd < num && num < rangeStart);
}
