/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { isNumber } from "..";
import { shortenNumber } from "./shorten-number";

/**
 * Formats the number with the max number of decimal places.
 */
export function formatNumber(number: number, maxDecimalPlaces: number): string | number {
  if (!isNumber(number)) {
    throw Error("formatNumber: A valid number must be provided in order to format it");
  }

  // If value is < 1000 we won't add decimal points even if maxDecimalPlaces is defined
  if (number < 1000) {
    if (Number.isInteger(number)) {
      return number;
    }

    return parseInt(number.toFixed(0));
  }

  const isToRoundNumber = !isNumber(maxDecimalPlaces) || maxDecimalPlaces === 0;
  const abbreviatedNumberAndSuffix = shortenNumber(number, isToRoundNumber);

  if (maxDecimalPlaces > 0) {
    const [abbreviatedNumber, suffix] = abbreviatedNumberAndSuffix;
    const abbreviatedNumberArray = abbreviatedNumber.toString().split(".");
    const numbersBeforeDecimalPoint = abbreviatedNumberArray[0];

    if (abbreviatedNumberArray.length === 1) {
      return abbreviatedNumberAndSuffix.join("");
    }

    // If the value is higher than 1000 (1K, 1M, etc) we want to add the decimal points
    // like 1700 to be 1.7K instead of 2K. But the limit is three digits so 173.1K is going to be 173K
    if (parseInt(numbersBeforeDecimalPoint) > 100) {
      return `${numbersBeforeDecimalPoint + suffix}`;
    }

    const numbersAfterDecimalPoint = abbreviatedNumberArray[1].slice(0, maxDecimalPlaces);
    const parsedAbbreviatedNumber = `${numbersBeforeDecimalPoint}.${numbersAfterDecimalPoint}`;

    return `${parsedAbbreviatedNumber + suffix}`;
  }

  return abbreviatedNumberAndSuffix.join("");
}
