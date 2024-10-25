/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { cloneElement, isValidElement, ReactElement, Attributes, ReactNode } from "react";

/**
 * A type-safe wrapper around React's cloneElement that handles both valid React elements
 * and other ReactNode types. This helper safely clones React elements while preserving
 * their props types, and returns non-element nodes unchanged.
 *
 * @template Props - The type of props the element accepts
 * @param element - The React element to clone or any other React node
 * @param props - New props to merge into the cloned element
 * @param children - New children to add to the cloned element
 * @returns A cloned React element with merged props if input was a valid element,
 *          or the original input otherwise
 *
 * @example
 * // Cloning an element with new props
 * const button = <button type="button">Click me</button>;
 * const clonedButton = cloneValidElement(button, { disabled: true });
 *
 * @example
 * // Safely handling non-element nodes
 * const textNode = "Just text";
 * const result = cloneValidElement(textNode); // Returns "Just text" unchanged
 *
 * @example
 * // With typed props
 * interface MyComponentProps {
 *   title: string;
 *   count?: number;
 * }
 * const element = <MyComponent title="Original" />;
 * const cloned = cloneValidElement<MyComponentProps>(
 *   element,
 *   { count: 42 }
 * );
 */
export function cloneValidElement<Props>(
  element: ReactElement<Props> | ReactNode,
  props?: Partial<Props> & Attributes,
  ...children: ReactNode[]
): ReactElement<Props> | ReactNode {
  return isValidElement(element) ? cloneElement(element, props, ...children) : element;
}
