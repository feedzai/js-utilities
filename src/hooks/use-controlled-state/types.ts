/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { GenericAnyFunction } from "../../typings";

/**
 * A utility type that handles bivariant function types to resolve TypeScript's strict function
 * type checking limitations. This is particularly useful when dealing with callback functions
 * that need to work with both more specific and more general types.
 *
 * Bivariance allows both narrowing and widening of parameter types, which is necessary
 * for certain callback patterns in React.
 *
 * @template T - A function type extending GenericAnyFunction
 *
 * @example
 * type Callback = BivariantCallback<(value: string) => void>;
 * // Can be assigned to functions that take more specific or more general types
 */
export type BivariantCallback<T extends GenericAnyFunction> = {
  bivarianceHack(...args: Parameters<T>): ReturnType<T>;
}["bivarianceHack"];

/**
 * Represents a state update action that can be either a direct value or a function
 * that computes a new value based on the previous state. This pattern matches React's
 * useState behavior.
 *
 * @template T - The type of the state value
 *
 * @example
 * // Direct value update
 * const action1: SetStateAction<number> = 42;
 *
 * // Functional update
 * const action2: SetStateAction<number> = (prev) => prev + 1;
 */
export type SetStateAction<T> = T | BivariantCallback<(prevState: T) => T>;

/**
 * Represents a state setter function that matches React's useState setter pattern.
 * This type ensures type safety when updating state while maintaining compatibility
 * with React's state update patterns.
 *
 * @template T - The type of the state value
 *
 * @example
 * const setState: SetState<number> = (valueOrUpdater) => {
 *   // Implementation details
 * };
 *
 * // Can be used with direct values
 * setState(42);
 *
 * // Or with updater functions
 * setState(prev => prev + 1);
 */
export type SetState<T> = BivariantCallback<(value: SetStateAction<T>) => void>;
