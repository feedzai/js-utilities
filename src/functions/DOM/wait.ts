/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Returns a promise that resolves after how many milliseconds you pass it.
 *
 * Great for waiting any amount of time. If you do not pass it any value, it will immediately resolve. This is handy when you need to ensure the following code is put at the end of the JS event callstack.
 *
 * @example
 * async function doStuff() {
 *   doSomething();
 *   await wait();
 *   doSomethingElse();
 *   await wait(200);
 *   console.log('200ms later');
 * }
 */
function wait(amount = 0): Promise<NodeJS.Timeout> {
  return new Promise((resolve) => setTimeout(resolve, amount));
}

export { wait, wait as sleep };
