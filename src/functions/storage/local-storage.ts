/* istanbul ignore file */

/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Adds the key to the storage, or update that key's value if it already exists.
 */
export function setLSItem(key: string, value: string): void {
  localStorage.setItem(key, value);
}

/**
 * When passed a key name, will return that key's value.
 */
export function getLSItem(key: string): string | null {
  return localStorage.getItem(key);
}

/**
 * When passed a key name, will remove that key from the storage.
 */
export function removeLSItem(key: string): void {
  localStorage.removeItem(key);
}
