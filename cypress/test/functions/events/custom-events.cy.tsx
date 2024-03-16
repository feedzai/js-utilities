/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { EventHandler, emitCustomEvent, useCustomEventListener } from "src/functions";

interface ELCProps<GenericType> {
  eventName: string;
  eventHandler: EventHandler<GenericType>;
}

interface EEProps<GenericType> {
  eventHandler: EventHandler<GenericType>;
}

function EventListenerComponent<T>({ eventName, eventHandler }: ELCProps<T>) {
  useCustomEventListener(eventName, eventHandler);
  return null;
}

function EventEmitter<T>({ eventHandler }: EEProps<T>) {
  return (
    <div>
      <EventListenerComponent eventName="testEvent" eventHandler={eventHandler} />
      <button id="emitButton" onClick={() => emitCustomEvent("testEvent", "testData")}>
        Emit Event
      </button>
    </div>
  );
}

describe("useCustomEventListener", () => {
  it("listens to custom events and calls event handler", () => {
    // Define event handler spy
    const eventHandler = cy.stub().as("eventHandler");

    // Mount component with custom event listener
    cy.mount(<EventEmitter eventHandler={eventHandler} />);

    // Click button to emit custom event
    cy.get("#emitButton").click();

    // Check if event handler was called with expected data
    cy.get("@eventHandler").should("be.calledWith", "testData");
  });
});
