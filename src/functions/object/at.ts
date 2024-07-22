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
export function at(object: any, paths: string | string[]): any[] {
  const PATHS = Array.isArray(paths) ? paths : [paths];
  const FLATTENED_PATHS = flatten(PATHS, 1);
  const PATHS_LENGTH = FLATTENED_PATHS.length;
  const RESULT = new Array(PATHS_LENGTH);
  const SHOULD_SKIP = isNull(object);

  /**
   * It iterates over the flattenedPaths array.
   * For each path, it:
   *  - retrieves the corresponding value from the object using the get function.
   *  - If object is null or undefined, it assigns undefined to the result array.
   * The get function is used here to safely retrieve nested properties of the object.
   */
  for (let index = 0; index < PATHS_LENGTH; index++) {
    RESULT[index] = SHOULD_SKIP ? undefined : get(object, FLATTENED_PATHS[index]);
  }

  return RESULT;
}
