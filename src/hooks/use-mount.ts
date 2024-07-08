/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useEffectOnce } from "./use-effect-once";

/**
 * React lifecycle hook that calls a function after the component is mounted.
 *
 * @example
 * ```
 * import { useMount } from "@feedzai/js-utilities/hooks";
 * ...
 * useMount(() => {
 *  console.log("the component has mounted");
 * });
 * ```
 */
export function useMount(callback: () => void) {
  useEffectOnce(() => {
    callback();
  });
}
