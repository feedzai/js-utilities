/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useCallback, useEffect, useRef } from "react";
import { throwError } from "../../functions";
import { getBrowserCompatibility } from "./helpers";
import { PageVisibilityCallback } from "./types";

/**
 * Custom hook that detects when the user's page visibility changes.
 * The Page Visibility API provides events you can watch for to know when a document becomes
 * visible or hidden, as well as features to look at the current visibility state of the page.
 *
 * This is especially useful for saving resources and improving performance by letting
 * a page avoid performing unnecessary tasks when the document isn't visible.
 *
 * This can happen when, for example:
 * a) A site has an image carousel that shouldn't advance to the next slide unless the user is viewing the page.
 * b) An application showing a dashboard of information doesn't want to poll the server for updates when the page isn't visible.
 * c) A page wants to detect when it is being prerendered so it can keep accurate count of page views
 * d) A site wants to switch off sounds when a device is in standby mode (user pushes power button to turn screen off)
 *
 * @example
 * ```tsx
 * import { usePageVisibility } from '@feedzai/js-utilities/hooks';
 * ...
 *  // When the user changes tabs, save the written note draft
 *  usePageVisibility((isVisible) => {
 *    if (!isVisible) {
 *      saveNoteDraft();
 *    }
 *  });
 *
 *  // Wait two seconds before saving the written note draft
 *  usePageVisibility((isVisible) => {
 *    if (!isVisible) {
 *      saveNoteDraft();
 *    }
 *  }, 2000);
 * ```
 */
export function usePageVisibility(handlerCallback: PageVisibilityCallback, delay?: number): void {
  const { current: BROWSER_COMPATIBILITY } = useRef(getBrowserCompatibility());
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  /**
   * Checks up on the passed props and throws errors if they do not match
   * the expected type and shape.
   */
  const checkOnProps = useCallback(() => {
    if (handlerCallback && typeof handlerCallback !== "function") {
      throwError(
        "helpers",
        "usePageVisibility",
        "Please use a callback function as the first parameter"
      );
    }

    if (delay && (typeof delay !== "number" || delay < 0)) {
      throwError("helpers", "usePageVisibility", "Delay must be a positive number");
    }
  }, [delay, handlerCallback]);

  /**
   * Returns the next `isVisible` status.
   * It is the contrary to the `document.hidden` value.
   *
   * So if the document is hidden, then the next `isVisible` status is `false`.
   */
  const getNextVisibilityStatus = useCallback((): boolean => {
    const HIDDEN_PROPERTY = BROWSER_COMPATIBILITY.hidden as "hidden";
    const NEXT_VISIBILITY_STATUS = !document[HIDDEN_PROPERTY];
    return NEXT_VISIBILITY_STATUS;
  }, [BROWSER_COMPATIBILITY.hidden]);

  /**
   * When the `visibilitychange` event detects a change in the page visibility,
   * this function is executed.
   *
   * If there is a delay, waits x amount of time before executing the `handlerCallback`.
   */
  const onVisibilityChange = useCallback(() => {
    if (delay) {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }

      timeoutId.current = setTimeout(() => {
        const NEXT_VISIBILITY_STATUS = getNextVisibilityStatus();

        handlerCallback(NEXT_VISIBILITY_STATUS);
      }, delay);
    } else {
      const NEXT_VISIBILITY_STATUS = getNextVisibilityStatus();

      handlerCallback(NEXT_VISIBILITY_STATUS);
    }
  }, [delay, getNextVisibilityStatus, handlerCallback]);

  useEffect(() => {
    checkOnProps();

    document.addEventListener(BROWSER_COMPATIBILITY.visibilityChange, onVisibilityChange);

    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }

      document.removeEventListener(BROWSER_COMPATIBILITY.visibilityChange, onVisibilityChange);
    };
  }, [BROWSER_COMPATIBILITY.visibilityChange, checkOnProps, onVisibilityChange]);
}
