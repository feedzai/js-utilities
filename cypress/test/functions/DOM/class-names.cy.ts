/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { classNames } from "src/functions";

describe("classNames", () => {
  it("should concatenate strings", () => {
    const result = classNames("foo", "bar", "baz");
    expect(result).to.equal("foo bar baz");
  });

  it("should handle true/false conditions", () => {
    const result = classNames("foo", true && "bar", false && "baz");
    expect(result).to.equal("foo bar");
  });

  it("should handle objects", () => {
    const result = classNames({ foo: true, bar: false, baz: true });
    expect(result).to.equal("foo baz");
  });

  it("should handle arrays", () => {
    const result = classNames(["foo", 0, false, "bar"]);
    expect(result).to.equal("foo bar");
  });

  it("should handle nested arrays and objects", () => {
    const result = classNames(
      "foo",
      [1 && "bar", { baz: false, bat: null }, ["hello", ["world"]]],
      "cya"
    );
    expect(result).to.equal("foo bar hello world cya");
  });

  it("should handle variadic arguments", () => {
    const result = classNames("foo", true && "bar", "baz", { qux: false });
    expect(result).to.equal("foo bar baz");
  });

  it("should support ES2015 computed keys", () => {
    const buttonType = "primary";
    const result = classNames({ [`btn-${buttonType}`]: true });

    expect(result).to.equal("btn-primary");
  });
});
