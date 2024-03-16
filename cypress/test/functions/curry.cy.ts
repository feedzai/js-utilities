/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import * as _ from "src/functions/curry";

describe("debounce", () => {
  beforeEach(() => {
    cy.clock();
  });

  it("should delay function execution", () => {
    const func = cy.stub();
    const debouncedFunc = _.debounce({ delay: 100 }, func);

    debouncedFunc();
    expect(func).not.to.be.called;

    cy.tick(50).then(() => {
      debouncedFunc();
      expect(func).not.to.be.called;

      cy.tick(100).then(() => {
        expect(func).to.be.called;
      });
    });
  });

  it("should cancel debounced function", () => {
    const func = cy.stub();
    const debouncedFunc = _.debounce({ delay: 100 }, func);

    debouncedFunc();
    expect(func).not.to.be.called;

    debouncedFunc.cancel();
    cy.tick(100).then(() => {
      expect(func).not.to.be.called;
    });
  });

  it("should flush debounced function immediately", () => {
    const func = cy.stub();
    const debouncedFunc = _.debounce({ delay: 100 }, func);

    debouncedFunc();
    expect(func).not.to.be.called;

    debouncedFunc.flush();
    expect(func).to.be.called;
  });
});

describe("throttle function", () => {
  beforeEach(() => {
    cy.clock();
  });

  it("should throttle function execution", () => {
    const func = cy.stub();
    const throttledFunc = _.throttle({ interval: 100 }, func);

    throttledFunc();
    expect(func).to.be.called;

    throttledFunc();
    expect(func).to.be.called;

    cy.tick(50).then(() => {
      throttledFunc();
      expect(func).to.be.calledOnce;

      cy.tick(100).then(() => {
        throttledFunc();
        expect(func).to.be.calledTwice;
      });
    });
  });

  it("should return correct throttled status", () => {
    const func = cy.stub();
    const throttledFunc = _.throttle({ interval: 100 }, func);

    expect(throttledFunc.isThrottled()).to.be.false;
    throttledFunc();
    expect(throttledFunc.isThrottled()).to.be.true;

    cy.tick(100).then(() => {
      expect(throttledFunc.isThrottled()).to.be.false;
    });
  });
});

describe("memo function", () => {
  beforeEach(() => {
    cy.clock();
  });

  it("should memoize function", () => {
    const func = cy.spy((x: number) => x * 2);
    const memoizedFunc = _.memo(func);

    expect(memoizedFunc(2)).to.equal(4);
    expect(func).to.be.calledOnce;

    expect(memoizedFunc(2)).to.equal(4);
    expect(func).to.be.calledOnce;

    expect(memoizedFunc(3)).to.equal(6);
    expect(func).to.be.calledTwice;

    expect(memoizedFunc(3)).to.equal(6);
    expect(func).to.be.calledTwice;
  });

  it("should support custom key function", () => {
    const func = cy.spy((x: number) => x * 2);
    const keyFunc = cy.spy((x: number) => x.toString());
    const memoizedFunc = _.memo(func, { key: keyFunc });

    expect(memoizedFunc(2)).to.equal(4);
    expect(func).to.be.calledOnce;
    expect(keyFunc).to.be.calledOnce;

    expect(memoizedFunc(2)).to.equal(4);
    expect(func).to.be.calledOnce;
    expect(keyFunc).to.be.calledTwice; // key function should be called again

    expect(memoizedFunc(3)).to.equal(6);
    expect(func).to.be.calledTwice;
    expect(keyFunc).to.be.calledThrice;
  });

  it("should support TTL (time-to-live)", () => {
    const func = cy.spy((x: number) => x * 2);
    const memoizedFunc = _.memo(func, { ttl: 90 });

    expect(memoizedFunc(2)).to.equal(4);
    expect(func).to.be.calledOnce;

    cy.tick(90).then(() => {
      expect(memoizedFunc(2)).to.equal(4); // Cache should expire after 90ms
      expect(func).to.be.calledTwice;
    });
  });
});
