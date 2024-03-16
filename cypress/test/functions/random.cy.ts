/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import * as _ from "src/functions/random";

describe("random", () => {
  it("should return a random integer between 0 and 5", () => {
    const result = _.random(0, 5);
    expect(Number.isInteger(result)).to.be.true;
    expect(result).to.be.greaterThan(-1);
    expect(result).to.lessThan(6);
  });

  it("should return a random integer between 0 and 5 when only one argument is provided", () => {
    const result = _.random(5);
    expect(Number.isInteger(result)).to.be.true;
    expect(result).to.be.greaterThan(-1);
    expect(result).to.lessThan(6);
  });

  it("should return a random floating-point number between 0 and 5", () => {
    const result = _.random(5, true);
    expect(result).to.be.greaterThan(-1);
    expect(result).to.lessThan(6);
  });

  it("should return a random floating-point number between 1.2 and 5.2", () => {
    const result = _.random(1.2, 5.2, true);
    expect(result).to.greaterThan(1.1);
    expect(result).to.lessThan(5.3);
  });

  it("should return 0 or 1 if no arguments are provided", () => {
    const result = _.random();
    expect([0, 1].includes(result)).to.be.true;
  });

  it("should return -1 or 0 if only one negative argument is provided", () => {
    const result = _.random(-1);
    expect([-1, 0].includes(result)).to.be.true;
  });

  it("should handle lower bound greater than upper bound", () => {
    const result = _.random(5, 1);
    expect(result).to.greaterThan(0);
    expect(result).to.lessThan(6);
  });

  it("should return a floating-point number when floating is true", () => {
    const result = _.random(0, 5, true);
    expect(Number.isInteger(result)).to.be.false;
  });

  it("should return an integer when floating is false", () => {
    const result = _.random(0, 5, false);
    expect(Number.isInteger(result)).to.be.true;
  });
});

describe("draw", () => {
  const characters = [
    "Homer Simpson",
    "Marge Simpson",
    "Bart Simpson",
    "Lisa Simpson",
    "Maggie Simpson",
    "Ned Flanders",
    "Mr. Burns",
    "Principal Skinner",
    "Moe Szyslak",
    "Apu Nahasapeemapetilon",
    "Krusty the Clown",
    "Barney Gumble",
    "Chief Wiggum",
    "Milhouse Van Houten",
    "Ralph Wiggum",
    "Nelson Muntz",
    "Sideshow Bob",
    "Patty Bouvier",
    "Selma Bouvier",
    "Comic Book Guy",
  ];

  it("returns a string from the list", () => {
    const letters = "abcde";
    const result = _.draw(letters.split(""));
    assert.include(letters, result!);
  });

  it("should return null if the list is empty", () => {
    expect(_.draw([])).to.be.null;
  });

  it("should return a random character from the list", () => {
    const drawnCharacter = _.draw(characters);
    expect(characters).to.include(drawnCharacter);
  });

  it("should return null if the list is null", () => {
    //@ts-expect-error testing null values
    expect(_.draw(null)).to.be.null;
  });

  it("should return null if the list is undefined", () => {
    //@ts-expect-error testing undefined values
    expect(_.draw(undefined)).to.be.null;
  });

  it("should return null if the list is not an array", () => {
    //@ts-expect-error testing string values
    expect(_.draw("not an array")).to.be.null;

    //@ts-expect-error testing numeric values
    expect(_.draw(123456)).to.be.null;

    //@ts-expect-error testing function values
    expect(_.draw(() => [])).to.be.null;

    //@ts-expect-error testing Set values
    expect(_.draw(new Set())).to.be.null;

    //@ts-expect-error testing Map values
    expect(_.draw(new Map())).to.be.null;
  });
});
