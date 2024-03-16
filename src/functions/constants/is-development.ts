/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
const NODE_ENV = process.env.NODE_ENV;

/**
 * True if `NODE_ENV` is not `production`
 */
export const __DEV__: boolean = !NODE_ENV ? false : NODE_ENV !== "production";
