/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
declare global {
  interface Window {
    _customEventTargetElement: undefined | HTMLDivElement;
  }
}

export type EventHandler<T> = (data: T) => void;
