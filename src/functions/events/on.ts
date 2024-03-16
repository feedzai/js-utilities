/**
 * Appends an event listener for events whose type attribute value is type.
 * The callback argument sets the callback that will be invoked when the event is dispatched.
 *
 * The options argument sets listener-specific options.
 * For compatibility this can be a boolean, in which case the method behaves exactly as if the value
 * was specified as options's capture.
 *
 * When set to true, options's capture prevents callback from being invoked when the event's
 * eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be
 * invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be
 * invoked if event's eventPhase attribute value is AT_TARGET.
 *
 * When set to true,options's passive indicates that the callback will not cancel the event by
 * invoking preventDefault().
 *
 * When set to true, options's once indicates that the callback will only be invoked once after
 * which the event listener will be removed.
 *
 * If an AbortSignal is passed for options's signal, then the event listener will be removed
 * when signal is aborted.
 *
 * The event listener is appended to target's event listener list and is not appended if it
 * has the same type, callback, and capture.
 */
export function on<T extends EventTarget>(
  obj: T | null,
  ...args:
    | Parameters<T["addEventListener"]>
    | [string, EventListenerOrEventListenerObject | CallableFunction, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...(args as Parameters<HTMLElement["addEventListener"]>));
  }
}
