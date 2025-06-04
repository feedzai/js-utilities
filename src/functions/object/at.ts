/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { get } from "./get";
import { flatten } from "../array";
import { isNull } from "../typed";

/**
 * Creates an array of values corresponding to paths of object.
 *
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 *
 * at(object, ['a[0].b.c', 'a[1]']);
 * // [3, 4]
 */
export function at<GenericValue>(
  object: GenericValue | null | undefined,
  paths: string | string[]
): Array<GenericValue[keyof GenericValue]> {
  const normalizedPaths = Array.isArray(paths) ? paths : [paths];
  const flattenedPaths = flatten(normalizedPaths, 1);
  const pathsLength = flattenedPaths.length;
  const result = new Array(pathsLength);
  const shouldSkip = isNull(object);

  /**
   * It iterates over the flattenedPaths array.
   * For each path, it:
   *  - retrieves the corresponding value from the object using the get function.
   *  - If object is null or undefined, it assigns undefined to the result array.
   * The get function is used here to safely retrieve nested properties of the object.
   */
  for (let index = 0; index < pathsLength; index++) {
    result[index] = shouldSkip ? undefined : get(object, flattenedPaths[index]);
  }

  return result;
}
