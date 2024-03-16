/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { getBrowserTimeZone } from "../../../../src/functions";

describe("getBrowserTimeZone", () => {
  it("should return the current user's timezone", () => {
    const CUSTOM_TIMEZONE = Intl.DateTimeFormat().resolvedOptions().timeZone;

    expect(getBrowserTimeZone()).to.equal(CUSTOM_TIMEZONE);
  });
});
