/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import React, { useCallback, useRef, forwardRef } from "react";
import { useMergeRefs } from "src/hooks";

const ButtonWithRef = forwardRef(
  (props: React.HTMLAttributes<HTMLButtonElement>, ref: React.Ref<HTMLButtonElement>) => {
    const innerRef = useRef<HTMLButtonElement>(null);
    const refs = useMergeRefs(innerRef, ref);

    return (
      <button ref={refs} type="button" {...props}>
        Button With Ref
      </button>
    );
  }
);

const DemoWithRef = () => {
  const outerRef = useRef<HTMLButtonElement>(null);

  const handleOnClick = useCallback(() => {
    const element = outerRef.current;

    if (element) {
      element.style.backgroundColor = "rgb(255, 239, 213)";
    }
  }, []);

  return <ButtonWithRef ref={outerRef} onClick={handleOnClick} />;
};

describe("useMergeRefs", () => {
  it("merges two refs", () => {
    cy.mount(<DemoWithRef />);

    cy.findByRole("button")
      .click()
      .then(($element) => {
        cy.wrap($element).should("have.css", "background-color", "rgb(255, 239, 213)");
      });
  });
});
