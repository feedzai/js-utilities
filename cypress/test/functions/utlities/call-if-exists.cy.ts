/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { callIfExists } from "src/functions/utilities/call-if-exists";

describe("callIfExists", () => {
  it("should not throw an exception when no callback is passed", () => {
    expect(callIfExists.bind(this, undefined)).not.throw();
  });

  it("should not throw an exception when null callback is passed", () => {
    expect(callIfExists.bind(this, null)).not.throw();
  });

  it("should not throw an exception when non-function is passed", () => {
    // @ts-expect-error - Testing invalid input
    expect(callIfExists.bind(this, "not a function")).not.throw();
    // @ts-expect-error - Testing invalid input
    expect(callIfExists.bind(this, 42)).not.throw();
    // @ts-expect-error - Testing invalid input
    expect(callIfExists.bind(this, {})).not.throw();
  });

  it("should call the function passed", () => {
    const func = cy.stub();
    callIfExists(func);
    expect(func).to.have.been.called;
  });

  it("should pass arguments to the callback function", () => {
    const func = cy.stub();
    callIfExists(func, "arg1", 42, { key: "value" });
    expect(func).to.have.been.calledWith("arg1", 42, { key: "value" });
  });

  it("should return the result of the callback function", () => {
    const result = callIfExists(() => "test");
    expect(result).to.equal("test");
  });

  it("should return undefined when callback is not a function", () => {
    expect(callIfExists(undefined)).to.be.undefined;
    expect(callIfExists(null)).to.be.undefined;
    // @ts-expect-error - Testing invalid input
    expect(callIfExists("not a function")).to.be.undefined;
    // @ts-expect-error - Testing invalid input
    expect(callIfExists(42)).to.be.undefined;
    // @ts-expect-error - Testing invalid input
    expect(callIfExists({})).to.be.undefined;
  });

  it("should handle functions with different return types", () => {
    expect(callIfExists(() => 42)).to.equal(42);
    expect(callIfExists(() => "string")).to.equal("string");
    expect(callIfExists(() => true)).to.be.true;
    expect(callIfExists(() => ({ key: "value" }))).to.deep.equal({ key: "value" });
    expect(callIfExists(() => [1, 2, 3])).to.deep.equal([1, 2, 3]);
  });

  it("should handle functions with different parameter types", () => {
    const stringFunc = (str: string) => str.toUpperCase();
    const numberFunc = (num: number) => num * 2;
    const objectFunc = (obj: { key: string }) => obj.key;
    const arrayFunc = (arr: number[]) => arr.reduce((a, b) => a + b, 0);

    // @ts-expect-error - Testing type compatibility
    expect(callIfExists(stringFunc, "test")).to.equal("TEST");
    // @ts-expect-error - Testing type compatibility
    expect(callIfExists(numberFunc, 21)).to.equal(42);
    // @ts-expect-error - Testing type compatibility
    expect(callIfExists(objectFunc, { key: "value" })).to.equal("value");
    // @ts-expect-error - Testing type compatibility
    expect(callIfExists(arrayFunc, [1, 2, 3])).to.equal(6);
  });

  it("should handle async functions", async () => {
    const asyncFunc = async () => "async result";
    const result = await callIfExists(asyncFunc);
    expect(result).to.equal("async result");
  });

  it("should handle functions that throw errors", () => {
    const errorFunc = () => {
      throw new Error("test error");
    };
    expect(() => callIfExists(errorFunc)).to.throw("test error");
  });

  it("should handle functions with rest parameters", () => {
    const sum = (...numbers: number[]) => numbers.reduce((a, b) => a + b, 0);
    // @ts-expect-error - Testing type compatibility
    expect(callIfExists(sum, 1, 2, 3, 4)).to.equal(10);
  });

  it("should handle functions with optional parameters", () => {
    const greet = (name: string, greeting = "Hello") => `${greeting}, ${name}!`;
    // @ts-expect-error - Testing type compatibility
    expect(callIfExists(greet, "John")).to.equal("Hello, John!");
    // @ts-expect-error - Testing type compatibility
    expect(callIfExists(greet, "John", "Hi")).to.equal("Hi, John!");
  });
});
