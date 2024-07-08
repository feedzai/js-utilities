/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useState, useLayoutEffect } from "react";

type UseScriptReturns = [boolean, boolean];

const cachedScripts: string[] = [];

/**
 * A custom-hook to dynamically fetch an external script
 * and know when it's loaded into the DOM
 *
 * @example
 * ```tsx
 * import { useSafeLayoutEffect } from '@feedzai/js-utilities/hooks';
 * ...
 * const [loaded, error] = useScript("")
 * ```
 */
export function useScript(
  src: string,
  removeOnUnmount: boolean | undefined = false,
  testId = "js-external-script"
): UseScriptReturns {
  // Keeping track of script loaded and error state
  const [state, setState] = useState({
    loaded: false,
    error: false,
  });

  useLayoutEffect(
    () => {
      // If cachedScripts array already includes src that means another instance ...
      // ... of this hook already loaded this script, so no need to load again.
      if (cachedScripts.includes(src)) {
        setState({
          loaded: true,
          error: false,
        });
      } else {
        cachedScripts.push(src);

        // Create script
        const script = document.createElement("script");

        script.src = src;
        script.type = "text/javascript";
        script.async = true;
        script.defer = true;
        script.setAttribute("data-testid", testId);

        document.body.appendChild(script);

        /**
         * Script event listener callback for load
         */
        const onScriptLoad = () => {
          setState({
            loaded: true,
            error: false,
          });
        };

        /**
         * Script event listener callback for error
         */
        const onScriptError = () => {
          // Remove from cachedScripts we can try loading again
          const index = cachedScripts.indexOf(src);

          if (index >= 0) {
            cachedScripts.splice(index, 1);
          }
          script.remove();

          setState({
            loaded: false,
            error: true,
          });
        };

        script.addEventListener("load", onScriptLoad);
        script.addEventListener("error", onScriptError);

        return () => {
          if (script) {
            script.removeEventListener("load", onScriptLoad);
            script.removeEventListener("error", onScriptError);

            if (cachedScripts.length > 0) {
              cachedScripts.pop();
            }

            if (removeOnUnmount) {
              script.remove();
            }
          }
        };
      }
    },
    [src, removeOnUnmount, testId] // Only re-run effect if script src changes
  );

  return [state.loaded, state.error];
}
