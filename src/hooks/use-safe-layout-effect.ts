/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2024 Feedzai, Rights Reserved.
 */
import { useLayoutEffect, useEffect } from "react";
import { isBrowser } from "..";

/**
 * `useLayoutEffect` that does not show warning when server-side rendering.
 *
 * See Alex Reardon's article for more info.
 * {@see https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a}
 */
export const useSafeLayoutEffect = isBrowser ? useLayoutEffect : useEffect;
