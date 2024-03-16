/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import * as _ from "src/functions/array";

const SOURCE = ["sar-manager", "pulse", "case-manager", "genome", "riskops studio"];
const DUPLICATED_SOURCE = [
  "case-manager",
  "case-manager",
  "genome",
  "genome",
  "pulse",
  "pulse",
  "riskops studio",
  "riskops studio",
  "sar-manager",
  "sar-manager",
];
const SOURCE_UNIQUE = ["case-manager", "genome", "pulse", "riskops studio", "sar-manager"];

describe("arrayMove", () => {
  const originalArray = [1, 2, 3, 4, 5, 6];

  it("should move items in an array", () => {
    const movedArray = _.arrayMove(originalArray, 1, 0);

    expect(movedArray).to.deep.eq([2, 1, 3, 4, 5, 6]);
  });

  it("should move items when 'from' index is negative", () => {
    const movedArray = _.arrayMove(originalArray, -1, 0);

    expect(movedArray).to.deep.eq([6, 1, 2, 3, 4, 5]);
  });

  it("should move items when 'to' index is negative", () => {
    const movedArray = _.arrayMove(originalArray, 0, -1);

    expect(movedArray).to.deep.eq([2, 3, 4, 5, 6, 1]);
  });
});

describe("removeItem", () => {
  it("should remove an item from the array", () => {
    expect(_.removeItem(SOURCE, "case-manager").includes("case-manager")).to.be.false;
  });

  it("should throw an error if the param is not an array", () => {
    // @ts-expect-error testing error being thrown
    expect(() => _.removeItem(undefined, "case-manager")).throw(
      "js-utilities.removeItem: Please pass a valid array as a parameter"
    );

    // @ts-expect-error testing error being thrown
    expect(() => _.removeItem(null, "case-manager")).throw(
      "js-utilities.removeItem: Please pass a valid array as a parameter"
    );

    // @ts-expect-error testing error being thrown
    expect(() => _.removeItem(SOURCE[0], "case-manager")).throw(
      "js-utilities.removeItem: Please pass a valid array as a parameter"
    );
  });
});

describe("uniq", () => {
  it("should return an array without duplicates", () => {
    const expectedLength = SOURCE_UNIQUE.length;

    expect(_.uniq(DUPLICATED_SOURCE).length).to.deep.eq(expectedLength);
    expect(_.uniq(DUPLICATED_SOURCE)).to.deep.eq(SOURCE_UNIQUE);
  });
});

describe("inRange", () => {
  it("should return true if n is between start and end", () => {
    expect(_.inRange(3, 2, 4)).to.be.true;
  });

  it("should return true if n is between start and 0 when end is not specified", () => {
    expect(_.inRange(4, 8)).to.be.true;
  });

  it("should return false if n is outside the range", () => {
    expect(_.inRange(4, 2)).to.be.false;
  });

  it("should return false if n is equal to start or end", () => {
    expect(_.inRange(2, 2)).to.be.false;
  });

  it("should treat non-integer ranges correctly", () => {
    expect(_.inRange(1.2, 2)).to.be.true;
    expect(_.inRange(5.2, 4)).to.be.false;
  });

  it("should handle negative ranges correctly", () => {
    expect(_.inRange(-3, -2, -6)).to.be.true;
  });

  it("should swap the parameters if rangeStart is greater than rangeEnd", () => {
    expect(_.inRange(4, 8, 2)).to.be.true;
    expect(_.inRange(4, 2, 8)).to.be.true;
  });
});

describe("uniqBy", () => {
  it("should return unique elements based on the provided iteratee", () => {
    const arr = [2.1, 1.2, 2.3];
    const result = _.uniqBy(arr, Math.floor);
    expect(result).to.deep.equal([2.1, 1.2]);
  });

  it("should return unique elements based on a custom iteratee function", () => {
    const arr = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "John" },
    ];
    const result = _.uniqBy(arr, (obj) => obj.name);
    expect(result).to.deep.equal([
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ]);
  });

  it("should return unique elements based on a custom property key", () => {
    const arr = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "John" },
    ];
    const result = _.uniqBy(arr, "name");
    expect(result).to.deep.equal([
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ]);
  });

  it("should handle empty arrays", () => {
    const arr: number[] = [];
    const result = _.uniqBy(arr, Math.floor);
    expect(result).to.deep.equal([]);
  });

  it("should handle arrays with single element", () => {
    const arr = [2.1];
    const result = _.uniqBy(arr, Math.floor);
    expect(result).to.deep.equal([2.1]);
  });

  it("should handle arrays with multiple elements having same value", () => {
    const arr = [2.1, 2.2, 2.3];
    const result = _.uniqBy(arr, Math.floor);
    expect(result).to.deep.equal([2.1]);
  });

  it("should handle arrays with multiple elements having unique values", () => {
    const arr = [2.1, 1.2, 3.3];
    const result = _.uniqBy(arr, Math.floor);
    expect(result).to.deep.equal([2.1, 1.2, 3.3]);
  });
});

describe("includes", () => {
  it("should return true if the value is present in the array", () => {
    const array = [1, 2, 3];
    const value = 1;
    const result = _.includes(array, value);
    expect(result).to.be.true;
  });

  it("should return false if the value is not present in the array", () => {
    const array = [1, 2, 3];
    const value = 4;
    const result = _.includes(array, value);
    expect(result).to.be.false;
  });

  it("should work with arrays of strings", () => {
    const array = ["apple", "banana", "orange"];
    const value = "banana";
    const result = _.includes(array, value);
    expect(result).to.be.true;
  });

  it("should work with arrays of objects", () => {
    const array = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ];
    const value = { id: 1, name: "John" };
    const result = _.includes(array, value);
    expect(result).to.be.false; // Because objects are compared by reference
  });

  it("should return false for an empty array", () => {
    const array: number[] = [];
    const value = 1;
    const result = _.includes(array, value);
    expect(result).to.be.false;
  });

  it("should return false if the value is not present as a substring in a string array", () => {
    const array = ["apple", "banana", "orange"];
    const value = "grape";
    const result = _.includes(array, value);
    expect(result).to.be.false;
  });
});

describe("flatMap", () => {
  it("should return a new array with each element mapped and flattened by one level", () => {
    const array = [1, 2, 3];
    const callback = (n) => [n, n];
    const result = _.flatMap(array, callback);
    expect(result).to.deep.equal([1, 1, 2, 2, 3, 3]);
  });

  it("should return an empty array if the input array is empty", () => {
    const array: number[] = [];
    const callback = (n) => [n, n];
    const result = _.flatMap(array, callback);
    expect(result).to.deep.equal([]);
  });

  it("should work with arrays of strings", () => {
    const array = ["a", "b", "c"];
    const callback = (s) => [s, s];
    const result = _.flatMap(array, callback);
    expect(result).to.deep.equal(["a", "a", "b", "b", "c", "c"]);
  });

  it("should work with a callback that returns an empty array", () => {
    const array = [1, 2, 3];
    const callback = () => [];
    const result = _.flatMap(array, callback);
    expect(result).to.deep.equal([]);
  });
});

describe("flatten", () => {
  it("should flatten the array recursively when level is true", () => {
    const array = [1, [2, [3, [4]], 5]];
    const result = _.flatten(array, true);
    expect(result).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it("should flatten the array up to the specified depth", () => {
    const array = [1, [2, [3, [4]], 5]];
    const result = _.flatten(array, 2);
    expect(result).to.deep.equal([1, 2, 3, [4], 5]);
  });

  it("should return the original array if it is already flat", () => {
    const array = [1, 2, 3, 4, 5];
    const result = _.flatten(array, 2);
    expect(result).to.deep.equal(array);
  });

  it("should return an empty array if the input array is empty", () => {
    const array: number[] = [];
    const result = _.flatten(array);
    expect(result).to.deep.equal([]);
  });
});

describe("find", () => {
  it("should return the first element that satisfies the predicate", () => {
    const users = [
      { user: "barney", age: 36, active: true },
      { user: "fred", age: 40, active: false },
      { user: "pebbles", age: 1, active: true },
    ];
    const result = _.find(users, (o) => o.age < 40);
    expect(result).to.deep.equal({ user: "barney", age: 36, active: true });
  });

  it("should return undefined if no element satisfies the predicate", () => {
    const users = [
      { user: "barney", age: 36, active: true },
      { user: "fred", age: 40, active: false },
      { user: "pebbles", age: 1, active: true },
    ];
    const result = _.find(users, (o) => o.age > 50);
    expect(result).to.be.undefined;
  });

  it("should return undefined if the input array is empty", () => {
    const users: any[] = [];
    const result = _.find(users, (o) => o.age < 40);
    expect(result).to.be.undefined;
  });
});

describe("findIndex", () => {
  it("should return the index of the first element that satisfies the predicate", () => {
    const users = [
      { user: "barney", age: 36, active: true },
      { user: "fred", age: 40, active: false },
      { user: "pebbles", age: 1, active: true },
    ];
    const result = _.findIndex(users, (o) => o.age >= 40);
    expect(result).to.equal(1);
  });

  it("should return -1 if no element satisfies the predicate", () => {
    const users = [
      { user: "barney", age: 36, active: true },
      { user: "fred", age: 40, active: false },
      { user: "pebbles", age: 1, active: true },
    ];
    const result = _.findIndex(users, (o) => o.age > 50);
    expect(result).to.equal(-1);
  });

  it("should return -1 if the input array is empty", () => {
    const users: any[] = [];
    const result = _.findIndex(users, (o) => o.age < 40);
    expect(result).to.equal(-1);
  });
});

describe("chunk", () => {
  it("should split the array into chunks of specified size", () => {
    const input = ["a", "b", "c", "d", "e", "f", "g"];
    const result = _.chunk(input, 3);
    expect(result).to.deep.equal([["a", "b", "c"], ["d", "e", "f"], ["g"]]);
  });

  it("should return an empty array if chunk size is 0 or negative", () => {
    const input = ["a", "b", "c", "d", "e", "f", "g"];
    const result1 = _.chunk(input, 0);
    const result2 = _.chunk(input, -1);
    expect(result1).to.deep.equal([]);
    expect(result2).to.deep.equal([]);
  });

  it("should return an array of single-element arrays if chunk size is 1", () => {
    const input = ["a", "b", "c", "d", "e", "f", "g"];
    const result = _.chunk(input, 1);
    const expectedResult = input.map((item) => [item]);
    expect(result).to.deep.equal(expectedResult);
  });

  it("should return the original array if chunk size is greater than or equal to the array length", () => {
    const input = ["a", "b", "c", "d", "e", "f", "g"];
    const result1 = _.chunk(input, 10);
    const result2 = _.chunk(input, input.length);
    expect(result1).to.deep.equal([input]);
    expect(result2).to.deep.equal([input]);
  });

  it("should return an empty array if the input array is empty", () => {
    const input: string[] = [];
    const result = _.chunk(input, 3);
    expect(result).to.deep.equal([]);
  });
});

describe("groupBy", () => {
  it("should group elements based on the result of the iteratee function", () => {
    const collection = [6.1, 4.2, 6.3];
    const result = _.groupBy(collection, Math.floor);
    expect(result).to.deep.equal({ "4": [4.2], "6": [6.1, 6.3] });
  });

  it("should handle empty collection", () => {
    const collection: number[] = [];
    const result = _.groupBy(collection, Math.floor);
    expect(result).to.deep.equal({});
  });

  it("should group elements based on custom iteratee function", () => {
    const collection = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "John" },
    ];
    const result = _.groupBy(collection, (element) => element.name);
    expect(result).to.deep.equal({
      John: [
        { id: 1, name: "John" },
        { id: 3, name: "John" },
      ],
      Jane: [{ id: 2, name: "Jane" }],
    });
  });
});

describe("merge", () => {
  it("should merge two objects recursively", () => {
    const object = {
      a: [{ b: 2 }, { d: 4 }],
    };
    const other = {
      a: [{ c: 3 }, { e: 5 }],
    };
    const result = _.merge(object, other);
    expect(result).to.deep.equal({
      a: [
        { b: 2, c: 3 },
        { d: 4, e: 5 },
      ],
    });
  });

  it("should handle empty objects", () => {
    const object = {};
    const other = {};
    const result = _.merge(object, other);
    expect(result).to.deep.equal({});
  });

  it("should override properties from the target object", () => {
    const object = { a: 1, b: 2 };
    const other = { b: 3, c: 4 };
    const result = _.merge(object, other);
    expect(result).to.deep.equal({ a: 1, b: 3, c: 4 });
  });

  it("should merge arrays recursively", () => {
    const object = { a: [{ b: 2 }, { d: 4 }] };
    const other = { a: [{ c: 3 }, { e: 5 }] };
    const result = _.merge(object, other);
    expect(result).to.deep.equal({
      a: [
        { b: 2, c: 3 },
        { d: 4, e: 5 },
      ],
    });
  });

  it("should handle undefined and null values", () => {
    const object = { a: null };
    const other = { a: undefined };
    const result = _.merge(object, other);
    expect(result).to.deep.equal({ a: undefined });
  });
});
