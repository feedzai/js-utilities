/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useCallback, useState } from "react";
import { useLiveRef } from "..";
import { applyState, defineSetNextState, isSetNextState } from "./helpers";
import { SetState } from "./types";

/**
 * A React hook that manages state which can be either controlled (by a parent component)
 * or uncontrolled (managed internally). This pattern is commonly used in form components
 * and other reusable components that need to work in both controlled and uncontrolled modes.
 *
 * @template StateType - The type of the state value
 * @param defaultState - The initial state value or a function that returns it (for uncontrolled mode)
 * @param state - The controlled state value (optional)
 * @param setState - Callback to update the controlled state (optional)
 * @returns A tuple containing the current state value and a setter function
 *
 * @example
 * // Uncontrolled usage
 * function UncontrolledTabs() {
 *   const [selectedIndex, setSelectedIndex] = useControlledState(0);
 *   return <div>Selected: {selectedIndex}</div>;
 * }
 *
 * @example
 * // Controlled usage
 * function ControlledTabs({ index, onChange }) {
 *   const [selectedIndex, setSelectedIndex] = useControlledState(
 *     0,      // default value
 *     index,  // controlled value
 *     onChange // controlled setter
 *   );
 *   return <div>Selected: {selectedIndex}</div>;
 * }
 *
 * @example
 * // With lazy initialization
 * function LazyTabs() {
 *   const [selectedIndex, setSelectedIndex] = useControlledState(
 *     () => computeExpensiveInitialState()
 *   );
 *   return <div>Selected: {selectedIndex}</div>;
 * }
 */
export function useControlledState<StateType>(
  defaultState: StateType | (() => StateType),
  state?: StateType,
  setState?: (value: StateType) => void
): [StateType, SetState<StateType>] {
  // Initialize local state with default value
  const [localState, setLocalState] = useState(defaultState);

  // Determine current state based on whether component is controlled
  const nextState = state !== undefined ? state : localState;

  // Keep live references to avoid stale closures
  const stateRef = useLiveRef(state);
  const setStateRef = useLiveRef(setState);
  const nextStateRef = useLiveRef(nextState);

  // Create stable setter function
  const setNextState = useCallback((prevValue: StateType) => {
    const setStateProp = setStateRef.current;

    if (setStateProp) {
      if (isSetNextState(setStateProp)) {
        // If setter is already wrapped, call directly
        setStateProp(prevValue);
      } else {
        // Apply state update and notify parent
        const nextValue = applyState(prevValue, nextStateRef.current);
        nextStateRef.current = nextValue;
        setStateProp(nextValue);
      }
    }

    // Update local state if uncontrolled
    if (stateRef.current === undefined) {
      setLocalState(prevValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty deps array since we use refs

  // Mark setter function for internal tracking
  defineSetNextState(setNextState);

  return [nextState, setNextState];
}
