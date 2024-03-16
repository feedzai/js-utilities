/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { MutableRefObject, useRef, useLayoutEffect } from "react";

/**
 * Creates a `React.RefObject` that is constantly updated with the incoming
 * value.
 * @example
 * function Component({ prop }) {
 *   const propRef = useLiveRef(prop);
 * }
 */
export function useLiveRef<T>(value: T): MutableRefObject<T> {
  const ref = useRef(value);

  useLayoutEffect(() => {
    ref.current = value;
  });

  return ref;
}
