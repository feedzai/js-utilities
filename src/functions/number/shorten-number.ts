/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { isNumber } from "..";

function round(number: number, power: string, isToRoundNumber = true) {
  const finalNumber = ((number / Number(power)) * 10) / 10;

  if (isToRoundNumber) {
    return Math.round(finalNumber);
  }

  return finalNumber;
}

/**
 * Shortens a given number to its shortest form so it can occupy little space as possible.
 *
 * @example
 * shortenNumber(10000) // [10,"K"]
 * shortenNumber(10250) // [10.2, "K"]
 * shortenNumber(1000000) // [1, "M"]
 * shortenNumber(1300000) // [1.3, "M"]
 *
 * @param {number} number
 * @param {boolean} isToRoundNumber
 * @returns {array} [shortenNumber, suffix]
 */
export function shortenNumber(number: number, isToRoundNumber = true): (string | number)[] {
  if (!isNumber(number)) {
    throw Error("shortenNumber: A valid number must be provided in order to shorten it");
  }

  const absNum = Math.abs(number);

  if (absNum >= 1.0e9) {
    return [round(absNum, "1.0e9", isToRoundNumber), "B"];
  }

  if (absNum >= 1.0e6) {
    return [round(absNum, "1.0e6", isToRoundNumber), "M"];
  }

  if (absNum >= 1.0e3) {
    return [round(absNum, "1.0e3", isToRoundNumber), "K"];
  }

  return [absNum];
}
