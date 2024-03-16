/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useCallback, useState } from "react";
import { useConstant } from "src/hooks";
import { classNames } from "src/functions";

function DemoComponent({ className }: { className?: string }) {
  const [counter, setCounter] = useState(0);
  const cssClass = useConstant(() => classNames("css-custom-class", `${className}-${counter}`));

  const handleOnClick = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, [setCounter]);

  return (
    <div className={cssClass} data-testid="target">
      <button onClick={handleOnClick}>Increase Counter</button>
      <p>{`${counter} is the current number`}</p>
    </div>
  );
}

describe("useConstant", () => {
  it("should render the same value despite updates on the component", () => {
    cy.mount(<DemoComponent />);

    // Initial state should be:
    // - no class as prop
    // - counter at 0
    cy.findByTestId("target")
      .should("have.class", "css-custom-class")
      .and("have.class", "undefined-0");
    cy.findByText("0 is the current number").should("be.visible");

    // Click on the button to update the internal state
    cy.findByRole("button").click();

    // The class should remain the same, but the text should change
    cy.findByTestId("target")
      .should("have.class", "css-custom-class")
      .and("have.class", "undefined-0");
    cy.findByText("1 is the current number").should("be.visible");
  });

  it("should render the same value despite updates on the component API", () => {
    cy.mount(<DemoComponent className="first-class" />).then((currentSubject) => {
      // Initial state should be:
      // - class as prop
      // - counter as 0
      cy.findByTestId("target")
        .should("have.class", "css-custom-class")
        .and("have.class", "first-class-0");

      currentSubject.rerender(<DemoComponent className="second-class" />);

      // After a re-render caused by a prop change the component should keep the previous value stored
      cy.findByTestId("target")
        .should("have.class", "css-custom-class")
        .and("have.class", "first-class-0");
    });
  });
});
