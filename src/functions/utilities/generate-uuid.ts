/**
 * The copyright of this file belongs to Feedzai. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2025 Feedzai, Rights Reserved.
 */

import { isFunction, isNil } from "../typed";

let cryptoRef: Crypto | undefined;

try {
  cryptoRef =
    typeof globalThis !== "undefined" && globalThis.crypto ? globalThis.crypto : undefined;
} catch {
  cryptoRef = undefined;
}

const CAN_USE_CRYPTO = !isNil(cryptoRef);
const CAN_USE_CRYPTO_RANDOM_UUID = Boolean(
  CAN_USE_CRYPTO && isFunction(globalThis.crypto.randomUUID)
);
const CAN_USE_CRYPTO_GET_RANDOM_VALUES = Boolean(
  CAN_USE_CRYPTO && isFunction(globalThis.crypto.getRandomValues)
);

/**
 * Generates a UUID using the fallback implementation (RFC 4122 version 4)
 *
 * @returns {string} A unique identifier
 */
function generateFallbackUUID() {
  // Fallback implementation (RFC 4122 version 4)
  const bytes = CAN_USE_CRYPTO_GET_RANDOM_VALUES
    ? cryptoRef!.getRandomValues(new Uint8Array(16))
    : Array.from({ length: 16 }, () => Math.floor(Math.random() * 256));

  bytes[6] = (bytes[6] & 0x0f) | 0x40; // Set version to 0100
  bytes[8] = (bytes[8] & 0x3f) | 0x80; // Set variant to 10

  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0"));

  return (
    hex.slice(0, 4).join("") +
    "-" +
    hex.slice(4, 6).join("") +
    "-" +
    hex.slice(6, 8).join("") +
    "-" +
    hex.slice(8, 10).join("") +
    "-" +
    hex.slice(10, 16).join("")
  );
}

/**
 * Generates a UUID using crypto.randomUUID if available, otherwise falls back to a fallback ID
 *
 * @example
 * ```ts
 * import { generateUUID } from "@feedzai/react-utilities";
 *
 * const uuid = generateUUID(); // "123e4567-e89b-12d3-a456-426614174000"
 * ```
 *
 * @returns {string} A unique identifier
 */
export function generateUUID() {
  if (CAN_USE_CRYPTO_RANDOM_UUID) {
    try {
      return cryptoRef!.randomUUID();
    } catch {
      return generateFallbackUUID();
    }
  }

  return generateFallbackUUID();
}
