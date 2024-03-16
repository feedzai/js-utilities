/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useRef, useState } from "react";
import { callIfExists } from "src/functions";
import { useClickOutside } from "src/hooks";

const DemoComponent = ({
  onOutside,
  isActive = true,
}: {
  onOutside?: VoidFunction;
  isActive?: boolean;
}) => {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [clickedOutside, setClickedOutside] = useState(false);

  useClickOutside(
    componentRef,
    () => {
      callIfExists(onOutside);
      setClickedOutside(true);
    },
    isActive
  );

  return (
    <div>
      <button data-testid="trigger-before">Outside button 1</button>
      <div ref={componentRef} data-testid="container" data-outside-click={clickedOutside}>
        <p data-testid="paragraph">Lorem Ipsum Dolor Sit Amet</p>
      </div>
      <button data-testid="trigger-after">Outside button 2</button>
    </div>
  );
};

describe("useClickOutside", () => {
  it("should be defined", () => {
    expect(useClickOutside).not.to.be.undefined;
  });

  it("should invoke callback if event target is not a child of target", () => {
    const onOutside = cy.stub().as("onOutside");
    cy.mount(<DemoComponent onOutside={onOutside} />);

    // A click on the inside should no trigger anything
    cy.findByTestId("paragraph").click();
    cy.get("@onOutside").should("not.have.been.called");
    cy.findByTestId("container").should("have.attr", "data-outside-click", "false");

    // A click on any of the outside triggers should invoke the callback prop
    cy.findByTestId("trigger-before").click();
    cy.get("@onOutside").should("have.been.called");
    cy.findByTestId("container").should("have.attr", "data-outside-click", "true");

    cy.findByTestId("trigger-after").click();
    cy.get("@onOutside").should("have.been.called");
    cy.findByTestId("container").should("have.attr", "data-outside-click", "true");
  });

  it("should not invoke callback if clicked outside, but set as false", () => {
    const onOutside = cy.stub().as("onOutside");
    cy.mount(<DemoComponent onOutside={onOutside} isActive={false} />);

    // A click on the inside should no trigger anything
    cy.findByTestId("paragraph").click();
    cy.get("@onOutside").should("not.have.been.called");
    cy.findByTestId("container").should("have.attr", "data-outside-click", "false");

    // A click on any of the outside triggers should not invoke the callback prop,
    // because we are blocking its execution.
    cy.findByTestId("trigger-before").click();
    cy.get("@onOutside").should("not.have.been.called");
    cy.findByTestId("container").should("have.attr", "data-outside-click", "false");

    cy.findByTestId("trigger-after").click();
    cy.get("@onOutside").should("not.have.been.called");
    cy.findByTestId("container").should("have.attr", "data-outside-click", "false");
  });
});
