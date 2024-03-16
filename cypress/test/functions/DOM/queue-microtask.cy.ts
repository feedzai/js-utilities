/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { queueMicrotask } from "src/functions";

describe("queueMicrotask", () => {
  it("should execute the callback at the end of the current event loop", () => {
    cy.window().then((win) => {
      let callbackExecuted = false;
      const callback = () => {
        callbackExecuted = true;
      };
      queueMicrotask(callback);
      cy.wrap(null).should(() => {
        expect(callbackExecuted).to.be.true;
      });
    });
  });

  it("should execute the callback asynchronously", () => {
    cy.window().then((win) => {
      let callbackExecuted = false;
      const callback = () => {
        callbackExecuted = true;
      };
      queueMicrotask(callback);
      expect(callbackExecuted).to.be.false;
    });
  });
});
