/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { formatDate } from "../../../../src/functions";

const DEFAULT_LOCALES = { locales: "en-US" };

describe("formatDate", () => {
  it("should format date string correctly", () => {
    expect(formatDate({ date: "2024-01-15", ...DEFAULT_LOCALES })).to.equal(
      "January 15"
    );
    expect(formatDate({ date: "2024-12-31", ...DEFAULT_LOCALES })).to.equal(
      "December 31"
    );
  });

  it("should format Date object correctly", () => {
    const dateObject = new Date("2024-01-15");

    expect(formatDate({ date: dateObject, ...DEFAULT_LOCALES })).to.equal(
      "January 15"
    );
  });

  it("should format timestamp correctly", () => {
    const timestamp = new Date("2024-01-15").getTime();

    expect(formatDate({ date: timestamp, ...DEFAULT_LOCALES })).to.equal(
      "January 15"
    );
  });

  it("should handle different date string formats", () => {
    expect(formatDate({ date: "2024/01/15", ...DEFAULT_LOCALES })).to.equal(
      "January 15"
    );
    expect(formatDate({ date: "01-15-2024", ...DEFAULT_LOCALES })).to.equal(
      "January 15"
    );
    expect(formatDate({ date: "15 Jan 2024", ...DEFAULT_LOCALES })).to.equal(
      "January 15"
    );
  });

  it("should include year when specified", () => {
    const customOptions = { year: "numeric" } as const;

    expect(
      formatDate({
        date: "2024-01-15",
        options: customOptions,
        ...DEFAULT_LOCALES,
      })
    ).to.equal("January 15, 2024");
  });

  it("should show short month format", () => {
    const customOptions = { month: "short" } as const;

    expect(
      formatDate({
        date: "2024-01-15",
        options: customOptions,
        ...DEFAULT_LOCALES,
      })
    ).to.equal("Jan 15");
  });

  it("should include weekday", () => {
    const customOptions = { weekday: "long" } as const;

    expect(
      formatDate({
        date: "2024-01-15",
        options: customOptions,
        ...DEFAULT_LOCALES,
      })
    ).to.equal("Monday, January 15");
  });

  it("should respect all provided options while maintaining defaults", () => {
    const customOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    } as const;

    expect(
      formatDate({
        date: "2024-01-15",
        options: customOptions,
        ...DEFAULT_LOCALES,
      })
    ).to.equal("Monday, January 15, 2024");
  });

  it("should handle invalid dates", () => {
    expect(() => formatDate({ date: "invalid-date" })).throw();
    expect(() => formatDate({ date: "2024-13-45" })).throw();
  });

  it("should handle empty input", () => {
    expect(() => formatDate({ date: "" })).throw();
  });

  it("should handle null and undefined", () => {
    expect(() => formatDate({ date: null })).throw();
    expect(() => formatDate()).throw();
  });
});
