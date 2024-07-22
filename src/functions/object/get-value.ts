/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { at, isObject, isUndefined } from "..";

type Payload = {
  defaultValue?: unknown;
  required?: boolean;
};

/**
 * Gets the value corresponding to the path of an object.
 *
 * If the object is required to have that path and the path does not exist, there are 2 possible outcomes:
 * if a default value is provided, a warning is emitted indicating that value. If not, an error is emitted.
 *
 * If the object is not required to have that path, the default value (provided or undefined) is returned,
 * without any warning.
 *
 * @example
 *
 * ```js
 * import { getValue } from '@feedzai/js-utilities';
 *
 * const OBJ = {
 *   a: {
 *    b: {
 *      c: 123,
 *    },
 *  },
 * };
 *
 * const RESULT = getValue(OBJ, "a.b.d", { defaultValue: "a-default-value", required: true });
 * // => "a-default-value"
 * ```
 */
export function getValue<T, R = unknown>(
  object: T,
  path: string,
  payload?: Payload | unknown
): R | undefined {
  const TYPED_PAYLOAD = isObject(payload) ? (payload as Payload) : undefined;
  const DEFAULT_VAL = TYPED_PAYLOAD?.defaultValue;
  const RESULT = at(object, path)[0];
  const IS_REQUIRED = TYPED_PAYLOAD?.required ?? false;

  if (!isUndefined(RESULT)) {
    return RESULT as R;
  }

  if (!IS_REQUIRED) {
    return DEFAULT_VAL as R;
  }

  if (!isUndefined(DEFAULT_VAL)) {
    console.warn(
      `[@feedzai/js-utilities] The path ${path} does not exist on the object. Using ${DEFAULT_VAL} instead.`
    );
    return DEFAULT_VAL as R;
  }

  console.error(`[@feedzai/js-utilities] The path ${path} does not exist on the object.`);

  return undefined;
}
