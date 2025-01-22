/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2025 Feedzai
 */

interface IFormatDateConfig {
  date: ConstructorParameters<typeof Date>[0];
  locales?: Intl.LocalesArgument;
  options?: Intl.DateTimeFormatOptions;
}

const DEFAULT_OPTIONS = {
  month: "long",
  day: "numeric",
} as const;

/**
 * Formats a date value into a localized string representation.
 *
 * @param {IFormatDateConfig} config - Configuration object for date formatting.
 * @returns {string} A localized date string. By default, returns the date in "{Month} {Day}" format (e.g., "December 25")
 *
 * @example
 * formatDate({ date: "2023-12-25" })
 * // => "December 25"
 */
export const formatDate = ({
  date: dateValue,
  locales,
  options,
}: IFormatDateConfig) => {
  const date = new Date(dateValue);

  if (!dateValue || isNaN(date.getTime())) {
    throw new Error("Invalid date value");
  }

  return date.toLocaleDateString(locales, {
    ...DEFAULT_OPTIONS,
    ...options,
  });
};
