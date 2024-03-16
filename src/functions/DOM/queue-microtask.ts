/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Queues a function to be called at the end of the current event loop.
 *
 * The queueMicrotask() method, which is exposed on the Window or Worker interface,
 * queues a microtask to be executed at a safe time prior to control returning to
 * the browser's event loop.
 *
 * The microtask is a short function which will run after the current task has completed
 * its work and when there is no other code waiting to be run before control of
 * the execution context is returned to the browser's event loop.
 *
 * This lets your code run without interfering with any other, potentially higher priority,
 * code that is pending, but before the browser regains control over the execution context,
 * potentially depending on work you need to complete.
 *
 * @example
 *
 * queueMicrotask(() => {
 *  element?.focus();
 * });
 */
export function queueMicrotask(callback: VoidFunction): void {
  if (window.queueMicrotask) {
    return window.queueMicrotask(callback);
  }

  void Promise.resolve().then(callback);
}
