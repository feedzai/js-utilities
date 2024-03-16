/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { toggleDataAttribute } from "../../../../src/functions";

describe("toggleDataAttribute", () => {
  it("should return an empty string when the prop is truthy", () => {
    expect(toggleDataAttribute(true)).to.equal("");
    expect(toggleDataAttribute("true")).to.equal("");
  });

  it("should return undefined when the prop is falsy", () => {
    expect(toggleDataAttribute(false)).to.equal(undefined);
    expect(toggleDataAttribute("false")).to.equal(undefined);
    expect(toggleDataAttribute(undefined)).to.equal(undefined);
    expect(toggleDataAttribute(null)).to.equal(undefined);
  });
});
