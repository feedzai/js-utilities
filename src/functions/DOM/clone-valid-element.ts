/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { cloneElement, isValidElement, ReactElement, Attributes, ReactNode } from "react";

/**
 * Type-safe clone element
 */
export function cloneValidElement<Props>(
  element: ReactElement<Props> | ReactNode,
  props?: Partial<Props> & Attributes,
  ...children: ReactNode[]
): ReactElement<Props> | ReactNode {
  return isValidElement(element) ? cloneElement(element, props, ...children) : element;
}
