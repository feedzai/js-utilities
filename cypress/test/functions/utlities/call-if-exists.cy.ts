/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { callIfExists } from "src/functions";

describe("callIfExist", () => {
  it("should not throw an exception when no callback is passed", () => {
    expect(callIfExists.bind(this, undefined)).not.throw();
  });

  it("should call the function passed", () => {
    const func = cy.stub();

    callIfExists(func);

    expect(func).to.have.been.called;
  });
});
