/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { throwError } from "..";

/**
 * Removes an item from a source array
 */
export function removeItem<Source>(array: Source[], item: Source): Source[] {
  if (!Array.isArray(array)) {
    throwError("js-utilities", "removeItem", "Please pass a valid array as a parameter");
  }

  return array.filter((eachItem) => eachItem !== item);
}
