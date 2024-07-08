/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2024 Feedzai, Rights Reserved.
 */
import React from "react";
import { useAutoId } from "src/hooks";

function DemoComponent({ value = null, prefix }: { value?: string | null; prefix?: string }) {
  const firstId = useAutoId(value, prefix);
  const secondId = useAutoId();
  return (
    <div>
      <p id={firstId}>A paragraph</p>
      <span id={secondId}>An inline span element</span>
    </div>
  );
}

function FallbackDemo({
  value = "feedzai-fallback-id",
  prefix,
}: {
  value?: string | null;
  prefix?: string;
}) {
  const id = useAutoId(value, prefix);
  return <h1 id={id}>Feedzai</h1>;
}

describe("useAutoId", () => {
  context("React pre-useId", () => {
    beforeEach(() => {
      // Mock React.useId to be undefined
      cy.stub(React, "useId").as("useIdStub").value(undefined);
    });

    it("should generate a unique ID value", () => {
      cy.mount(<DemoComponent />);

      cy.findByText("A paragraph")
        .invoke("attr", "id")
        .then((idOne) => {
          cy.findByText("An inline span element").invoke("attr", "id").should("not.equal", idOne);
        });
    });

    it("should generate a prefixed unique ID value", () => {
      const expected = "feedzai-a-prefix";
      cy.mount(<DemoComponent value={undefined} prefix={expected} />);

      cy.findByText("A paragraph").invoke("attr", "id").should("contain", expected);
    });

    it("uses a fallback ID", () => {
      cy.mount(<FallbackDemo />);

      cy.findByText("Feedzai").should("have.id", "feedzai-fallback-id");
    });

    it("should return a prefixed fallback ID", () => {
      cy.mount(<FallbackDemo prefix="js-prefix" value="423696e5" />);

      cy.findByText("Feedzai").should("have.id", "js-prefix--423696e5");
    });
  });

  context("React 18+ with useId", () => {
    const GENERATED_ID = ":r0:";

    beforeEach(() => {
      // Mock React.useId to return a predictable value
      cy.stub(React, "useId").as("useIdStub").returns(GENERATED_ID);
    });

    it("should use React.useId for generating IDs", () => {
      cy.mount(<DemoComponent />);

      cy.findByText("A paragraph").invoke("attr", "id").should("equal", GENERATED_ID);
      cy.findByText("An inline span element").invoke("attr", "id").should("equal", GENERATED_ID);
      cy.get("@useIdStub").should("be.calledTwice");
    });

    it("should generate a prefixed unique ID value using React.useId", () => {
      const expected = "feedzai-a-prefix";
      cy.mount(<DemoComponent value={undefined} prefix={expected} />);

      cy.findByText("A paragraph")
        .invoke("attr", "id")
        .should("equal", `${expected}--${GENERATED_ID}`);
      cy.get("@useIdStub").should("be.called");
    });

    it("uses a fallback ID even when React.useId is available", () => {
      cy.mount(<FallbackDemo />);

      cy.findByText("Feedzai").should("have.id", "feedzai-fallback-id");
      cy.get("@useIdStub").should("not.be.called");
    });

    it("should return a prefixed fallback ID and not use React.useId", () => {
      cy.mount(<FallbackDemo prefix="js-prefix" value="423696e5" />);

      cy.findByText("Feedzai").should("have.id", "js-prefix--423696e5");
      cy.get("@useIdStub").should("not.be.called");
    });
  });
});
