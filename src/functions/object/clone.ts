/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { isPrimitive } from "..";

/**
 * Creates a shallow copy of the given obejct/value.
 * @param {*} obj value to clone
 * @returns {*} shallow clone of the given value
 */
export function clone<T>(obj: T): T {
  // Primitive values do not need cloning.
  if (isPrimitive(obj)) {
    return obj;
  }

  // Binding a function to an empty object creates a
  // copy function.
  if (typeof obj === "function") {
    return obj.bind({});
  }

  // Access the constructor and create a new object.
  // This method can create an array as well.
  const newObj = new ((obj as object).constructor as { new (): T })();

  // Assign the props.
  Object.getOwnPropertyNames(obj).forEach((prop) => {
    // Bypass type checking since the primitive cases
    // are already checked in the beginning
    (newObj as any)[prop] = (obj as any)[prop];
  });

  return newObj;
}
