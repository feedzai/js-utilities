/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Helper method that wraps a normal Promise and allows it to be cancelled.
 */
export interface MakeCancelablePromise<GenericReturnValue = unknown> {
  /**
   * Holds the promise itself
   */
  promise: Promise<GenericReturnValue>;

  /**
   * Rejects the promise by cancelling it
   */
  cancel: () => void;
}

/**
 * Helper method that wraps a normal Promise and allows it to be cancelled.
 *
 * @example
 *
 * ```js
 * import { wait } from "@joaomtmdias/js-utilities";
 *
 * // A Promise that resolves after 1 second
 * const somePromise = wait(1000);
 *
 * // Can also be made cancellable by wrapping it
 * const cancelable = makeCancelable(somePromise);
 *
 * // So that when we execute said wrapped promise...
 * cancelable.promise
 *  .then(console.log)
 *  .catch(({ isCanceled }) => console.error('isCanceled', isCanceled));
 *
 * // We can cancel it on demand
 * cancelable.cancel();
 * ```
 */
export function makeCancelable<GenericPromiseValue = unknown>(
  promise: Promise<GenericPromiseValue>
): MakeCancelablePromise<GenericPromiseValue> {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise<GenericPromiseValue>((resolve, reject) => {
    promise
      .then((val) => {
        return hasCanceled_ ? reject({ isCanceled: true }) : resolve(val);
      })
      .catch((error) => {
        return hasCanceled_ ? reject({ isCanceled: true }) : reject(error);
      });
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    },
  };
}
