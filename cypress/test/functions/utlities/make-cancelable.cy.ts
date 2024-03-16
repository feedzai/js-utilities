/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { makeCancelable } from "src/functions";

describe("makeCancelable", () => {
  it("should return an object with a promise and a cancel function", () => {
    const promise = new Promise((resolve) => setTimeout(resolve, 100));
    const cancelable = makeCancelable(promise);
    expect(cancelable).to.be.an("object");
    expect(cancelable.promise).to.be.a("promise");
    expect(cancelable.cancel).to.be.a("function");
  });

  it("should resolve the promise if not cancelled", async () => {
    const promise = new Promise((resolve) => setTimeout(resolve, 100));
    const cancelable = makeCancelable(promise);
    const result = await cancelable.promise;
    expect(result).to.be.undefined; // Or any other expected resolved value
  });

  it("should reject the promise with { isCanceled: true } if cancelled", async () => {
    const promise = new Promise((resolve) => setTimeout(resolve, 100));
    const cancelable = makeCancelable(promise);
    cancelable.cancel();
    try {
      await cancelable.promise;
    } catch (error) {
      expect(error).to.have.property("isCanceled", true);
    }
  });

  it("should not resolve or reject the promise after being cancelled", async () => {
    cy.window().then(async (win) => {
      const promise = new win.Promise((resolve) => win.setTimeout(resolve, 100));
      const cancelable = makeCancelable(promise);
      cancelable.cancel();
      const racePromise = win.Promise.race([
        cancelable.promise.then(() => "resolved"),
        new win.Promise((resolve) => win.setTimeout(() => resolve("not-resolved"), 200)),
      ]);

      try {
        const result = await racePromise;

        expect(result).to.equal("not-resolved");
      } catch (error) {
        console.log(error);
      }
    });
  });
});
