/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import React from "react";
import { usePageVisibility } from "src/hooks";

// Test component that uses the hook
interface TestComponentProps {
  onVisibilityChange: (isVisible: boolean) => void;
  delay?: number;
}

const TestComponent: React.FC<TestComponentProps> = ({ onVisibilityChange, delay }) => {
  usePageVisibility(onVisibilityChange, delay);

  return (
    <div data-testid="visibility-container">
      <span>Test Component</span>
    </div>
  );
};

describe("usePageVisibility Hook", () => {
  beforeEach(() => {
    // Mock visibility API
    cy.window().then((win) => {
      let isHidden = false;
      const visibilityListeners = new Set<EventListener>();

      // Mock hidden property
      Object.defineProperty(win.document, "hidden", {
        configurable: true,
        get: () => isHidden,
      });

      // Mock visibilityState
      Object.defineProperty(win.document, "visibilityState", {
        configurable: true,
        get: () => (isHidden ? "hidden" : "visible"),
      });

      // Mock addEventListener
      cy.stub(win.document, "addEventListener").callsFake((event, handler) => {
        if (event === "visibilitychange") {
          visibilityListeners.add(handler);
        }
      });

      // Mock removeEventListener
      cy.stub(win.document, "removeEventListener").callsFake((event, handler) => {
        if (event === "visibilitychange") {
          visibilityListeners.delete(handler);
        }
      });

      // Helper to trigger visibility change
      win.mockVisibilityChange = (hidden: boolean) => {
        isHidden = hidden;
        const event = new Event("visibilitychange");
        visibilityListeners.forEach((listener) => listener(event));
      };
    });
  });

  it("should call handler when visibility changes", () => {
    const onVisibilityChange = cy.spy().as("visibilityHandler");

    cy.mount(<TestComponent onVisibilityChange={onVisibilityChange} />);

    // Simulate tab becoming hidden
    cy.window().then((win) => {
      win.mockVisibilityChange(true);
    });

    cy.get("@visibilityHandler").should("have.been.calledWith", false);

    // Simulate tab becoming visible
    cy.window().then((win) => {
      win.mockVisibilityChange(false);
    });

    cy.get("@visibilityHandler").should("have.been.calledWith", true);
  });

  it("should handle delay correctly", () => {
    const onVisibilityChange = cy.spy().as("visibilityHandler");
    const delay = 1000;

    cy.mount(<TestComponent onVisibilityChange={onVisibilityChange} delay={delay} />);

    // Simulate tab becoming hidden
    cy.window().then((win) => {
      win.mockVisibilityChange(true);
    });

    // Handler should not be called immediately
    cy.get("@visibilityHandler").should("not.have.been.called");

    // Handler should be called after delay
    cy.wait(delay);
    cy.get("@visibilityHandler").should("have.been.calledWith", false);
  });

  it("should cleanup timeout on unmount", () => {
    const onVisibilityChange = cy.spy().as("visibilityHandler");
    const delay = 1000;

    // Create wrapper component to control mounting
    const TestWrapper = () => {
      const [mounted, setMounted] = React.useState(true);

      return (
        <div>
          {mounted && <TestComponent onVisibilityChange={onVisibilityChange} delay={delay} />}
          <button data-testid="unmount" onClick={() => setMounted(false)}>
            Unmount
          </button>
        </div>
      );
    };

    cy.mount(<TestWrapper />);

    // Trigger visibility change
    cy.window().then((win) => {
      win.mockVisibilityChange(true);
    });

    // Unmount before delay completes
    cy.get('[data-testid="unmount"]').click();

    // Wait for original delay
    cy.wait(delay);

    // Handler should not have been called
    cy.get("@visibilityHandler").should("not.have.been.called");
  });

  it("should handle rapid visibility changes with delay", () => {
    const onVisibilityChange = cy.spy().as("visibilityHandler");
    const delay = 500;

    cy.mount(<TestComponent onVisibilityChange={onVisibilityChange} delay={delay} />);

    // Simulate rapid visibility changes
    cy.window().then((win) => {
      win.mockVisibilityChange(true); // hidden
      win.mockVisibilityChange(false); // visible
      win.mockVisibilityChange(true); // hidden
    });

    // Only the last change should trigger the handler
    cy.wait(delay);
    cy.get("@visibilityHandler").should("have.been.calledOnce");
    cy.get("@visibilityHandler").should("have.been.calledWith", false);
  });

  it("should handle multiple instances correctly", () => {
    const handler1 = cy.spy().as("handler1");
    const handler2 = cy.spy().as("handler2");

    const MultipleInstances = () => (
      <>
        <TestComponent onVisibilityChange={handler1} />
        <TestComponent onVisibilityChange={handler2} />
      </>
    );

    cy.mount(<MultipleInstances />);

    // Trigger visibility change
    cy.window().then((win) => {
      win.mockVisibilityChange(true);
    });

    // Both handlers should be called
    cy.get("@handler1").should("have.been.calledWith", false);
    cy.get("@handler2").should("have.been.calledWith", false);
  });

  it("should throw error for invalid handler callback", () => {
    const EXPECTED_ERROR_MESSAGE =
      "helpers.usePageVisibility: Please use a callback function as the first parameter";

    // @ts-expect-error - Testing invalid handler type
    cy.mount(<TestComponent onVisibilityChange="not a function" />);

    // Cypress should pass the test if the error message includes the expected content.
    Cypress.on("uncaught:exception", (err, runnable) => {
      if (err.message.includes(EXPECTED_ERROR_MESSAGE)) {
        return false;
      }
    });
  });

  it("should throw error for invalid delay value", () => {
    const EXPECTED_ERROR_MESSAGE = "helpers.usePageVisibility: Delay must be a positive number";
    const onVisibilityChange = cy.spy().as("visibilityHandler");

    cy.mount(<TestComponent onVisibilityChange={onVisibilityChange} delay={-1} />);

    // Cypress should pass the test if the error message includes the expected content.
    Cypress.on("uncaught:exception", (err, runnable) => {
      if (err.message.includes(EXPECTED_ERROR_MESSAGE)) {
        return false;
      }
    });
  });
});
