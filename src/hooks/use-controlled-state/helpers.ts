/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { GenericAnyFunction } from "../../typings";
import { BivariantCallback, SetStateAction } from "./types";

/**
 * Symbol used to mark functions that are responsible for setting the next state.
 * This helps distinguish between regular functions and state setters.
 *
 * @internal
 */
const SET_NEXT_STATE = Symbol("setNextState");

/**
 * Checks if a function is marked as a state setter function.
 *
 * @param arg - Function to check
 * @returns True if the function is marked as a state setter
 *
 * @example
 * const fn = () => {};
 * defineSetNextState(fn);
 * console.log(isSetNextState(fn)); // true
 *
 * @internal
 */
export function isSetNextState(arg: GenericAnyFunction & { [SET_NEXT_STATE]?: true }): boolean {
  return arg[SET_NEXT_STATE] === true;
}

/**
 * Marks a function as a state setter by adding a Symbol property.
 * If the function is already marked, this operation is a no-op.
 *
 * @param arg - Function to mark as a state setter
 *
 * @example
 * const fn = () => {};
 * defineSetNextState(fn);
 *
 * @internal
 */
export function defineSetNextState(arg: GenericAnyFunction & { [SET_NEXT_STATE]?: true }): void {
  if (!isSetNextState(arg)) {
    Object.defineProperty(arg, SET_NEXT_STATE, { value: true });
  }
}

/**
 * Type guard to check if an argument is a state updater function.
 *
 * @template T - The type of state value
 * @param argument - Value to check
 * @returns True if the argument is a function that updates state
 *
 * @internal
 */
function isUpdater<T>(
  argument: SetStateAction<T>
): argument is BivariantCallback<(prevState: T) => T> {
  return typeof argument === "function";
}

/**
 * Type guard to check if a value is a lazy initializer function.
 *
 * @template T - The type of the value being lazily initialized
 * @param value - Value to check
 * @returns True if the value is a function that lazily returns a value
 *
 * @internal
 */
function isLazyValue<T>(value: unknown): value is () => T {
  return typeof value === "function";
}

/**
 * Resolves a state update action by either applying an updater function
 * to the current value or returning the new value directly.
 *
 * This function handles both direct value updates and functional updates,
 * similar to React's setState behavior. It also supports lazy initialization
 * of the current value.
 *
 * @template T - The type of the state value
 * @param argument - The state update action (new value or updater function)
 * @param currentValue - The current state value or lazy initializer
 * @returns The new state value
 *
 * @example
 * // Direct value update
 * applyState(5, 1) // returns 5
 *
 * // Functional update
 * applyState(prev => prev + 1, 1) // returns 2
 *
 * // With lazy initialization
 * applyState(prev => prev + 1, () => 1) // returns 2
 */
export function applyState<T>(argument: SetStateAction<T>, currentValue: T | (() => T)): T {
  if (isUpdater(argument)) {
    const value = isLazyValue(currentValue) ? currentValue() : currentValue;
    return argument(value);
  }
  return argument;
}
