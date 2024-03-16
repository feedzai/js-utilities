/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { isBoolean } from ".";

/**
 * Returns if value is a true boolean value or is a string boolean
 */
export function boolOrBoolString(value: any): value is "true" | true {
  return value === "true" ? true : isBoolean(value) ? value : false;
}
