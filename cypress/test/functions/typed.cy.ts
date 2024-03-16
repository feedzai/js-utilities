/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import * as _ from "src/functions/typed";

describe("isEmpty", () => {
  it("should return true for null", () => {
    expect(_.isEmpty(null)).to.be.true;
  });

  it("should return true for an empty string", () => {
    expect(_.isEmpty("")).to.be.true;
  });

  it("should return true for an empty object", () => {
    expect(_.isEmpty({})).to.be.true;
  });

  it("should return true for an empty array", () => {
    expect(_.isEmpty([])).to.be.true;
  });

  it("should return false for a non-empty object", () => {
    expect(_.isEmpty({ a: "1" })).to.be.false;
  });

  it("should return false for a non-empty array", () => {
    expect(_.isEmpty(["a", "b", "c"])).to.be.false;
  });

  it("should return false for a non-empty string", () => {
    expect(_.isEmpty("hello")).to.be.false;
  });

  it("should return false for a non-empty object with nested objects", () => {
    expect(_.isEmpty({ a: { b: "2" }, c: { d: "3" } })).to.be.false;
  });

  it("should return false for a non-empty array with nested arrays", () => {
    expect(
      _.isEmpty([
        [1, 2],
        [3, 4],
        [5, 6],
      ])
    ).to.be.false;
  });

  it("should return true for undefined", () => {
    expect(_.isEmpty(undefined)).to.be.true;
  });
});

describe("isBlank", () => {
  it("Should throw an Error if the param is not a string", () => {
    // @ts-ignore testing error being thrown
    expect(() => _.isBlank({})).to.throw("js-utilities.isBlank: This value is not a string");
  });

  it("Should evaluate an undefined param as blank", () => {
    // @ts-ignore testing error being thrown
    expect(_.isBlank(undefined)).to.be.true;
  });

  it("Should evaluate a null param as blank", () => {
    // @ts-ignore testing error being thrown
    expect(_.isBlank(null)).to.be.true;
  });

  it("Should evaluate an empty string as blank", () => {
    expect(_.isBlank("")).to.be.true;
  });

  it("Should evaluate a string with only whitespaces as blank", () => {
    expect(_.isBlank(" ")).to.be.true;
  });

  it("Should evaluate a string with only paragraphs as blank", () => {
    expect(_.isBlank("\n")).to.be.true;
  });

  it("Should evaluate a string with whitespaces and paragraphs as blank", () => {
    expect(_.isBlank(" \n ")).to.be.true;
  });

  it("Should evaluate a string with text and whitespaces as not blank", () => {
    expect(_.isBlank("abc ")).to.be.false;
  });

  it("Should evaluate a string with text, whitespaces and paragraphs as not blank", () => {
    expect(_.isBlank("\n abc dfg ")).to.be.false;
  });
});

describe("isObject", () => {
  it("should return true for an empty object", () => {
    expect(_.isObject({})).to.be.true;
  });

  it("should return false for null", () => {
    expect(_.isObject(null)).to.be.false;
  });

  it("should return false for a string", () => {
    expect(_.isObject("hello")).to.be.false;
  });

  it("should return false for a number", () => {
    expect(_.isObject(123)).to.be.false;
  });

  it("should return false for undefined", () => {
    expect(_.isObject(undefined)).to.be.false;
  });

  it("should return false for a regular expression", () => {
    expect(_.isObject(/regex/)).to.be.false;
  });

  it("should return false for a new Number(0)", () => {
    expect(_.isObject(new Number(0))).to.be.false;
  });

  it("should return false for a new String('')", () => {
    expect(_.isObject(new String(""))).to.be.false;
  });
});

describe("isPlainObject", () => {
  it("should return true for plain objects", () => {
    expect(_.isPlainObject({})).to.be.true;
    expect(_.isPlainObject(Object.create(null))).to.be.true;
  });

  it("should return false for non-plain objects", () => {
    expect(_.isPlainObject([])).to.be.false;
    expect(_.isPlainObject(null)).to.be.false;
    expect(_.isPlainObject(new Date())).to.be.false;
    expect(_.isPlainObject("string")).to.be.false;
    expect(_.isPlainObject(123)).to.be.false;
  });

  it("should return false for undefined or null", () => {
    expect(_.isPlainObject()).to.be.false;
    expect(_.isPlainObject(undefined)).to.be.false;
  });

  it("should return false for objects with non-null prototypes", () => {
    const obj = Object.create({}); // Object with non-null prototype
    expect(_.isPlainObject(obj)).to.be.false;
  });
});

describe("isDate", () => {
  it("should return true for a Date object", () => {
    expect(_.isDate(new Date())).to.be.true;
  });

  it("should return false for a string", () => {
    expect(_.isDate("2024-02-18")).to.be.false;
  });

  it("should return false for a number", () => {
    expect(_.isDate(123)).to.be.false;
  });

  it("should return false for an array", () => {
    expect(_.isDate([2024, 2, 18])).to.be.false;
  });

  it("should return false for an object", () => {
    expect(_.isDate({ year: 2024, month: 2, day: 18 })).to.be.false;
  });

  it("should return false for null", () => {
    expect(_.isDate(null)).to.be.false;
  });

  it("should return false for undefined", () => {
    expect(_.isDate(undefined)).to.be.false;
  });

  it("should return false for a boolean", () => {
    expect(_.isDate(true)).to.be.false;
  });
});

describe("isPromise", () => {
  it("should return true for a Promise object", () => {
    const promise = new Promise((resolve, reject) => {
      // Some asynchronous operation
    });
    expect(_.isPromise(promise)).to.be.true;
  });

  it("should return false for a string", () => {
    expect(_.isPromise("hello")).to.be.false;
  });

  it("should return false for a number", () => {
    expect(_.isPromise(123)).to.be.false;
  });

  it("should return false for an array", () => {
    expect(_.isPromise([1, 2, 3])).to.be.false;
  });

  it("should return false for an object", () => {
    expect(_.isPromise({ key: "value" })).to.be.false;
  });

  it("should return false for null", () => {
    expect(_.isPromise(null)).to.be.false;
  });

  it("should return false for undefined", () => {
    expect(_.isPromise(undefined)).to.be.false;
  });

  it("should return false for a boolean", () => {
    expect(_.isPromise(true)).to.be.false;
  });
});

describe("isString", () => {
  it("should return true for a string primitive", () => {
    expect(_.isString("abc")).to.be.true;
  });

  it("should return true for a string object", () => {
    expect(_.isString(new String("abc"))).to.be.true;
  });

  it("should return false for a number", () => {
    expect(_.isString(1)).to.be.false;
  });

  it("should return false for an array", () => {
    expect(_.isString([1, 2, 3])).to.be.false;
  });

  it("should return false for an object", () => {
    expect(_.isString({ key: "value" })).to.be.false;
  });

  it("should return false for null", () => {
    expect(_.isString(null)).to.be.false;
  });

  it("should return false for undefined", () => {
    expect(_.isString(undefined)).to.be.false;
  });

  it("should return false for a boolean", () => {
    expect(_.isString(true)).to.be.false;
  });
});

describe("isNumber", () => {
  it("should return true if the passed value is an integer", () => {
    expect(_.isNumber(10)).to.be.true;
    expect(_.isNumber(parseInt("10"))).to.be.true;
  });
  it("should return false if the passed value is not a number", () => {
    expect(_.isNumber("10")).to.be.false;
    expect(_.isNumber("")).to.be.false;
    expect(_.isNumber(true)).to.be.false;
  });
});

describe("isPrimitive", () => {
  it("should return true for undefined", () => {
    expect(_.isPrimitive(undefined)).to.be.true;
  });

  it("should return true for null", () => {
    expect(_.isPrimitive(null)).to.be.true;
  });

  it("should return true for a number", () => {
    expect(_.isPrimitive(123)).to.be.true;
  });

  it("should return true for a string", () => {
    expect(_.isPrimitive("hello")).to.be.true;
  });

  it("should return true for a boolean", () => {
    expect(_.isPrimitive(true)).to.be.true;
  });

  it("should return true for a symbol", () => {
    expect(_.isPrimitive(Symbol())).to.be.true;
  });

  it("should return true for a bigint", () => {
    expect(_.isPrimitive(BigInt(123))).to.be.true;
  });

  it("should return false for an array", () => {
    expect(_.isPrimitive([1, 2, 3])).to.be.false;
  });

  it("should return false for an object", () => {
    expect(_.isPrimitive({ key: "value" })).to.be.false;
  });

  it("should return false for a function", () => {
    expect(_.isPrimitive(() => {})).to.be.false;
  });
});

describe("isBoolean", () => {
  it("should return true for a boolean primitive", () => {
    expect(_.isBoolean(true)).to.be.true;
  });

  it("should return true for a boolean object", () => {
    expect(_.isBoolean(new Boolean(true))).to.be.true;
  });

  it("should return false for null", () => {
    expect(_.isBoolean(null)).to.be.false;
  });

  it("should return false for a number", () => {
    expect(_.isBoolean(1)).to.be.false;
  });

  it("should return false for a string", () => {
    expect(_.isBoolean("hello")).to.be.false;
  });

  it("should return false for an array", () => {
    expect(_.isBoolean([true, false])).to.be.false;
  });

  it("should return false for an object", () => {
    expect(_.isBoolean({ key: "value" })).to.be.false;
  });

  it("should return false for undefined", () => {
    expect(_.isBoolean(undefined)).to.be.false;
  });
});

describe("boolOrBoolString", () => {
  it("should return true if the passed value is a trueboolean", () => {
    expect(_.boolOrBoolString(true)).to.be.true;
    expect(_.boolOrBoolString("true")).to.be.true;
    expect(_.boolOrBoolString("false")).to.be.false;
  });
});

describe("isArray", () => {
  it("should return true for an array", () => {
    expect(_.isArray([1, 2, 3])).to.be.true;
  });

  it("should return false for an array-like object", () => {
    expect(_.isArray(document.body.children)).to.be.false;
  });

  it("should return false for a string", () => {
    expect(_.isArray("abc")).to.be.false;
  });

  it("should return false for a number", () => {
    expect(_.isArray(123)).to.be.false;
  });

  it("should return false for an object", () => {
    expect(_.isArray({ key: "value" })).to.be.false;
  });

  it("should return false for null", () => {
    expect(_.isArray(null)).to.be.false;
  });

  it("should return false for undefined", () => {
    expect(_.isArray(undefined)).to.be.false;
  });

  it("should return false for a boolean", () => {
    expect(_.isArray(true)).to.be.false;
  });
});

describe("isFunction", () => {
  it("should return true for a function declared using the stub syntax", () => {
    expect(_.isFunction(cy.stub())).to.be.true;
  });

  it("should return true for a function declared using function keyword", () => {
    expect(_.isFunction(function () {})).to.be.true;
  });

  it("should return true for a function declared using arrow function syntax", () => {
    expect(_.isFunction(() => {})).to.be.true;
  });

  it("should return true for a function declared using class syntax", () => {
    expect(_.isFunction(class NotAFunction {})).to.be.true;
  });

  it("should return false for a regular expression", () => {
    expect(_.isFunction(/abc/)).to.be.false;
  });

  it("should return false for a string", () => {
    expect(_.isFunction("abc")).to.be.false;
  });

  it("should return false for a number", () => {
    expect(_.isFunction(123)).to.be.false;
  });

  it("should return false for an object", () => {
    expect(_.isFunction({ key: "value" })).to.be.false;
  });

  it("should return false for null", () => {
    expect(_.isFunction(null)).to.be.false;
  });

  it("should return false for undefined", () => {
    expect(_.isFunction(undefined)).to.be.false;
  });

  it("should return false for a boolean", () => {
    expect(_.isFunction(true)).to.be.false;
  });
});

describe("isNil", () => {
  it("should return true for null", () => {
    expect(_.isNil(null)).to.be.true;
  });

  it("should return true for undefined", () => {
    expect(_.isNil(undefined)).to.be.true;
  });

  it("should return false for NaN", () => {
    expect(_.isNil(NaN)).to.be.false;
  });

  it("should return false for a string", () => {
    expect(_.isNil("abc")).to.be.false;
  });

  it("should return false for a number", () => {
    expect(_.isNil(123)).to.be.false;
  });

  it("should return false for an object", () => {
    expect(_.isNil({ key: "value" })).to.be.false;
  });

  it("should return false for true", () => {
    expect(_.isNil(true)).to.be.false;
  });

  it("should return false for false", () => {
    expect(_.isNil(false)).to.be.false;
  });

  it("should return false for an empty string", () => {
    expect(_.isNil("")).to.be.false;
  });

  it("should return false for an empty array", () => {
    expect(_.isNil([])).to.be.false;
  });
});

describe("isNull", () => {
  it("should return true for null", () => {
    expect(_.isNull(null)).to.be.true;
  });

  it("should return false for undefined", () => {
    expect(_.isNull(undefined)).to.be.false;
  });

  it("should return false for NaN", () => {
    expect(_.isNull(NaN)).to.be.false;
  });

  it("should return false for a string", () => {
    expect(_.isNull("abc")).to.be.false;
  });

  it("should return false for a number", () => {
    expect(_.isNull(123)).to.be.false;
  });

  it("should return false for an object", () => {
    expect(_.isNull({ key: "value" })).to.be.false;
  });

  it("should return false for true", () => {
    expect(_.isNull(true)).to.be.false;
  });

  it("should return false for false", () => {
    expect(_.isNull(false)).to.be.false;
  });

  it("should return false for an empty string", () => {
    expect(_.isNull("")).to.be.false;
  });

  it("should return false for an empty array", () => {
    expect(_.isNull([])).to.be.false;
  });
});

describe("isUndefined", () => {
  it("should return true for undefined", () => {
    expect(_.isUndefined(undefined)).to.be.true;
  });

  it("should return false for null", () => {
    expect(_.isUndefined(null)).to.be.false;
  });

  it("should return false for NaN", () => {
    expect(_.isUndefined(NaN)).to.be.false;
  });

  it("should return false for a string", () => {
    expect(_.isUndefined("abc")).to.be.false;
  });

  it("should return false for a number", () => {
    expect(_.isUndefined(123)).to.be.false;
  });

  it("should return false for an object", () => {
    expect(_.isUndefined({ key: "value" })).to.be.false;
  });

  it("should return false for true", () => {
    expect(_.isUndefined(true)).to.be.false;
  });

  it("should return false for false", () => {
    expect(_.isUndefined(false)).to.be.false;
  });

  it("should return false for an empty string", () => {
    expect(_.isUndefined("")).to.be.false;
  });

  it("should return false for an empty array", () => {
    expect(_.isUndefined([])).to.be.false;
  });
});

describe("isElement", () => {
  it("should return true for a DOM element", () => {
    expect(_.isElement(document.body)).to.be.true;
  });

  it("should return false for a string representing a DOM element", () => {
    expect(_.isElement("<body>")).to.be.false;
  });

  it("should return false for null", () => {
    expect(_.isElement(null)).to.be.false;
  });

  it("should return false for undefined", () => {
    expect(_.isElement(undefined)).to.be.false;
  });

  it("should return false for a number", () => {
    expect(_.isElement(123)).to.be.false;
  });

  it("should return false for a boolean", () => {
    expect(_.isElement(true)).to.be.false;
  });

  it("should return false for an object", () => {
    expect(_.isElement({ key: "value" })).to.be.false;
  });

  it("should return false for an array", () => {
    expect(_.isElement([])).to.be.false;
  });

  it("should return false for a function", () => {
    expect(_.isElement(() => {})).to.be.false;
  });
});
