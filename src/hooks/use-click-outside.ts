/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { isNil } from "../functions";
import React, { useEffect } from "react";

/**
 * A Custom Hook that detects when a click occurs outside a given HTMLElement (passed as React RefObject).
 *
 * It will take into consideration the third parameter that acts as an in-the-middle interceptor to execute
 * the callback function.
 *
 * @example
 * ```tsx
 * import { useClickOutside } from '@feedzai/js-utilities/hooks';
 * ...
 * useClickOutside(
 *  DROPDROWN_REF,
 *  () => closeDropdown(),
 *  shouldClose,
 * );
 * ```
 */
export function useClickOutside<GenericElement extends Element = HTMLElement>(
  ref: React.Ref<GenericElement>,
  handler: <GenericEvent extends Event>(event?: GenericEvent) => void,
  isActive = true
): void {
  useEffect(
    () => {
      const listener = <GenericEvent extends Event>(event: GenericEvent) => {
        // @ts-expect-error Do nothing if clicking ref's element or descendent elements
        if (isNil(ref) || isNil(ref["current"]) || ref["current"].contains(event.target)) {
          return;
        }
        handler<GenericEvent>(event);
      };

      if (isActive) {
        document.addEventListener("mousedown", (event) => listener<MouseEvent>(event));
        document.addEventListener("touchstart", (event) => listener<TouchEvent>(event));
      }
      return () => {
        if (isActive) {
          document.removeEventListener("mousedown", (event) => listener<MouseEvent>(event));
          document.removeEventListener("touchstart", (event) => listener<TouchEvent>(event));
        }
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler, isActive]
  );
}
