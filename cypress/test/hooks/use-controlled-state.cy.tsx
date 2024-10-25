/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import React from "react";
import { useControlledState } from "src/hooks";

// Test Components
const UncontrolledCounter = () => {
  const [count, setCount] = useControlledState(0);

  return (
    <div>
      <span data-testid="count">{count}</span>
      <button onClick={() => setCount((prev) => prev + 1)} data-testid="increment">
        Increment
      </button>
      <button onClick={() => setCount(10)} data-testid="set-direct">
        Set to 10
      </button>
    </div>
  );
};

interface ControlledCounterProps {
  value: number;
  onChange: (newValue: number) => void;
}

const ControlledCounter = ({ value, onChange }: ControlledCounterProps) => {
  const [count, setCount] = useControlledState(0, value, onChange);

  return (
    <div>
      <span data-testid="count">{count}</span>
      <button onClick={() => setCount((prev) => prev + 1)} data-testid="increment">
        Increment
      </button>
    </div>
  );
};

const LazyCounter = () => {
  const [count, setCount] = useControlledState(() => 5);

  return (
    <div>
      <span data-testid="count">{count}</span>
      <button onClick={() => setCount((prev) => prev + 1)} data-testid="increment">
        Increment
      </button>
    </div>
  );
};

describe("useControlledState", () => {
  describe("Uncontrolled Mode", () => {
    it("should initialize with default value", () => {
      cy.mount(<UncontrolledCounter />);
      cy.get('[data-testid="count"]').should("have.text", "0");
    });

    it("should update state with updater function", () => {
      cy.mount(<UncontrolledCounter />);
      cy.get('[data-testid="increment"]').click();
      cy.get('[data-testid="count"]').should("have.text", "1");
    });

    it("should update state with direct value", () => {
      cy.mount(<UncontrolledCounter />);
      cy.get('[data-testid="set-direct"]').click();
      cy.get('[data-testid="count"]').should("have.text", "10");
    });

    it("should handle multiple updates", () => {
      cy.mount(<UncontrolledCounter />);
      cy.get('[data-testid="increment"]').click().click().click();
      cy.get('[data-testid="count"]').should("have.text", "3");
    });
  });

  describe("Controlled Mode", () => {
    it("should use controlled value", () => {
      const onChangeSpy = cy.spy().as("onChange");
      cy.mount(<ControlledCounter value={5} onChange={onChangeSpy} />);
      cy.get('[data-testid="count"]').should("have.text", "5");
    });

    it("should call onChange with new value", () => {
      const onChangeSpy = cy.spy().as("onChange");
      cy.mount(<ControlledCounter value={5} onChange={onChangeSpy} />);
      cy.get('[data-testid="increment"]').click();
      cy.get("@onChange").should("have.been.calledWith", 6);
    });

    it("should maintain controlled value even after updates", () => {
      const onChangeSpy = cy.spy().as("onChange");
      cy.mount(<ControlledCounter value={5} onChange={onChangeSpy} />);
      cy.get('[data-testid="increment"]').click();
      cy.get('[data-testid="count"]').should("have.text", "5"); // Still shows controlled value
    });
  });

  describe("Lazy Initialization", () => {
    it("should initialize with lazy value", () => {
      cy.mount(<LazyCounter />);
      cy.get('[data-testid="count"]').should("have.text", "5");
    });

    it("should update normally after lazy initialization", () => {
      cy.mount(<LazyCounter />);
      cy.get('[data-testid="increment"]').click();
      cy.get('[data-testid="count"]').should("have.text", "6");
    });
  });

  describe("Edge Cases", () => {
    it("should handle switching between controlled and uncontrolled", () => {
      const TestComponent = () => {
        const [isControlled, setIsControlled] = React.useState(true);
        const [controlledValue, setControlledValue] = React.useState(0);

        return (
          <div>
            <button onClick={() => setIsControlled(!isControlled)} data-testid="toggle-control">
              Toggle Control
            </button>
            {isControlled ? (
              <ControlledCounter value={controlledValue} onChange={setControlledValue} />
            ) : (
              <UncontrolledCounter />
            )}
          </div>
        );
      };

      cy.mount(<TestComponent />);
      cy.get('[data-testid="count"]').should("have.text", "0");
      cy.get('[data-testid="toggle-control"]').click();
      cy.get('[data-testid="count"]').should("have.text", "0");
    });
  });
});
