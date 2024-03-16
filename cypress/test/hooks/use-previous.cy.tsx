/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { usePrevious } from "src/hooks";
import { useState } from "react";

describe("usePrevious", () => {
  it("should return undefined as previous value for initial state", () => {
    const TestComponent1 = () => {
      const [value] = useState(0);
      const previousValue = usePrevious(value);

      return <div>{typeof previousValue}</div>;
    };
    cy.mount(<TestComponent1 />);
    cy.contains("undefined");
  });

  it("should return previous value", () => {
    const TestComponent = () => {
      const [value, setValue] = useState(0);
      const previousValue = usePrevious(value);
      return (
        <div>
          <span>{previousValue}</span>
          <button onClick={() => setValue((prev) => prev + 1)}>Increment</button>
        </div>
      );
    };

    cy.mount(<TestComponent />);

    cy.get("button").click();
    cy.contains("0");

    cy.get("button").click();
    cy.contains("1");
  });
});
