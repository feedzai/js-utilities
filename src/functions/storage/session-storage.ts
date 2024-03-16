/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Adds the key to the storage, or update that key's value if it already exists.
 */
export function setSSItem(key: string, value: string): void {
  sessionStorage.setItem(key, value);
}

/**
 * When passed a key name, will return that key's value.
 */
export function getSSItem(key: string): string | null {
  return sessionStorage.getItem(key);
}

/**
 * When passed a key name, will remove that key from the storage.
 */
export function removeSSItem(key: string): void {
  sessionStorage.removeItem(key);
}
