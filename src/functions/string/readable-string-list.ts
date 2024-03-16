/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Intl {
  type ListType = "conjunction" | "disjunction";

  interface ListFormatOptions {
    localeMatcher?: "lookup" | "best fit";
    type?: ListType;
    style?: "long" | "short" | "narrow";
  }

  interface ListFormatPart {
    type: "element" | "literal";
    value: string;
  }

  class ListFormat {
    constructor(locales?: string | string[], options?: ListFormatOptions);
    format(values: any[]): string;
    formatToParts(values: any[]): ListFormatPart[];
    supportedLocalesOf(locales: string | string[], options?: ListFormatOptions): string[];
  }
}

/**
 * Enables language-sensitive list formatting.
 *
 * @example
 *
 * const Simpsons = ["Homer", "Marge", "Lisa", "Bart", "Maggie"];
 *
 * readableStringList(Simpsons, "en", "and"); // 'Homer, Marge, Lisa, Bart and Maggie'
 * readableStringList(Simpsons, "pt", "and"); // 'Homer, Marge, Lisa, Bart e Maggie'
 * readableStringList(Simpsons, "fr", "and"); // 'Homer, Marge, Lisa, Bart et Maggie'
 * readableStringList(Simpsons, "de", "and"); // 'Homer, Marge, Lisa, Bart und Maggie'
 *
 * readableStringList(Simpsons, "en", "or"); // 'Homer, Marge, Lisa, Bart or Maggie'
 * readableStringList(Simpsons, "pt", "or"); // 'Homer, Marge, Lisa, Bart ou Maggie'
 * readableStringList(Simpsons, "fr", "or"); // 'Homer, Marge, Lisa, Bart our Maggie'
 * readableStringList(Simpsons, "de", "or"); // 'Homer, Marge, Lisa, Bart oder Maggie'
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat Intl.ListFormat
 *
 * @param {string[]} source
 * @param {string} [locale="en"]
 * @param {("and" | "or")} [type="and"]
 * @returns {string}
 */
export function readableStringList(source: string[], locale = "en", type: "and" | "or" = "and") {
  return new Intl.ListFormat(locale, {
    type: type === "and" ? "conjunction" : "disjunction",
  }).format(source);
}
