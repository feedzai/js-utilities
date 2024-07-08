/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useCallback, useState } from "react";
import { useMountedState } from "./use-mounted-state";
import { __DEV__, isEmpty, isNumber, isString } from "..";

export interface CopyToClipboardReturns {
  value?: string;
  error?: Error;
  copyToClipboard: (value: string) => void;
}

function writeToClipboard(value: string) {
  let HAS_WRITTEN = false;

  navigator.clipboard
    .writeText(value)
    .then(() => {
      HAS_WRITTEN = true;
    })
    .catch(() => {
      HAS_WRITTEN = false;
    });

  return HAS_WRITTEN;
}

/**
 * Copy text to a user's clipboard.
 *
 * @example
 * ```tsx
 * import { useCopyToClipboard } from "@feedzai/js-utilities/hooks";
 * ...
 * function Demo() {
 *  const [text, setText] = useState('');
 *  const { value, error, copyToClipboard } = useCopyToClipboard();
 *
 *  return (
 *    <div>
 *      <input value={text} onChange={e => setText(e.target.value)} />
 *      <button type="button" onClick={() => copyToClipboard(text)}>copy text</button>
 *      {error
 *        ? <p>Unable to copy value: {error.message}</p>
 *        : value && <p>Copied {value}</p>
 *      }
 *    </div>
 *  ):
 * }
 * ```
 */
export function useCopyToClipboard(): CopyToClipboardReturns {
  const [clipboardValue, setClipboardValue] = useState<string | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);
  const isMounted = useMountedState();

  const copyToClipboard = useCallback((value: string) => {
    if (!isMounted()) {
      return;
    }

    let valueAsString;

    try {
      // only strings and numbers casted to strings can be copied to clipboard
      const IS_WRONG_TYPE = !isString(value) && !isNumber(value);

      // empty strings are also considered invalid
      const IS_EMPTY_VALUE = isEmpty(value);

      switch (true) {
        case IS_WRONG_TYPE:
        case IS_EMPTY_VALUE:
          const error = new Error(
            IS_WRONG_TYPE
              ? `Cannot copy typeof ${typeof value} to clipboard, must be a string`
              : `Cannot copy empty string to clipboard.`
          );

          if (__DEV__) {
            console.error(error);
          }

          setClipboardValue(value);
          setError(error);

          return;

        default:
          break;
      }

      valueAsString = value.toString();

      writeToClipboard(valueAsString);

      setClipboardValue(valueAsString);
      setError(undefined);
    } catch (error) {
      setClipboardValue(valueAsString);
      setError(error as Error);
    }
  }, []);

  return {
    value: clipboardValue,
    error,
    copyToClipboard,
  };
}
