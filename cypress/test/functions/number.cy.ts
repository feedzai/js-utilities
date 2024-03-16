/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import * as _ from "src/functions/number";

describe("toInt", () => {
  it("should convert string number to integer", () => {
    expect(_.toInt("42")).to.equal(42);
  });

  it("should handle default value", () => {
    expect(_.toInt(undefined, 10)).to.equal(10);
    expect(_.toInt(null, 10)).to.equal(10);
    expect(_.toInt("not a number", 10)).to.equal(10);
  });

  it("should handle null and undefined values", () => {
    expect(_.toInt(null)).to.equal(0);
    expect(_.toInt(undefined)).to.equal(0);
  });

  it("should return the number if it is already an integer", () => {
    expect(_.toInt(42)).to.equal(42);
  });

  it("should return the number if it is already an integer-like string", () => {
    expect(_.toInt("42")).to.equal(42);
  });

  it("should return the default value if the input is not a number", () => {
    expect(_.toInt("not a number", 10)).to.equal(10);
  });
});

describe("round", () => {
  it("should round to the nearest integer if precision is not specified", () => {
    expect(_.round(4.006)).to.equal(4);
    expect(_.round(4.2)).to.equal(4);
    expect(_.round(4.8)).to.equal(5);
  });

  it("should round to the specified precision", () => {
    expect(_.round(4.006, 2)).to.equal(4.01);
    expect(_.round(4.2, 1)).to.equal(4.2);
    expect(_.round(4060, -2)).to.equal(4100);
  });

  it("should handle negative precision", () => {
    expect(_.round(123456, -3)).to.equal(123000);
  });
});

describe("formatNumber", () => {
  it("should format the number and put the K suffix", () => {
    expect(_.formatNumber(1200, 1)).to.equal("1.2K");
    expect(_.formatNumber(12000, 1)).to.equal("12K");
    expect(_.formatNumber(120000, 1)).to.equal("120K");
    expect(_.formatNumber(1700, 1)).to.equal("1.7K");
  });

  it("should format the number and put the million suffix", () => {
    expect(_.formatNumber(1200000, 1)).to.equal("1.2M");
    expect(_.formatNumber(12000000, 1)).to.equal("12M");
    expect(_.formatNumber(12000000, 1)).to.equal("12M");
    expect(_.formatNumber(17000000, 1)).to.equal("17M");
  });

  it("should format the number and put the billion suffix", () => {
    expect(_.formatNumber(1200000000, 1)).to.equal("1.2B");
    expect(_.formatNumber(1700000000, 1)).to.equal("1.7B");
  });

  it("should be possible to define the max number of numbers after the decimal point", () => {
    expect(_.formatNumber(1235442, 1)).to.equal("1.2M");
    expect(_.formatNumber(1235442, 3)).to.equal("1.235M");
    expect(_.formatNumber(1700, 0)).to.equal("2K");
    expect(_.formatNumber(1710, 1)).to.equal("1.7K");
    expect(_.formatNumber(1710, 2)).to.equal("1.71K");
    expect(_.formatNumber(3820000, 1)).to.equal("3.8M");
  });

  it("should not have decimal numbers if the number before the suffix is higher than 100", () => {
    expect(_.formatNumber(174000, 1)).to.equal("174K");
    expect(_.formatNumber(174000, 2)).to.equal("174K");
    expect(_.formatNumber(388000, 1)).to.equal("388K");
    expect(_.formatNumber(388200000, 1)).to.equal("388M");
  });

  it("should not have decimal numbers if the number is lower than 1000", () => {
    expect(_.formatNumber(990.567, 2)).to.equal(991);
    expect(_.formatNumber(990, 1)).to.equal(990);
  });

  it("should throw an error if we are not passing a valid number to be formatted", () => {
    // @ts-expect-error testing error being thrown
    expect(() => _.formatNumber("123")).to.throw(
      "formatNumber: A valid number must be provided in order to format it"
    );
  });
});

describe("formatNumber", () => {
  it("should shorten the number and add the K suffix", () => {
    expect(_.shortenNumber(1200)).to.deep.equal([1, "K"]);
    expect(_.shortenNumber(12000)).to.deep.equal([12, "K"]);
    expect(_.shortenNumber(120000)).to.deep.equal([120, "K"]);
    expect(_.shortenNumber(1700)).to.deep.equal([2, "K"]);
  });

  it("should shorten the number and add the million suffix", () => {
    expect(_.shortenNumber(1200000)).to.deep.equal([1, "M"]);
    expect(_.shortenNumber(12000000)).to.deep.equal([12, "M"]);
    expect(_.shortenNumber(12000000)).to.deep.equal([12, "M"]);
    expect(_.shortenNumber(17000000)).to.deep.equal([17, "M"]);
  });

  it("should shorten the number and add the billion suffix", () => {
    expect(_.shortenNumber(1200000000)).to.deep.equal([1, "B"]);
    expect(_.shortenNumber(1700000000)).to.deep.equal([2, "B"]);
  });

  it("should not round number if 'isToRoundNumber' flag is false", () => {
    expect(_.shortenNumber(1200, false)).to.deep.equal([1.2, "K"]);
    expect(_.shortenNumber(1700000000, false)).to.deep.equal([1.7, "B"]);
    expect(_.shortenNumber(1700, false)).to.deep.equal([1.7, "K"]);
  });

  it("should return the given number inside an array if it's lower than 1000", () => {
    expect(_.shortenNumber(900)).to.deep.equal([900]);
  });

  it("should throw an error if we are not passing a valid number to be shorten", () => {
    expect(() => {
      // @ts-expect-error testing error being thrown
      return _.shortenNumber("123");
    }).to.throw("shortenNumber: A valid number must be provided in order to shorten it");
  });
});
