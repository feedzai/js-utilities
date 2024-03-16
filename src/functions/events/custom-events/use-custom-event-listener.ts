/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useEffect } from "react";
import { EventHandler } from "./types";
import { getElement } from "./get-element";

/**
 * A custom hook that listens to a custom event and auto-cleans itself on unmount.
 *
 * @example
 * useCustomEventListener('a-custom-event-name', data => {
 * 	doSomethingWithData( data );
 * });
 */
export function useCustomEventListener<GenericType>(
  eventName: string,
  eventHandler: EventHandler<GenericType>
): void {
  useEffect(() => {
    const element = getElement();
    const handleEvent = (event: CustomEvent | Event) => {
      const data = (event as CustomEvent).detail;

      eventHandler(data);
    };

    element?.addEventListener(eventName, handleEvent, false);

    return () => {
      element?.removeEventListener(eventName, handleEvent, false);
    };
  });
}
