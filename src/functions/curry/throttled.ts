/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
export type ThrottledFunction<TArgs extends any[]> = {
  (...args: TArgs): void;
  /**
   * Checks if there is any invocation throttled
   */
  isThrottled(): boolean;
};

/**
 * Given an interval and a function returns a new function
 * that will only call the source function if interval milliseconds
 * have passed since the last invocation
 */
export function throttle<TArgs extends any[]>(
  { interval }: { interval: number },
  func: (...args: TArgs) => any
) {
  let ready = true;
  let timer: NodeJS.Timeout | undefined = undefined;

  const throttled: ThrottledFunction<TArgs> = (...args: TArgs) => {
    if (!ready) return;
    func(...args);
    ready = false;
    timer = setTimeout(() => {
      ready = true;
      timer = undefined;
    }, interval);
  };
  throttled.isThrottled = () => {
    return timer !== undefined;
  };
  return throttled;
}
