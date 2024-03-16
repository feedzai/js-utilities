/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { getElement } from "./get-element";

/**
 * Attaches data to a custom event.
 *
 * @description The react way of handling events is to pass callbacks to child components.
 * This can become cumbersome when a child is several levels deep and one way to avoid passing callbacks deep is using Context.
 * However, context or redux are not meant for all use cases.
 *
 * @example
 *
 * // Attach data to an event
 * emitCustomEvent('a-custom-event-name', data);
 *
 * // Listen to the event using the custom hook
 * useCustomEventListener('a-custom-event-name', data => {
 * 	doSomethingWithData( data );
 * });
 * @export
 * @template GenericType
 * @param {string} eventName
 * @param {GenericType} [data]
 */
export function emitCustomEvent<GenericType>(eventName: string, data?: GenericType): void {
  const element = getElement();
  const event: CustomEvent<GenericType> = new CustomEvent(eventName, { detail: data });

  element?.dispatchEvent(event);
}
