/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useCallback, useEffect, useRef } from "react";

/**
 * Lifecycle hook providing ability to check component's mount state.
 * Returns a function that will return true if component mounted and false otherwise.
 *
 * @example
 * ```
 * import { useMountedState } from "@feedzai/js-utilities/hooks";
 * ...
 * const isMounted = useMountedState();
 *
 * useEffect(() => {
 *  if (isMounted()) {
 *   console.log("run something because the component is mounted");
 *  }
 * });
 * ```
 */
export function useMountedState(): () => boolean {
  const mountedRef = useRef<boolean>(false);
  const getState = useCallback(() => mountedRef.current, []);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return getState;
}
