/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { random } from ".";
import { isArray, isNil } from "../typed";

/**
 * Draw a random item from a list. Returns null if the list is empty.
 *
 * This helper can also be useful for using inside tests where - given a list of possible outcomes - one is randomly selected.
 *
 * @example
 *
 * const characters = [
 * 	"Homer Simpson",
 * 	"Marge Simpson",
 * 	"Bart Simpson",
 * 	"Lisa Simpson",
 * 	"Maggie Simpson",
 * ];
 *
 * draw(characters)
 * // => a random Simpsons Character e.g "Bart Simpson"
 */
export function draw<T>(array: readonly T[]): T | null {
  const UPPER_VALUE = !isNil(array) && isArray(array) ? array.length : 0;

  if (UPPER_VALUE === 0) {
    return null;
  }

  const index = random(0, UPPER_VALUE - 1);

  return array[index];
}
