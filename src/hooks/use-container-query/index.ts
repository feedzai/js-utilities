/* eslint-disable no-case-declarations */
/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useCallback, useRef, useState, useLayoutEffect } from "react";
import { DEFAULT_BREAKPOINTS } from "./constants";
import {
  ContainerQueryProps,
  ContainerQueryResult,
  ContainerQueryState,
  CONTAINER_QUERY_MEASUREMENTS,
  ResizeObserverEntry,
} from "./types";

/**
 * Measure an HTML element width using the Resize Observer API.
 *
 * It matches that value with the user's predefined breakpoint ranges and determines the containers size.
 *
 * The main purpose of this is to allow web developers to style DOM elements based on
 * the size of a containing element rather than the size of the browser viewport.
 *
 * @example
 *
 * const BREAKPOINTS = {
 *  "xs": [0, 960],
 *  "sm": [961, 1200],
 *  "md": [1201, 1440],
 *  "lg": [1441, 1920],
 *  "xl": [1921],
 * };
 *
 * function App() {
 *   const { ref, active, measurement: width } = useContainerQuery({ breakpoints });
 *
 *   return (
 *      <div ref={ref}>
 *          The current width is: {width}
 *          This matches your breakpoint: {active}
 *      </div>
 *   );
 * }
 *
 */
export function useContainerQuery<GenericType extends HTMLElement>({
  breakpoints = DEFAULT_BREAKPOINTS,
  ignoreDimensions = true,
  observedMeasurement = CONTAINER_QUERY_MEASUREMENTS.WIDTH,
}: ContainerQueryProps): ContainerQueryResult<GenericType> {
  const INITIAL_BREAKPOINT = Object.keys(breakpoints)[0];
  const [state, setState] = useState<ContainerQueryState>({
    activeBreakpoint: INITIAL_BREAKPOINT,
    measurement: 0,
  });

  // Store refs for the resize observer instance, and observed element we are tracking.
  const observerRef = useRef<ResizeObserver | null>(null);
  const elementRef = useRef<GenericType | null>(null);

  /**
   * Checks if the current breakpoint matches any range in the array of breakpoints.
   */
  const matchBreakpoint = useCallback(
    (previousBreakpoint: string, currentMeasure: number) => {
      let currentBreakpoint;

      for (const [key, [min, max]] of Object.entries(breakpoints)) {
        if (currentMeasure >= min) {
          if (max === undefined) {
            currentBreakpoint = key;
            break;
          } else if (currentMeasure <= max) {
            currentBreakpoint = key;
            break;
          }
        }
      }

      return {
        activeBreakpoint: currentBreakpoint || previousBreakpoint,
        measurement: currentMeasure,
      };
    },
    [breakpoints]
  );

  /**
   * Callback triggered on from the resize observer on change.
   */
  const handleResize = useCallback(
    ([entry]: readonly ResizeObserverEntry[]) => {
      let currentMeasure: number;

      if (entry.borderBoxSize) {
        switch (observedMeasurement) {
          default:
          case CONTAINER_QUERY_MEASUREMENTS.WIDTH:
            // Checking for chrome as using a non-standard array (https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)
            const width: number = Array.isArray(entry.borderBoxSize)
              ? entry.borderBoxSize[0].inlineSize
              : (entry.borderBoxSize as ResizeObserverSize).inlineSize;

            currentMeasure = Math.round(width);
            break;

          case CONTAINER_QUERY_MEASUREMENTS.HEIGHT:
            // Checking for chrome as using a non-standard array (https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)
            const height: number = Array.isArray(entry.borderBoxSize)
              ? entry.borderBoxSize[0].blockSize
              : (entry.borderBoxSize as ResizeObserverSize).blockSize;

            currentMeasure = Math.round(height);
            break;
        }
      } else {
        currentMeasure = Math.round(entry.contentRect[observedMeasurement]);
      }

      if (ignoreDimensions) {
        const { activeBreakpoint } = matchBreakpoint(state.activeBreakpoint, currentMeasure);

        if (activeBreakpoint !== state.activeBreakpoint) {
          setState((prev) => ({ ...prev, activeBreakpoint }));
        }
      } else {
        setState(matchBreakpoint(state.activeBreakpoint, currentMeasure));
      }
    },
    [state.activeBreakpoint, ignoreDimensions, matchBreakpoint, observedMeasurement]
  );

  useLayoutEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new ResizeObserver(handleResize);
    }

    if (elementRef.current) {
      observerRef.current.observe(elementRef.current, {
        box: "border-box",
      });
    }

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [handleResize]);

  /**
   * Ref callback passed to user
   */
  const assignRef = useCallback((node: GenericType | null) => {
    if (elementRef.current) {
      observerRef.current?.unobserve(elementRef.current);
    }

    elementRef.current = node;

    if (node) {
      observerRef.current?.observe(node);
    }
  }, []);

  return {
    ref: assignRef,
    measurement: state.measurement,
    active: state.activeBreakpoint,
  } as const;
}
