/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useMemo } from "react";
import { isNil, isFunction, throwError } from "../functions";

export type ReactRef<Generic> = React.RefCallback<Generic> | React.MutableRefObject<Generic>;
export type SingleRef<Generic> = ReactRef<Generic> | null | undefined;
export type MergedRefCallback<Generic> = (node: Generic | null) => void;

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
    throwError("helpers", "useMergeRefs", "Cannot assign value  to ref");
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
 * The useMergeRefs hook is designed to combine multiple React refs into a single callback ref.
 *
 * This is particularly useful when you need to apply multiple refs to a single element, such as when working with
 * both internal component logic and external ref forwarding. By merging refs, you can maintain the functionality of
 * each individual ref while avoiding conflicts or overrides that might occur when attempting to assign multiple
 * refs directly.
 *
 * This hook enhances component flexibility and reusability, allowing developers to easily integrate both
 * component-specific refs and externally provided refs in a clean, efficient manner.
 *
 * @example
 * ```tsx
 * import { useMergeRefs } from '@feedzai/js-utilities/hooks';
 * ...
 * // a div with multiple refs
 * function Example({ ref, ...props }) {
 *   const internalRef = React.useRef();
 *   const refs = useMergeRefs(internalRef, ref);
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
  firstRef: SingleRef<Generic>,
  secondRef: SingleRef<Generic>
): MergedRefCallback<Generic> {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => mergeRefs(firstRef, secondRef), [firstRef, secondRef]);
}
