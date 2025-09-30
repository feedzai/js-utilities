/**
 * The copyright of this file belongs to Feedzai. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 Feedzai, Rights Reserved.
 */
import { useMemo, useRef, useCallback } from "react";
import { isFunction, isNil, throwError } from "src/functions";

type ReactRef<Generic> = React.RefCallback<Generic> | React.MutableRefObject<Generic>;
type SingleRef<Generic> = ReactRef<Generic> | null | undefined;
type MergedRefCallback<Generic> = (node: Generic | null) => void;

/**
 * Assigns values to each ref
 */
export function assignRef<Generic = HTMLElement>(ref: SingleRef<Generic>, value: Generic): void {
  if (isNil(ref)) {
    return;
  }

  if (isFunction(ref)) {
    ref(value);
    return;
  }

  try {
    ref.current = value;
  } catch (error) {
    throwError("@feedzai/js-utilities", "useMergeRefs", "Cannot assign value to ref");
  }
}

/**
 * For each ref object, assigns the properties from both refs
 */
export function mergeRefs<Generic = HTMLElement>(
  firstRef: SingleRef<Generic>,
  secondRef: SingleRef<Generic>
): MergedRefCallback<Generic> {
  return (node: Generic | null): void => {
    assignRef(firstRef, node);
    assignRef(secondRef, node);
  };
}

/**
 * Merges an array of refs into a single memoized callback ref or `null`.
 * Supports both cleanup functions returned by ref callbacks and proper cleanup on unmount.
 *
 * @param refs - Array of refs to merge
 * @returns A merged ref callback or null if all refs are null/undefined
 */
export function useMergeArrayOfRefs<Generic = HTMLElement>(
  refs: Array<SingleRef<Generic> | undefined>
): null | MergedRefCallback<Generic> {
  const cleanupRef = useRef<void | (() => void)>(undefined);

  const refEffect = useCallback((instance: Generic | null) => {
    const cleanups = refs.map((ref) => {
      if (ref === null || ref === undefined) {
        return undefined;
      }

      if (typeof ref === "function") {
        const refCallback = ref;

        const refCleanup: void | (() => void) = refCallback(instance);

        return typeof refCleanup === "function"
          ? refCleanup
          : () => {
              refCallback(null);
            };
      }

      (ref as React.MutableRefObject<Generic | null>).current = instance;
      return () => {
        (ref as React.MutableRefObject<Generic | null>).current = null;
      };
    });

    return () => {
      cleanups.forEach((refCleanup) => refCleanup?.());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);

  return useMemo(() => {
    if (refs.every((ref) => isNil(ref))) {
      return null;
    }

    return (value: Generic | null) => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = undefined;
      }

      if (value !== null) {
        cleanupRef.current = refEffect(value);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}

// Overloaded function signatures for useMergeRefs
export function useMergeRefs<Generic = HTMLElement>(
  refs: Array<SingleRef<Generic> | undefined>
): null | MergedRefCallback<Generic>;
export function useMergeRefs<Generic = HTMLElement>(
  firstRef: SingleRef<Generic>,
  secondRef: SingleRef<Generic>
): MergedRefCallback<Generic>;

/**
 * Returns a function that receives the element and assigns the value to the given React refs.
 * Supports both the legacy two-parameter API and the new array API.
 *
 * @example
 * ```tsx
 * // Legacy two-parameter API (backwards compatible)
 * function Example({ ref, ...props }) {
 *   const internalRef = React.useRef();
 *   const refs = useMergeRefs(internalRef, ref);
 *
 *   return (
 *     <div {...props} ref={refs}>
 *       A div with two refs.
 *     </div>
 *   );
 * }
 *
 * // New array API (supports any number of refs)
 * function Example({ ref, ...props }) {
 *   const internalRef = React.useRef();
 *   const anotherRef = React.useRef();
 *   const refs = useMergeRefs([internalRef, ref, anotherRef]);
 *
 *   return (
 *     <div {...props} ref={refs}>
 *       A div with multiple refs.
 *     </div>
 *   );
 * }
 * ```
 */
export function useMergeRefs<Generic = HTMLElement>(
  ...args: [Array<SingleRef<Generic> | undefined>] | [SingleRef<Generic>, SingleRef<Generic>]
): null | MergedRefCallback<Generic> {
  // Normalize arguments to always use array format to avoid conditional hooks
  const refsArray = useMemo(() => {
    if (Array.isArray(args[0])) {
      return args[0];
    }
    // Legacy two-parameter API
    const [firstRef, secondRef] = args as [SingleRef<Generic>, SingleRef<Generic>];

    return [firstRef, secondRef];
  }, [args]);

  // Always use the array implementation
  return useMergeArrayOfRefs(refsArray);
}
