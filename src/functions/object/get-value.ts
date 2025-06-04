/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { get, isObject, isString, isUndefined } from "..";

interface Options {
  /**
   * The default value to return if the path does not exist.
   */
  defaultValue?: unknown;
  /**
   * Whether the path is required to exist on the object.
   */
  required?: boolean;
}

/**
 * Gets the value at the specified path of an object with optional validation.
 *
 * @template GenericValue - The type of the input object
 * @template GenericResult - The type of the expected result
 *
 * @param object - The source object to query
 * @param path - The path to the property (e.g., "a.b.c" or "items[0].name")
 * @param options - Optional configuration
 * @param options.defaultValue - Value to return if path doesn't exist
 * @param options.required - If true, throws error when path doesn't exist and no defaultValue provided
 *
 * @returns The value at the specified path, or defaultValue if path doesn't exist
 * @throws {Error} When path is required but doesn't exist and no defaultValue is provided
 *
 * @example
 * const obj = { a: { b: { c: 123 } } };
 * getValue(obj, "a.b.c"); // => 123
 * getValue(obj, "a.b.d", { defaultValue: "fallback" }); // => "fallback"
 * getValue(obj, "a.b.d", { required: true }); // throws Error
 */
export function getValue<
  GenericValue,
  GenericResult = GenericValue extends object ? unknown : never
>(object: GenericValue, path: string, options?: Options & { defaultValue?: GenericResult }) {
  if (!isString(path) || path.trim() === "") {
    throw new Error("[@feedzai/js-utilities] getValue: Path must be a non-empty string");
  }

  if (!isObject(object)) {
    throw new Error("[@feedzai/js-utilities] getValue: Input must be a valid object.");
  }

  const { defaultValue, required = false } = options ?? {};
  const valueResult = get<GenericValue, GenericResult>(object, path);

  // If the value exists, return it
  if (!isUndefined(valueResult)) {
    return valueResult as GenericResult;
  }

  // If the value is not required, return the default value instead.
  // This could mean that default value can be undefined.
  if (!required) {
    return defaultValue as GenericResult;
  }

  // If the value is required, emit a warning and return the default value.
  if (!isUndefined(defaultValue)) {
    console.warn(
      `[@feedzai/js-utilities] getValue: Path ${path} does not exist on the object. Using the default value instead.`
    );
    return defaultValue as GenericResult;
  }

  throw new Error(
    `[@feedzai/js-utilities] getValue: The required path "${path}" was not found and no defaultValue was provided.`
  );
}
