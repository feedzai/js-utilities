/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { on, off } from "src/functions";

describe("on", () => {
  let divElement: HTMLDivElement;

  beforeEach(() => {
    divElement = document.createElement("div");
    document.body.appendChild(divElement);
  });

  afterEach(() => {
    document.body.removeChild(divElement);
  });

  it("should add event listener to the target element", () => {
    let eventTriggered = false;

    const callback = () => {
      eventTriggered = true;
    };

    on(divElement, "click", callback);
    divElement.click();

    expect(eventTriggered).to.be.true;
  });

  it("should remove event listener when options.once is true", () => {
    let eventCount = 0;

    const callback = () => {
      eventCount++;
    };

    on(divElement, "click", callback, { once: true });
    divElement.click();
    divElement.click();

    expect(eventCount).to.equal(1);
  });

  it("should not add event listener if target element is null", () => {
    const callback = () => {
      console.log("Event listener should not be triggered");
    };

    on(null, "click", callback);

    // No assertion since the event listener should not be added
  });
});

describe("off", () => {
  let divElement: HTMLDivElement;

  beforeEach(() => {
    divElement = document.createElement("div");
    document.body.appendChild(divElement);
  });

  afterEach(() => {
    document.body.removeChild(divElement);
  });

  it("should remove event listener from the target element", () => {
    let eventTriggered = false;

    const callback = () => {
      eventTriggered = true;
    };

    divElement.addEventListener("click", callback);
    divElement.click();
    expect(eventTriggered).to.be.true;

    off(divElement, "click", callback);
    eventTriggered = false;
    divElement.click();
    expect(eventTriggered).to.be.false;
  });

  it("should not remove event listener if target element is null", () => {
    const callback = () => {
      console.log("Event listener should not be removed");
    };

    off(null, "click", callback);

    // No assertion since the event listener should not be removed
  });
});
