/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Checks wether the user is running the app on a browser
 * or under another type of environment. (node, for example)
 */
export const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
