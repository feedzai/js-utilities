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

  it("should return an object with a promise, cancel function, isCancelled function, and signal", () => {
    const promise = wait(25);
    const cancelable = makeCancelable(promise);
    expect(cancelable).to.be.an("object");
    expect(cancelable.promise).to.be.a("promise");
    expect(cancelable.cancel).to.be.a("function");
    expect(cancelable.isCancelled).to.be.a("function");
    expect(cancelable.signal).to.be.an("AbortSignal");
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

  describe("signal property", () => {
    it("should be an AbortSignal instance", () => {
      const promise = wait(25);
      const cancelable = makeCancelable(promise);
      expect(cancelable.signal).to.be.instanceOf(AbortSignal);
    });

    it("should reflect cancellation state", () => {
      const promise = wait(25);
      const cancelable = makeCancelable(promise);
      expect(cancelable.signal.aborted).to.be.false;
      cancelable.cancel();
      expect(cancelable.signal.aborted).to.be.true;
    });

    it("should be usable with fetch", async () => {
      const promise = wait(25);
      const cancelable = makeCancelable(promise);

      // Simulate a fetch request that would use the signal
      const fetchPromise = new Promise((resolve, reject) => {
        cancelable.signal.addEventListener("abort", () => {
          reject(new AbortPromiseError());
        });
        setTimeout(resolve, 50);
      });

      cancelable.cancel();
      try {
        await fetchPromise;
        throw new Error("Promise should have been rejected");
      } catch (error: unknown) {
        expect(error).to.be.instanceOf(AbortPromiseError);
      }
    });

    it("should be usable with multiple promises", async () => {
      const promise1 = wait(25);
      const cancelable1 = makeCancelable(promise1);

      // Simulate multiple operations using the same signal
      const operation1 = new Promise((resolve, reject) => {
        cancelable1.signal.addEventListener("abort", () => reject(new AbortPromiseError()));
        setTimeout(resolve, 50);
      });

      const operation2 = new Promise((resolve, reject) => {
        cancelable1.signal.addEventListener("abort", () => reject(new AbortPromiseError()));
        setTimeout(resolve, 50);
      });

      cancelable1.cancel();

      try {
        await operation1;
        throw new Error("Promise should have been rejected");
      } catch (error: unknown) {
        expect(error).to.be.instanceOf(AbortPromiseError);
      }

      try {
        await operation2;
        throw new Error("Promise should have been rejected");
      } catch (error: unknown) {
        expect(error).to.be.instanceOf(AbortPromiseError);
      }
    });

    it("should handle custom abort reason", async () => {
      const promise = wait(25);
      const cancelable = makeCancelable(promise);
      const reason = "Custom abort reason";

      cancelable.cancel(reason);

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
});
