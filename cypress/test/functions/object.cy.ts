/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import * as _ from "src/functions/object";

describe("at", () => {
  it("should retrieve values at given paths of an object", () => {
    const obj = {
      a: { b: { c: 1 } },
      x: [2, 3, { y: 4 }],
    };
    const paths = ["a.b.c", "x[2].y", "x[0]"];
    const result = _.at(obj, paths);
    expect(result).to.deep.equal([1, 4, 2]);
  });

  it("should return undefined for non-existent paths", () => {
    const obj = {
      a: { b: { c: 1 } },
      x: [2, 3, { y: 4 }],
    };
    const paths = ["a.b.d", "x[2].z", "y"];
    const result = _.at(obj, paths);
    expect(result).to.deep.equal([undefined, undefined, undefined]);
  });

  it("should handle array indices properly", () => {
    const obj = {
      x: [
        [1, 2],
        [3, 4],
      ],
    };
    const paths = ["x[0][0]", "x[1][1]"];
    const result = _.at(obj, paths);
    expect(result).to.deep.equal([1, 4]);
  });

  it("should return undefined for invalid paths", () => {
    const obj = {
      a: { b: { c: 1 } },
    };
    const paths = ["a.b.c.d", "x[2].y"];
    const result = _.at(obj, paths);
    expect(result).to.deep.equal([undefined, undefined]);
  });
});

describe("omit", () => {
  it("should omit specified keys from the object", () => {
    const object = { a: 1, b: "2", c: 3 };
    const result = _.omit(object, ["a", "c"]);
    expect(result).to.deep.equal({ b: "2" });
  });

  it("should return an empty object if the input object is null", () => {
    const result = _.omit(null, ["a", "b"]);
    expect(result).to.deep.equal({});
  });

  it("should return the original object if keys array is empty", () => {
    const object = { a: 1, b: "2", c: 3 };
    const result = _.omit(object, []);
    expect(result).to.equal(object);
  });

  it("should return the original object if keys array is undefined", () => {
    const object = { a: 1, b: "2", c: 3 };
    const result = _.omit(object, undefined);
    expect(result).to.equal(object);
  });

  it("should omit multiple keys from the object", () => {
    const object = { a: 1, b: "2", c: 3, d: "4", e: 5 };
    const result = _.omit(object, ["a", "c", "d"]);
    expect(result).to.deep.equal({ b: "2", e: 5 });
  });

  it("should not mutate the original object", () => {
    const object = { a: 1, b: "2", c: 3 };
    const result = _.omit(object, ["a"]);
    expect(result).to.deep.equal({ b: "2", c: 3 });
    expect(object).to.deep.equal({ a: 1, b: "2", c: 3 });
  });

  it("should handle objects with inherited properties", () => {
    class TestClass {
      x: number;
      constructor(x: number) {
        this.x = x;
      }
    }

    const obj = new TestClass(10);
    const result = _.omit(obj, ["x"]);
    expect(result).to.deep.equal({});
  });
});

describe("get", () => {
  const simpleObject = { a: { b: 2 } };
  const complexObject = { a: [{ bar: { c: 3 } }] };
  const falsyObject = { a: null, b: undefined, c: 0 };

  it("should get property value at path of object", () => {
    expect(_.get(simpleObject, "a.b")).to.equal(2);
  });

  it("should get property value at path of complex object", () => {
    expect(_.get(complexObject, "a[0].bar.c")).to.equal(3);
  });

  it("should get property value at path using array notation", () => {
    expect(_.get(complexObject, ["a", "0", "bar", "c"])).to.equal(3);
  });

  it("should return default value if resolved value is undefined", () => {
    const result = _.get(simpleObject, "a.bar.c", "default");

    expect(result).to.equal("default");
  });

  it("should return default value if resolved value is undefined for complex object", () => {
    const result = _.get(complexObject, "a.bar.c", "default");

    expect(result).to.equal("default");
  });

  it("should return undefined if path is null", () => {
    const result = _.get(simpleObject, null);

    expect(result).to.be.undefined;
  });

  it("should return null if resolved value is null", () => {
    expect(_.get(falsyObject, "a", "default")).to.be.null;
  });

  it("should return default if resolved value is undefined", () => {
    const result = _.get(falsyObject, "b", "default");

    expect(result).to.equal("default");
  });

  it("should return zero if resolved value is zero", () => {
    expect(_.get(falsyObject, "c", "default")).to.equal(0);
  });
});

describe("set", () => {
  it("should set the value at the specified path in the object", () => {
    const object = { a: [{ bar: { c: 3 } }] };
    _.set(object, "a[0].bar.c", 4);
    expect(object.a[0].bar.c).to.equal(4);
  });

  it("should create missing index properties as arrays", () => {
    const object = {};
    const result = _.set(object, ["x", "0", "y", "z"], 5);

    expect(result.x[0].y.z).to.equal(5);
  });

  it("should return a new object with the value set at the specified path", () => {
    const initialObject = { a: { b: { c: 3 } } };
    const path = "a.b.d";
    const value = 4;
    const updatedObject = _.set(initialObject, path, value);
    expect(updatedObject).to.deep.equal({ a: { b: { c: 3, d: 4 } } });
    expect(updatedObject).not.to.equal(initialObject); // Ensure it's a new reference
  });

  it("should handle null initial object", () => {
    const object = null;
    const result = _.set(object, "a.b.c", 4);
    expect(result).to.deep.equal({});
  });

  it("should handle undefined initial object", () => {
    const object = undefined;
    const result = _.set(object, "a.b.c", 4);
    expect(result).to.deep.equal({});
  });

  it("should handle undefined path", () => {
    const object = { a: 1 };
    const result = _.set(object, undefined, 2);
    expect(result).to.equal(object);
  });

  it("should handle undefined value", () => {
    const object = { a: 1 };
    const result = _.set(object, "b", undefined);
    expect(result).to.equal(object);
  });

  it("should handle empty path", () => {
    const object = { a: 1 };
    const result = _.set(object, "", 2);
    expect(result).to.equal(object);
  });

  it("should handle empty path and undefined value", () => {
    const object = { a: 1 };
    const result = _.set(object, "");
    expect(result).to.equal(object);
  });
});

describe("clone", () => {
  it("should return a shallow copy of the given object", () => {
    const obj = { a: 1, b: "2", c: [3, 4, 5] };
    const clonedObj = _.clone(obj);
    expect(clonedObj).to.deep.equal(obj);
    expect(clonedObj).not.to.equal(obj); // Ensure it's a new reference
  });

  it("should return a shallow copy of the given array", () => {
    const arr = [1, 2, 3];
    const clonedArr = _.clone(arr);
    expect(clonedArr).to.deep.equal(arr);
    expect(clonedArr).not.to.equal(arr); // Ensure it's a new reference
  });

  it("should return a shallow copy of the given function", () => {
    const func = function () {
      return "test";
    };
    const clonedFunc = _.clone(func);
    expect(clonedFunc()).to.equal("test");
    expect(clonedFunc).not.to.equal(func); // Ensure it's a new reference
  });

  it("should return the same value for primitive values", () => {
    const str = "test";
    const num = 42;
    const bool = true;
    expect(_.clone(str)).to.equal(str);
    expect(_.clone(num)).to.equal(num);
    expect(_.clone(bool)).to.equal(bool);
  });

  it("should handle null value", () => {
    const nullValue = null;
    expect(_.clone(nullValue)).to.be.null;
  });

  it("should handle undefined value", () => {
    const undefinedValue = undefined;
    expect(_.clone(undefinedValue)).to.be.undefined;
  });
});

describe("pick", () => {
  it("should create an object composed of the picked properties", () => {
    const object = {
      a: 1,
      b: 2,
      c: 3,
    };
    const picked = _.pick(object, ["a", "c"]);
    expect(picked).to.deep.equal({ a: 1, c: 3 });
  });

  it("should handle empty keys array", () => {
    const object = {
      a: 1,
      b: 2,
      c: 3,
    };
    const picked = _.pick(object, []);
    expect(picked).to.deep.equal({});
  });

  it("should handle null object", () => {
    const object = null;
    const picked = _.pick(object, ["a", "b"]);
    expect(picked).to.deep.equal({});
  });

  it("should handle undefined object", () => {
    const object = undefined;
    const picked = _.pick(object, ["a", "b"]);
    expect(picked).to.deep.equal({});
  });

  it("should handle keys that do not exist in the object", () => {
    const object = {
      a: 1,
      b: 2,
      c: 3,
    };
    const picked = _.pick(object, ["a", "d"]);
    expect(picked).to.deep.equal({ a: 1 });
  });

  it("should handle object with inherited properties", () => {
    class Test {
      x: number;
      constructor(x: number) {
        this.x = x;
      }
    }
    const obj = new Test(10);
    const picked = _.pick(obj, ["x"]);
    expect(picked).to.deep.equal({ x: 10 });
  });
});

describe("has", () => {
  it("should return true if path is a direct property of object", () => {
    const object = { a: { bar: 2 } };
    expect(_.has(object, "a")).to.be.true;
    expect(_.has(object, "a.bar")).to.be.true;
    expect(_.has(object, ["a", "bar"])).to.be.true;
  });

  it("should return false if path is not a direct property of object", () => {
    const object = { a: { bar: 2 } };
    expect(_.has(object, ["a", "c"])).to.be.false;
  });

  it("should handle empty path", () => {
    const object = { a: { bar: 2 } };
    expect(_.has(object, "")).to.be.false;
  });

  it("should handle null object", () => {
    const object = null;
    expect(_.has(object, "a")).to.be.false;
  });

  it("should handle undefined object", () => {
    const object = undefined;
    expect(_.has(object, "a")).to.be.false;
  });

  it("should handle null path", () => {
    const object = { a: { bar: 2 } };
    expect(_.has(object, null)).to.be.false;
  });

  it("should handle undefined path", () => {
    const object = { a: { bar: 2 } };
    expect(_.has(object, undefined)).to.be.false;
  });

  it("should handle non-existent path segments", () => {
    const object = { a: { bar: 2 } };
    expect(_.has(object, "a.b.c")).to.be.false;
  });

  it("should handle array segments", () => {
    const object = { a: { bar: [1, 2, 3] } };
    expect(_.has(object, "a.bar")).to.be.true;
  });

  it("should handle nested arrays", () => {
    const object = { a: [{ b: 1 }, { c: 2 }] };
    expect(_.has(object, ["a", "0", "b"])).to.be.true;
    expect(_.has(object, ["a", "1", "c"])).to.be.true;
    expect(_.has(object, ["a", "0", "c"])).to.be.false;
  });
});

describe("isEqual function", () => {
  it("should return true for identical primitive values", () => {
    expect(_.isEqual(42, 42)).to.be.true;
    expect(_.isEqual("hello", "hello")).to.be.true;
    expect(_.isEqual(true, true)).to.be.true;
    expect(_.isEqual(undefined, undefined)).to.be.true;
    expect(_.isEqual(null, null)).to.be.true;
  });

  it("should return true for identical objects", () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(_.isEqual(obj1, obj2)).to.be.true;
  });

  it("should return true for identical arrays", () => {
    const arr1 = [1, 2, [3, 4]];
    const arr2 = [1, 2, [3, 4]];
    expect(_.isEqual(arr1, arr2)).to.be.true;
  });

  it("should return true for identical dates", () => {
    const date1 = new Date("2022-01-01");
    const date2 = new Date("2022-01-01");
    expect(_.isEqual(date1, date2)).to.be.true;
  });

  it("should return true for identical regular expressions", () => {
    const regex1 = /abc/gi;
    const regex2 = /abc/gi;
    expect(_.isEqual(regex1, regex2)).to.be.true;
  });

  it("should return false for different values", () => {
    expect(_.isEqual(42, "42")).to.be.false;
    expect(_.isEqual({ a: 1 }, { b: 2 })).to.be.false;
    expect(_.isEqual([1, 2, 3], [1, 2])).to.be.false;
  });

  it("should return false for objects with different properties", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1 };
    expect(_.isEqual(obj1, obj2)).to.be.false;
  });

  it("should return false for objects with different values", () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 3 } };
    expect(_.isEqual(obj1, obj2)).to.be.false;
  });

  it("should return false for arrays with different values", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    expect(_.isEqual(arr1, arr2)).to.be.false;
  });

  it("should return false for dates with different values", () => {
    const date1 = new Date("2022-01-01");
    const date2 = new Date("2022-01-02");
    expect(_.isEqual(date1, date2)).to.be.false;
  });

  it("should return false for regular expressions with different values", () => {
    const regex1 = /abc/gi;
    const regex2 = /def/gi;
    expect(_.isEqual(regex1, regex2)).to.be.false;
  });
});

describe("getValue", () => {
  it("should return the value corresponding to the provided path", () => {
    const obj = {
      a: {
        b: {
          c: 123,
        },
      },
    };
    const result = _.getValue(obj, "a.b.c");
    expect(result).to.equal(123);
  });

  it("should return the default value if the path does not exist and required is false", () => {
    const obj = {
      a: {
        b: {
          c: 123,
        },
      },
    };
    const defaultValue = "default";
    const result = _.getValue(obj, "a.b.d", { defaultValue, required: false });
    expect(result).to.equal(defaultValue);
  });

  it("should emit a warning and return the default value if the path does not exist and required is true", () => {
    const obj = {
      a: {
        b: {
          c: 123,
        },
      },
    };
    const defaultValue = "6fe42570-8204-4fdb-8df7-7542a328b590";
    const spyWarn = cy.spy(console, "warn");
    const result = _.getValue(obj, "a.b.d", { defaultValue, required: true });
    expect(result).to.equal(defaultValue);

    cy.wrap(spyWarn).should(
      "have.been.calledOnceWithExactly",
      `[@feedzai/js-utilities] The path a.b.d does not exist on the object. Using ${defaultValue} instead.`
    );
  });

  it("should emit an error if the path does not exist and required is true and no default value is provided", () => {
    const obj = {
      a: {
        b: {
          c: 123,
        },
      },
    };
    const spyError = cy.spy(console, "error");
    _.getValue(obj, "a.b.d", { required: true });
    expect(spyError.calledOnce).to.be.true;
    expect(
      spyError.calledWithExactly(
        `[@feedzai/js-utilities] The path a.b.d does not exist on the object.`
      )
    ).to.be.true;
    spyError.restore();
  });
});
