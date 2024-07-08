/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2024 Feedzai, Rights Reserved.
 */
import React, { useMemo, useRef, useState } from "react";
import { useMount, useSafeLayoutEffect } from ".";
import { isFunction, makeId } from "..";

let hasHydrated = false;
let id = 0;

// Check if React.useId is available
const HAS_USE_ID_HOOK = isFunction(React.useId);

/**
 * Returns an incremented id number
 *
 * @returns {number}
 */
function generateIncrementalId() {
  return ++id;
}

/**
 * Generate automatic IDs to facilitate WAI-ARIA
 *
 * The returned ID will initially be `null` and will update after a
 * component mounts. Users may need to supply their own ID if they need
 * consistent values for SSR.
 *
 * @example
 *
 * // Generating an id (no pre-defined id and no prefix)
 * const id1 = useAutoId(); // will return, for example, "0"
 *
 * // Using a pre-defined id (no prefix)
 * const id2 = useAutoId("8e88aa2e-e6a8") // will return "8e88aa2e-e6a8"
 *
 * // Using a prefix with an auto-generated id (no pre-defined id)
 * const id3 = useAutoId(undefined, "fdz-prefix") // will return, for example, "fdz-prefix--10"
 *
 * // Using a prefix with a pre-defined id
 * const id4 = useAutoId("6949d175", "fdz-js-checkbox") // will return "fdz-js-checkbox--6949d175"
 *
 * @param {string | null | undefined} customId - You can pass an previously defined value
 * and that value will be used as the value of the returned id.
 * @param {string | undefined} prefix - If necessary, you can prepend a generated id with a prefix.
 * @returns {string | undefined} an auto/self-generated id with a possible prefix
 */
function useAutoId(customId?: string | null, prefix?: string): string | undefined {
  const { current: idPrefix } = useRef(prefix);

  // Use React's `useId` hook if available
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const REACT_GENERATED_ID = HAS_USE_ID_HOOK && !customId ? React.useId?.() : null;
  const INITIAL_ID = customId ?? (hasHydrated ? generateIncrementalId() : null);

  const [generatedId, setGeneratedId] = useState(INITIAL_ID);

  // Use the react generated id if available, otherwise use internally generated id
  const BASE_ID = REACT_GENERATED_ID || generatedId;

  /*
   * Patch the ID after render to avoid any rendering flicker.
   */
  useSafeLayoutEffect(() => {
    if (generatedId === null) {
      setGeneratedId(generateIncrementalId());
    }
  }, []);

  /*
   * Flag all future uses of `useAutoId` to skip the updating cycle.
   * We use `useMount` (useEffect underneath) because it happens after `useLayoutEffect`.
   * This way we make sure that we complete the patch process until the end.
   */
  useMount(() => {
    if (hasHydrated === false) {
      hasHydrated = true;
    }
  });

  const finalId = useMemo(() => {
    if (!BASE_ID) {
      return undefined;
    }

    const STRING_ID = String(BASE_ID);

    // Always use makeId to combine prefix and id, even when using React's useId
    return idPrefix ? makeId(idPrefix, STRING_ID) : STRING_ID;
  }, [BASE_ID, idPrefix]);

  return finalId;
}
export { useAutoId };
