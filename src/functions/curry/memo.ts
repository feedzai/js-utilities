/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
type Cache<T> = Record<string, { exp: number | null; value: T }>;
export type Func<TArgs = any, KReturn = any | void> = (...args: TArgs[]) => KReturn;

function memoize<T>(
  cache: Cache<T>,
  func: Func<any, T>,
  keyFunc: Func<string> | null,
  ttl: number | null
) {
  return function callWithMemo(...args: any): T {
    const key = keyFunc ? keyFunc(...args) : JSON.stringify({ args });
    const existing = cache[key];
    if (existing !== undefined) {
      if (!existing.exp) return existing.value;
      if (existing.exp > new Date().getTime()) {
        return existing.value;
      }
    }
    const result = func(...args);
    cache[key] = {
      exp: ttl ? new Date().getTime() + ttl : null,
      value: result,
    };
    return result;
  };
}

/**
 * Creates a memoized function. The returned function
 * will only execute the source function when no value
 * has previously been computed. If a ttl (milliseconds)
 * is given previously computed values will be checked
 * for expiration before being returned.
 *
 * @example
 *
 * const timestamp = memo(() => Date.now())
 *
 * const now = timestamp()
 * const later = timestamp()
 *
 * now === later // => true
 */
export function memo<TFunc extends (...args: any) => any>(
  func: TFunc,
  options: {
    key?: Func<any, string>;
    ttl?: number;
  } = {}
) {
  return memoize({}, func, options.key ?? null, options.ttl ?? null) as TFunc;
}
