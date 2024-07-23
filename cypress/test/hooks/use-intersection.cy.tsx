/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import React, { createRef, useCallback } from "react";
import { toggleDataAttribute } from "src/functions";
import { useIntersection } from "src/hooks";

describe("useIntersection", () => {
  beforeEach(() => {
    cy.viewport(1000, 1000);
  });

  it("should be defined", () => {
    expect(useIntersection).to.be.a("function");
  });

  it("should setup an IntersectionObserver targeting the ref element and using the options provided", () => {
    const TestComponent = () => {
      const targetRef = createRef<HTMLButtonElement>();
      const observerOptions = { root: null, threshold: 0.8 };
      const intersection = useIntersection(targetRef, observerOptions);

      const isVisible = !!(intersection && intersection.isIntersecting);

      return (
        <button
          ref={targetRef}
          data-testid="target"
          data-intersecting={toggleDataAttribute(isVisible)}
        >
          Target Element
        </button>
      );
    };

    cy.mount(<TestComponent />);
    cy.findByTestId("target")
      .should("exist")
      .and("be.visible")
      .and("have.attr", "data-intersecting");
  });

  it("should return null if a ref without a current value is provided", () => {
    const TestComponent = () => {
      const targetRef = createRef<HTMLElement>();
      const intersection = useIntersection(targetRef, { root: null, threshold: 1 });

      return (
        <div>
          <div>{JSON.stringify(intersection)}</div>
        </div>
      );
    };

    cy.mount(<TestComponent />);
    cy.contains("null").should("exist");
  });

  it("should reset an intersectionObserverEntry when the ref changes", () => {
    const TestComponent = () => {
      const [key, setKey] = React.useState("805e7392-002c-4172-9afe-4f7f3eb1f94d");
      const targetRef = createRef<HTMLDivElement>();
      const intersection = useIntersection(targetRef, { root: null, threshold: 0.8 });
      const isVisible = !!(intersection && intersection.isIntersecting);

      const handleOnClick = useCallback(() => {
        setKey("0709c8d7-63e8-46a7-b0b4-8fbd6debeac9");
      }, [setKey]);

      return (
        <div>
          <div key={key} ref={targetRef} data-testid="target">
            Target Element
          </div>
          <button onClick={handleOnClick}>Change Ref</button>
          <div data-testid="intersection" data-intersecting={toggleDataAttribute(isVisible)}>
            {String(isVisible)}
          </div>
        </div>
      );
    };

    cy.mount(<TestComponent />);

    cy.findByTestId("intersection").should("have.attr", "data-intersecting");
    cy.findByRole("button").click();
    cy.findByTestId("intersection").should("not.have.attr", "data-intersecting");
  });

  it("should return the first IntersectionObserverEntry when the IntersectionObserver registers an intersection", () => {
    const TestComponent = () => {
      const targetRef = createRef<HTMLButtonElement>();
      const intersection = useIntersection(targetRef, { root: null, threshold: 0.8 });
      const isVisible = !!(intersection && intersection.isIntersecting);

      return (
        <div style={{ height: "200vh" }}>
          <button style={{ marginTop: "100vh" }} ref={targetRef} data-testid="target">
            Target Element
          </button>
          <div data-testid="intersection" data-intersecting={toggleDataAttribute(isVisible)} />
        </div>
      );
    };

    cy.mount(<TestComponent />);

    cy.findByTestId("intersection").should("not.have.attr", "data-intersecting");
    cy.findByTestId("target").scrollIntoView();
    cy.findByTestId("intersection").should("have.attr", "data-intersecting");
  });
});
