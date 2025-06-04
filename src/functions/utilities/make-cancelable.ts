/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2025 Feedzai
 */

import { off, on } from "../events";

/**
 * Custom error type for aborted promises
 */
export class AbortPromiseError extends DOMException {
  constructor(message = "Promise was aborted") {
    super(message, "AbortError");
  }
}

/**
 * Helper interface for a cancelable promise that uses AbortController
 */
export interface MakeCancelablePromise<T = unknown> {
  /**
   * The wrapped promise that can be aborted
   */
  promise: Promise<T>;
  /**
   * Aborts the promise execution. Safe to call multiple times - subsequent calls will be ignored if already cancelled.
   */
  cancel: () => void;
  /**
   * Checks whether the promise has been cancelled
   * @returns {boolean} True if the promise has been cancelled, false otherwise
   */
  isCancelled: () => boolean;
}

/**
 * Wraps a Promise to make it cancelable using AbortController.
 * This is useful for cancelling long-running operations or preventing memory leaks
 * when a component unmounts before an async operation completes.
 *
 * @template T - The type of the value that the promise resolves to
 * @param promise - The promise to make cancelable
 * @returns {MakeCancelablePromise<T>} An object containing:
 *   - promise: The wrapped promise that can be aborted
 *   - cancel: Function to abort the promise
 *   - isCancelled: Function to check if the promise has been cancelled
 *
 * @example
 * ```ts
 * import { wait } from "@feedzai/js-utilities";
 *
 * // Create a Promise that resolves after 1 second
 * const somePromise = wait(1000);
 *
 * // Make it cancelable
 * const cancelable = makeCancelable(somePromise);
 *
 * // Execute the wrapped promise
 * cancelable.promise
 *   .then(console.log)
 *   .catch(error => {
 *     if (error instanceof AbortPromiseError) {
 *       console.log('Promise was cancelled');
 *     } else {
 *       console.error('Other error:', error);
 *     }
 *   });
 *
 * // Cancel it when needed
 * cancelable.cancel();
 * ```
 *
 * @example
 * ```tsx
 * import { makeCancelable } from "@feedzai/js-utilities";
 * import { useEffect } from "react";
 *
 * function MyComponent() {
 *   useEffect(() => {
 *     const cancelable = makeCancelable(fetchData());
 *
 *     cancelable.promise
 *       .then(setData)
 *       .catch(handleError);
 *
 *     // Cleanup on unmount
 *     return () => cancelable.cancel();
 *   }, []);
 *
 *   return <div>...</div>;
 * }
 * ```
 */
export function makeCancelable<T = unknown>(promise: Promise<T>): MakeCancelablePromise<T> {
  const controller = new AbortController();
  let isCancelled = false;

  const wrappedPromise = new Promise<T>((resolve, reject) => {
    // Early return if already cancelled
    if (controller.signal.aborted) {
      reject(new AbortPromiseError());
      return;
    }

    // Add abort signal listener
    const abortHandler = () => {
      isCancelled = true;
      reject(new AbortPromiseError());
    };

    on(controller.signal, "abort", abortHandler);

    // Execute the original promise
    promise
      .then((value) => {
        // Only resolve if not aborted
        if (!controller.signal.aborted) {
          resolve(value);
        }
      })
      .catch((error) => {
        // Only reject if not aborted
        if (!controller.signal.aborted) {
          reject(error);
        }
      })
      .finally(() => {
        // Clean up the abort listener
        off(controller.signal, "abort", abortHandler);
      });
  });

  return {
    promise: wrappedPromise,
    cancel() {
      if (!isCancelled) {
        controller.abort();
      }
    },
    isCancelled() {
      return isCancelled;
    },
  };
}
