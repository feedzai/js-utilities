/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useCallback, useState } from "react";
import { usePageVisibility } from "src/hooks";
import type { PageVisibilityCallback } from "src/hooks/use-page-visibility/types";

const DemoComponent = ({
  handlerCallback,
  delay,
}: {
  handlerCallback?: PageVisibilityCallback;
  delay?: number;
}) => {
  const [pageIsVisible, setPageIsVisible] = useState(true);

  const onChangeVisibility = useCallback(
    (isVisible: boolean) => {
      setPageIsVisible(isVisible);
    },
    [setPageIsVisible]
  );

  usePageVisibility(handlerCallback ?? onChangeVisibility, delay);

  return <p data-testid="js-paragraph">{`page is visible: ${pageIsVisible}`}</p>;
};

describe("render", () => {
  it("should display the page visibility", () => {
    cy.mount(<DemoComponent />);

    cy.findByTestId("js-paragraph").should("have.text", "page is visible: true");
  });

  it("should throw an error if the callback is not a function", () => {
    const EXPECTED_ERROR_MESSAGE =
      "helpers.usePageVisibility: Please use a callback function as the first parameter";

    // @ts-ignore wrong type on purpose
    cy.mount(<DemoComponent handlerCallback={true} />);

    // Cypress should pass the test if the error message includes the expected content.
    Cypress.on("uncaught:exception", (err, runnable) => {
      if (err.message.includes(EXPECTED_ERROR_MESSAGE)) {
        return false;
      }
    });
  });

  it("should throw an error if the delay is not a number", () => {
    const EXPECTED_ERROR_MESSAGE = "helpers.usePageVisibility: Delay must be a positive number";

    // @ts-ignore wrong type on purpose
    cy.mount(<DemoComponent delay={"-100"} />);

    // Cypress should pass the test if the error message includes the expected content.
    Cypress.on("uncaught:exception", (err, runnable) => {
      if (err.message.includes(EXPECTED_ERROR_MESSAGE)) {
        return false;
      }
    });
  });
});
