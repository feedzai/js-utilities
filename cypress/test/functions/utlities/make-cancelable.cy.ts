/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { AbortPromiseError, makeCancelable, wait } from "src/functions";

async function expectAbort(cancelable: ReturnType<typeof makeCancelable>) {
  try {
    await cancelable.promise;
    throw new Error("Promise should have been rejected");
  } catch (error) {
    expect(error).to.be.instanceOf(AbortPromiseError);
    if (error instanceof AbortPromiseError) {
      expect(error.message).to.equal("Promise was aborted");
    }
  }
}

describe("makeCancelable", () => {
  // Configure Cypress to not fail on unhandled promise rejections
  before(() => {
    cy.on("uncaught:exception", (err) => {
      if (err.name === "AbortError") {
        return false;
      }
    });
  });

  it("should reject with AbortPromiseError if cancelled just before resolution", async () => {
    const promise = wait(10);
    const cancelable = makeCancelable(promise);

    setTimeout(() => cancelable.cancel(), 5);

    await expectAbort(cancelable);
  });

  it("should return an object with a promise, cancel function, and isCancelled function", () => {
    const promise = wait(25);
    const cancelable = makeCancelable(promise);
    expect(cancelable).to.be.an("object");
    expect(cancelable.promise).to.be.a("promise");
    expect(cancelable.cancel).to.be.a("function");
    expect(cancelable.isCancelled).to.be.a("function");
  });

  it("should resolve the promise if not cancelled", async () => {
    const value = "test value";
    const promise = new Promise((resolve) => setTimeout(() => resolve(value), 25));
    const cancelable = makeCancelable(promise);
    const result = await cancelable.promise;
    expect(result).to.equal(value);
  });

  it("should reject with AbortPromiseError when cancelled", async () => {
    const promise = wait(25);
    const cancelable = makeCancelable(promise);
    cancelable.cancel();

    try {
      await cancelable.promise;
      throw new Error("Promise should have been rejected");
    } catch (error: unknown) {
      expect(error).to.be.instanceOf(AbortPromiseError);
      if (error instanceof AbortPromiseError) {
        expect(error.message).to.equal("Promise was aborted");
      }
    }
  });

  it("should handle rejection from the original promise", async () => {
    const error = new Error("Original promise error");
    const promise = new Promise((_, reject) => setTimeout(() => reject(error), 25));
    const cancelable = makeCancelable(promise);

    try {
      await cancelable.promise;
      throw new Error("Promise should have been rejected");
    } catch (caughtError: unknown) {
      expect(caughtError).to.equal(error);
    }
  });

  it("should not reject with original error if cancelled", async () => {
    const error = new Error("Original promise error");
    const promise = new Promise((_, reject) => setTimeout(() => reject(error), 25));
    const cancelable = makeCancelable(promise);
    cancelable.cancel();

    try {
      await cancelable.promise;
      throw new Error("Promise should have been rejected");
    } catch (caughtError: unknown) {
      expect(caughtError).to.be.instanceOf(AbortPromiseError);
      if (caughtError instanceof AbortPromiseError) {
        expect(caughtError.message).to.equal("Promise was aborted");
      }
    }
  });

  it("should handle multiple cancel calls", async () => {
    const promise = wait(25);
    const cancelable = makeCancelable(promise);

    cancelable.cancel();
    cancelable.cancel(); // Second call should be ignored

    try {
      await cancelable.promise;
      throw new Error("Promise should have been rejected");
    } catch (error: unknown) {
      expect(error).to.be.instanceOf(AbortPromiseError);
    }
  });

  it("should correctly report cancellation state", async () => {
    const promise = wait(25);
    const cancelable = makeCancelable(promise);

    expect(cancelable.isCancelled()).to.be.false;
    cancelable.cancel();
    expect(cancelable.isCancelled()).to.be.true;
  });

  it("should handle abort error message", async () => {
    const promise = wait(25);
    const cancelable = makeCancelable(promise);
    cancelable.cancel();

    try {
      await cancelable.promise;
      throw new Error("Promise should have been rejected");
    } catch (error: unknown) {
      expect(error).to.be.instanceOf(AbortPromiseError);
      if (error instanceof AbortPromiseError) {
        expect(error.message).to.equal("Promise was aborted");
      }
    }
  });
});
