/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Re-orders an array given 2 indexes:
 *
 * - The old position;
 * - and the new position.
 *
 * @example
 * ```js
 * import { arrayMove } from "@feedzai/js-utilities";
 *
 * const DATA = [
 *  "Homer",
 *  "Marge",
 *  "Lisa",
 *  "Bart",
 *  "Maggie"
 * ];
 *
 * const SORTED = arrayMove(DATA, 2, 0);
 * // ["Lisa", "Homer", "Marge", "Bart", "Maggie"];
 * ```
 */
export function arrayMove<Source>(array: Source[], fromIndex: number, toIndex: number): Source[] {
  const orderedArray = [...array];
  const startIndex = fromIndex < 0 ? orderedArray.length + fromIndex : fromIndex;

  if (startIndex >= 0 && startIndex < orderedArray.length) {
    const endIndex = toIndex < 0 ? orderedArray.length + toIndex : toIndex;

    const [item] = orderedArray.splice(fromIndex, 1);

    orderedArray.splice(endIndex, 0, item);
  }
  return orderedArray;
}
