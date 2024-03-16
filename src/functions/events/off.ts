/**
 * Removes the event listener in target's event listener list with the same type, callback,
 * and options.
 */
export function off<T extends EventTarget>(
  obj: T | null,
  ...args:
    | Parameters<T["removeEventListener"]>
    | [string, EventListenerOrEventListenerObject | CallableFunction, ...any]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...(args as Parameters<HTMLElement["removeEventListener"]>));
  }
}
