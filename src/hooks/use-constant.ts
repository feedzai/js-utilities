/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useRef } from "react";

/**
 * Executes a callback once and keeps its value for the rest of the component's lifetime.
 * This is useful, for instance, for executing translations once and avoiding repetitive computations.
 *
 * See {@link https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily this FAQ on React's own homepage}
 *
 * @example
 * ```tsx
 * import { useConstant } from '@feedzai/js-utilities/hooks';
 * ...
 * // Calling the translateText function once
 * const messages = useConstant(() => {
 *  return {
 *   title: translateText("some.internationalization.string.here"),
 *   description: translateText("some.other.internationalization.string.here");
 *  }
 * });
 *
 * // Consuming its unmodified value later on
 * <p>{messages.description}</p>
 * ```
 *
 * @example
 * ```tsx
 * import { useConstant } from '@feedzai/js-utilities/hooks';
 * ...
 * const configs = useConstant(() => {
 *      const hasIcon = !isEmpty(icon);
 *      const iconClass = classNames("some-css-class", getIconClass(hasIcon, kind, icon));
 *
 *      return {
 *          hasIcon,
 *          iconClass,
 *      };
 *  });
 *
 * // Consuming its unmodified value later on
 * <p>{configs.hasIcon}</p>
 * ```
 */
export function useConstant<FunctionReturnType>(fn: () => FunctionReturnType): FunctionReturnType {
  const ref = useRef<{ instance: FunctionReturnType }>();

  if (!ref.current) {
    ref.current = {
      instance: fn(),
    };
  }

  return ref.current.instance;
}
