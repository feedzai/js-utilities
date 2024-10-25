/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { ForwardedRef, MutableRefObject, useEffect, useRef } from "react";

/**
 * A React hook that safely handles forwarded refs to ensure consistent reference management.
 *
 * This hook addresses a specific challenge when working with forwarded refs in React components:
 * When you need to access a ref both internally and externally in a component hierarchy.
 * While `React.forwardRef` allows passing refs to child components (typically to expose
 * internal HTML elements to parent components), complications arise when you need to
 * manipulate that reference within the child component's lifecycle hooks.
 *
 * The main challenge is that you cannot guarantee that a parent component will always
 * provide a ref, which can lead to undefined references. This hook ensures you always
 * have a valid reference to work with, regardless of whether the parent component
 * provides one.
 *
 * @template T - The type of value the ref holds (typically an HTMLElement or a custom instance)
 * @param {MutableRefObject<T>} forwardedRef - The forwarded ref from the parent component
 * @returns {MutableRefObject<T>} A guaranteed valid reference that can be safely used in lifecycle hooks
 *
 * @example
 * ```tsx
 * // Parent component
 * const ParentComponent = () => {
 *   const buttonRef = useRef<HTMLButtonElement>(null);
 *   return <ChildComponent ref={buttonRef} />;
 * };
 *
 * // Child component
 * const ChildComponent = forwardRef<HTMLButtonElement>((props, ref) => {
 *   const ensuredRef = useEnsuredForwardedRef(ref);
 *
 *   useEffect(() => {
 *     // Safe to use ensuredRef.current here
 *     // Even if parent didn't provide a ref
 *     if (ensuredRef.current) {
 *       ensuredRef.current.focus();
 *     }
 *   }, []);
 *
 *   return <button ref={ensuredRef}>Click me</button>;
 * });
 *```
 *
 * @see {@link https://react.dev/reference/react/forwardRef React.forwardRef documentation}
 */
export function useEnsuredForwardedRef<T>(
  forwardedRef: ForwardedRef<T>
): MutableRefObject<T | null> {
  const ensuredRef = useRef<T | null>(null);

  useEffect(() => {
    if (!forwardedRef) {
      return;
    }

    if (typeof forwardedRef === "function") {
      // Handle function refs
      forwardedRef(ensuredRef.current);
    } else {
      // Handle object refs
      forwardedRef.current = ensuredRef.current;
    }
  }, [forwardedRef]);

  return ensuredRef;
}
