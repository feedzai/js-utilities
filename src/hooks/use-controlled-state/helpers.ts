/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { GenericAnyFunction } from "../../typings";
import { BivariantCallback, SetStateAction } from "./types";

const SET_NEXT_STATE = Symbol("setNextState");

export function isSetNextState(arg: GenericAnyFunction & { [SET_NEXT_STATE]?: true }): boolean {
  return arg[SET_NEXT_STATE] === true;
}

export function defineSetNextState(arg: GenericAnyFunction & { [SET_NEXT_STATE]?: true }): void {
  if (!isSetNextState(arg)) {
    Object.defineProperty(arg, SET_NEXT_STATE, { value: true });
  }
}

function isUpdater<T>(
  argument: SetStateAction<T>
): argument is BivariantCallback<(prevState: T) => T> {
  return typeof argument === "function";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isLazyValue<T>(value: any): value is () => T {
  return typeof value === "function";
}

/**
 * Receives a `setState` argument and calls it with `currentValue` if it's a
 * function. Otherwise return the argument as the new value.
 *
 * @example
 * applyState((value) => value + 1, 1); // 2
 * applyState(2, 1); // 2
 */
export function applyState<T>(argument: SetStateAction<T>, currentValue: T | (() => T)): T {
  if (isUpdater(argument)) {
    const value = isLazyValue(currentValue) ? currentValue() : currentValue;

    return argument(value);
  }
  return argument;
}
