/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { wait } from "../../../../src/functions";

describe("wait function", () => {
  it("should resolve immediately without a time argument", async () => {
    const startTime = Date.now();
    await wait();
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    expect(elapsedTime).to.be.lessThan(10); // within 10 milliseconds
  });

  it("should resolve after the specified amount of time", async () => {
    const delay = 200;
    const startTime = Date.now();
    await wait(delay);
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    expect(elapsedTime).to.be.greaterThan(delay - 1);
  });
});
