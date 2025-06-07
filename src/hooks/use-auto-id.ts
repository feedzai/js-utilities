/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2024 Feedzai, Rights Reserved.
 */
import React, { useMemo, useState } from "react";
import { generateUUID, isFunction, isNil, makeId } from "..";
import { useMount } from "./use-mount";

type AutoIdInput = string | null | undefined;

const reactUseId = React.useId;

// Environment checks
const HAS_REACT_USE_ID = !isNil(reactUseId) && isFunction(reactUseId);

// Fallback ID generator (per-module scoped counter)
let fallbackIdCounter = 0;

/**
 * Generates a fallback ID using an incremented counter
 *
 * @returns {string} A unique identifier
 */
export function generateFallbackId(): string {
  return String(++fallbackIdCounter);
}

/**
 * Generates a UUID fragment using crypto.randomUUID if available, otherwise falls back to a fallback ID
 *
 * @example
 * ```ts
 * const uuid = generateUUIDFragment(); // "123e4567"
 * ```
 *
 * @returns {string} A unique identifier
 */
export function generateUUIDFragment(length = 8): string {
  try {
    return generateUUID().slice(0, length);
  } catch {
    // fall through to fallback
    return generateFallbackId();
  }
}

/**
 * Initializes the state for the useAutoId hook
 *
 * @param id The custom ID to initialize the state with
 * @returns The initialized state
 */
export function initializeState(id: AutoIdInput, options: { length?: number } = {}) {
  if (!id) {
    return generateUUIDFragment(options.length);
  }

  return id;
}

/**
 * Hook to generate a unique ID for components with optional prefix and custom ID.
 *
 * @param customId Optional predefined ID value
 * @param prefix Optional prefix to prepend to the ID
 * @returns A unique ID string (with prefix if provided)
 */
export function useAutoId(
  customId?: AutoIdInput,
  prefix?: string,
  options: { length?: number } = {}
): string {
  // Prefer React.useId for hydration-safe IDs if available and no customId is given
  const reactId = HAS_REACT_USE_ID && !customId ? reactUseId() : undefined;

  // Internal state to store generated ID after mount (for SSR-safe fallback)
  const [generatedId, setGeneratedId] = useState<string>(() =>
    initializeState(customId ?? reactId, options)
  );

  // On client-only mount, if no ID is present, generate one
  useMount(() => {
    if (!customId && !reactId) {
      setGeneratedId(generateUUIDFragment(options.length));
    }
  });

  const baseId = customId ?? reactId?.replace(/:/g, "") ?? generatedId;

  return useMemo(() => {
    return prefix ? makeId(prefix, baseId) : baseId;
  }, [baseId, prefix]);
}
