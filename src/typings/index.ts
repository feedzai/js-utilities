/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GenericAnyFunction = (...args: any) => any;

// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const tuple = <T extends string[]>(...args: T) => args;

export type GlobalPartial<T> = Partial<T>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
export type PartialObject<T> = GlobalPartial<T>;
export type Many<T> = T | ReadonlyArray<T>;
export type PropertyName = string | number | symbol;
export type PropertyPath = Many<PropertyName>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ObjTypeWithAny = Record<string, any>;
export type StringPropertyPath = Many<string>;
export interface Dictionary<T> {
  [index: string]: T;
}
export interface NumericDictionary<T> {
  [index: number]: T;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PromiseValues<T extends Promise<any>[]> = {
  [K in keyof T]: T[K] extends Promise<infer U> ? U : never;
};
