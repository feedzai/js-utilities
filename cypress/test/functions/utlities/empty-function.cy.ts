/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { emptyFunction } from "src/functions";

describe("emptyFunction Placeholder", () => {
  it("should be a function", () => {
    expect(emptyFunction).to.be.a("function");
  });

  it("should return undefined", () => {
    const result = emptyFunction();
    expect(result).to.be.undefined;
  });
});
