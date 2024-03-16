/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import React from "react";
import { tuple } from "../../typings";

export type QueryBreakpoints = {
  /** the values should be consisted of a min and max number, except for your largest breakpoint where it would be the min value and anything above */
  [key: string]: [number, number?];
};

export const CONTAINER_QUERY_MEASUREMENTS = {
  HEIGHT: "height",
  WIDTH: "width",
} as const;

const CONTAINER_QUERY_MEASUREMENTS_TUPLE = tuple(
  CONTAINER_QUERY_MEASUREMENTS.HEIGHT,
  CONTAINER_QUERY_MEASUREMENTS.WIDTH
);

export type ContainerQueryMeasurement = (typeof CONTAINER_QUERY_MEASUREMENTS_TUPLE)[number];

export type ContainerQueryProps = {
  /**
   * Explicit key/value map of the predefined breakpoints you wish to use.
   * Each value should have a min and max range:
   *
   * @example
   * {
   *  small: [0, 300],
   *  med: [301, 600]
   * }
   */
  breakpoints?: QueryBreakpoints;

  /**
   * Flag to ignore measurement updates if you are only interested in when a breakpoint changes.
   * Hook will forego updating state for the measurement
   *
   * @default false
   */
  ignoreDimensions?: boolean;

  /**
   * Space measurement. It can either be "width" or "height"
   *
   * @default "width"
   */
  observedMeasurement?: ContainerQueryMeasurement;
};

export type ContainerQueryResult<T> = {
  /**
   * Callback ref to be assigned to the containing DOM node the user wishes to observe for changes.
   */
  ref: React.RefCallback<T>;

  /**
   * The current 'active' breakpoint. This key will match one of the key/value pairs from the breakpoints supplied to the hook
   */
  active: string;

  /**
   * Current measure of the observed element
   */
  measurement: number;
};

export type ContainerQueryState = {
  activeBreakpoint: string;
  measurement: number;
};

export interface ResizeObserverEntry {
  readonly target: Element;
  readonly contentRect: DOMRectReadOnly;
  readonly borderBoxSize: ReadonlyArray<ResizeObserverSize> | ResizeObserverSize;
  readonly contentBoxSize: ReadonlyArray<ResizeObserverSize>;
  readonly devicePixelContentBoxSize?: ReadonlyArray<ResizeObserverSize> | undefined;
}
