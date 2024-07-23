/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { RefObject, useEffect, useState } from "react";
import { isFunction } from "src/functions";

/**
 * Tracks the changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.
 *
 * Uses the Intersection Observer API and returns a IntersectionObserverEntry.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API|IntersectionObserver}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry|IntersectionObserverEntry}
 *
 * @example
 * ```tsx
 * import { useRef } from 'react';
 * import { useIntersection } from '@feedzai/js-utilities/hooks';
 *
 * const Demo = () => {
 *  const intersectionRef = React.useRef(null);
 *  const intersection = useIntersection(intersectionRef, {
 *    root: null,
 *    rootMargin: '0px',
 *    threshold: 1
 *  });
 *
 *  return (
 *    <div ref={intersectionRef}>
 *      {intersection && intersection.intersectionRatio < 1
 *        ? 'Obscured'
 *        : 'Fully in view'}
 *    </div>
 *  );
 * };
 * ```
 */
export function useIntersection<GenericElement extends HTMLElement>(
  elementRef: RefObject<GenericElement>,
  { root, rootMargin, threshold }: IntersectionObserverInit
): IntersectionObserverEntry | null {
  const [intersectionObserverEntry, setIntersectionObserverEntry] =
    useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    const CURRENT_REF = elementRef.current;

    if (CURRENT_REF && isFunction(IntersectionObserver)) {
      const handler = (entries: IntersectionObserverEntry[]) => {
        setIntersectionObserverEntry(entries[0]);
      };
      const observer = new IntersectionObserver(handler, { root, rootMargin, threshold });
      observer.observe(CURRENT_REF);

      return () => {
        setIntersectionObserverEntry(null);
        observer.disconnect();
      };
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef.current, root, rootMargin, threshold]);

  return intersectionObserverEntry;
}
