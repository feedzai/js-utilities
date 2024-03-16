/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useCallback, useState } from "react";
import { useLiveRef } from "src/hooks";

function DemoComponent() {
  const [counter, setCounter] = useState(0);
  const refValue = useLiveRef(counter);

  const handleOnClick = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, [setCounter]);

  return (
    <div>
      <button onClick={handleOnClick}>Increase Counter</button>
      <p data-testid="target">{`${refValue.current} is the current number`}</p>
    </div>
  );
}

describe("useLiveRef", () => {
  it("should render the same value, even though an updated value is passed", () => {
    cy.mount(<DemoComponent />);

    cy.findByTestId("target").should("have.text", "0 is the current number");

    // Click on the button to update the internal state
    cy.findByRole("button").click();

    cy.findByTestId("target").should("have.text", "0 is the current number");
  });
});
