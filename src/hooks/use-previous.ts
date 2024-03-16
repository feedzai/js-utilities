/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useEffect, useRef } from "react";

/**
 * React state hook that returns the previous state as described in the React hooks FAQ.
 * {@link https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state}
 */
export function usePrevious<GenericType>(state: GenericType): GenericType | undefined {
  const ref = useRef<GenericType>();

  useEffect(() => {
    ref.current = state;
  });

  return ref.current;
}
