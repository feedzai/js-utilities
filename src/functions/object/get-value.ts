/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { at, isObject } from "..";

interface IGetValueObject<GenericValue = unknown> {
  [key: string]: GenericValue;
}

interface IGetValuePayload<Generic> {
  required?: boolean;
  defaultValue?: Generic;
}

/**
 * Gets the value corresponding to the path of an object.
 *
 * If the object is required to have that path and the path does not exists, there are 2 possible outcomes:
 * if a default value is provided, a warning is emitted indicating that value. If not, an error is emitted.
 *
 * If the object is not required to have that path, the default value (provided or undefined) is returned,
 * without any warning.
 *
 * @template GenericData, GenericDefaultValue, GenericReturnValue
 * @param {GenericData} object Holds the object to extract the value from.
 * @param {string} path Holds the object path where to extract the value.
 * @param {IGetValuePayload | undefined} [payload] Set of function options.
 * @returns {GenericReturnValue | undefined}
 */
export function getValue<GenericValue, GenericReturnValue>(
  object: GenericValue | IGetValueObject<GenericValue>,
  path: string,
  payload?: IGetValuePayload<GenericReturnValue> | undefined
): GenericReturnValue | undefined {
  const defaultValue = isObject(payload) ? payload?.defaultValue : undefined;
  const value = at(object as any, path) as GenericReturnValue[];
  const res = value[0];

  let required: boolean | undefined = false;

  if (isObject(payload) && Object.prototype.hasOwnProperty.call(payload, "required")) {
    required = payload.required;
  }

  if (res === undefined) {
    if (required) {
      if (defaultValue === undefined) {
        console.error(`The path ${path} does not exist on the object.`);
      } else {
        console.warn(
          `The path ${path} does not exist on the object. Using ${String(defaultValue)} instead.`
        );
        return defaultValue;
      }
    } else {
      return defaultValue; // can be undefined, no problem
    }
  }

  return res;
}
