/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { isNil } from "../typed";

/**
 * Convert a value to an int if possible.
 *
 * @example
 *
 * import { toInt } from '@feedzai/js-utilities';
 *
 * toInt(0)
 * // => 0
 *
 * toInt(null)
 * // => 0
 *
 * toInt(null, 3)
 * // => 3
 */
export function toInt<T extends number | null = number>(value: any, defaultValue?: T): number | T {
  const def = defaultValue === undefined ? 0 : defaultValue;
  if (isNil(value)) {
    return def;
  }
  const result = parseInt(value);
  return isNaN(result) ? def : result;
}
