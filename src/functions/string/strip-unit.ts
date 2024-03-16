/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
export const VALUE_REGEX = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;

type StripUnitReturns = (string | number)[] | (string | undefined)[];

/**
 * Removes CSS units from a string-based value
 *
 * @param {string | number} value
 * @returns {StripUnitReturns}
 */
export function stripUnit(value: string | number): StripUnitReturns {
  if (typeof value !== "string") {
    return [value, ""];
  }
  const matchedValue = VALUE_REGEX.exec(value);

  if (matchedValue) {
    return [parseFloat(value), matchedValue[2]];
  }
  return [value, undefined];
}
