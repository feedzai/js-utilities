/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Returns the browser time zone
 *
 * @example
 *
 * ```typescript
 * import { getBrowserTimezone } from "@feedzai/js-utilities";
 *
 * const MY_TIMEZONE = getBrowserTimezone();
 *
 * console.log(MY_TIMEZONE); // 'Europe/Lisbon'
```
 */
function getBrowserTimeZone(): string | undefined {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export { getBrowserTimeZone, getBrowserTimeZone as getBrowserTimezone };
