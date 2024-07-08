/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { MutableRefObject, useRef, useLayoutEffect } from "react";

/**
 * Creates a `React.RefObject` that is constantly updated with the incoming value.
 *
 * React's useRef hook, primarily used for accessing DOM nodes or React elements, has another
 * valuable application: stabilizing references.
 *
 * By wrapping volatile references in a stable container, useRef allows developers to grant dependencies
 * immunity to change, which is particularly useful when you don't want hooks to trigger on every variable change.
 *
 * This technique is especially beneficial when working with hooks like useEffect. For instance, when dealing with
 * side effects that depend on changing variables, using useRef can prevent unnecessary re-evaluations and ensure
 * more consistent behavior. A custom hook like useLiveRef can be implemented to provide a stable reference to
 * changing values, offering finer control over when hooks are re-evaluated without compromising the integrity of
 * dependency arrays or ESLint rules.
 *
 * @example
 *
 * ```tsx
 * import { useLiveRef } from '@feedzai/js-utilities/hooks';
 * ...
 * function Component({ prop }) {
 *   const propRef = useLiveRef(prop);
 * }
 * ```
 */
export function useLiveRef<T>(value: T): MutableRefObject<T> {
  const ref = useRef(value);

  useLayoutEffect(() => {
    ref.current = value;
  });

  return ref;
}
