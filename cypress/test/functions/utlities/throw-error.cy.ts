/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { throwError } from "src/functions";

describe("throwError", () => {
  it("should thrown an Error", () => {
    expect(() => throwError("js-utilities", "throwError", "This throws errors.")).throw(
      "js-utilities.throwError: This throws errors."
    );
  });
});
