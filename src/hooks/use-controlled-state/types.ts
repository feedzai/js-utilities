/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { GenericAnyFunction } from "../../typings";

/**
 * Workaround for variance issues.
 */
export type BivariantCallback<T extends GenericAnyFunction> = {
  bivarianceHack(...args: Parameters<T>): ReturnType<T>;
}["bivarianceHack"];

/**
 * @template T The state type.
 */
export type SetStateAction<T> = T | BivariantCallback<(prevState: T) => T>;

/**
 * The type of the `setState` function in `[state, setState] = useState()`.
 * @template T The type of the state.
 */
export type SetState<T> = BivariantCallback<(value: SetStateAction<T>) => void>;
