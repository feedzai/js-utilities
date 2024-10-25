/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import React from "react";
import { cloneValidElement } from "src/functions";

// Test components
interface TestComponentProps {
  title: string;
  count?: number;
  onClick?: () => void;
}

const TestComponent: React.FC<TestComponentProps> = ({ title, count, onClick }) => (
  <div data-testid="test-component" onClick={onClick}>
    <span data-testid="title">{title}</span>
    {count !== undefined && <span data-testid="count">{count}</span>}
  </div>
);

describe("cloneValidElement", () => {
  describe("Valid React Elements", () => {
    it("should clone basic HTML elements", () => {
      const original = <button type="button">Click me</button>;
      const ClonedComponent = cloneValidElement(original, { disabled: true });

      cy.mount(ClonedComponent as React.ReactElement);
      cy.get("button")
        .should("have.attr", "type", "button")
        .and("have.attr", "disabled", "disabled")
        .and("have.text", "Click me");
    });

    it("should clone custom components with typed props", () => {
      const original = <TestComponent title="Original" />;
      const ClonedComponent = cloneValidElement<TestComponentProps>(original, { count: 42 });

      cy.mount(ClonedComponent as React.ReactElement);
      cy.get('[data-testid="title"]').should("have.text", "Original");
      cy.get('[data-testid="count"]').should("have.text", "42");
    });

    it("should merge event handlers correctly", () => {
      const originalClick = cy.spy().as("originalClick");
      const newClick = cy.spy().as("newClick");

      const original = <TestComponent title="Test" onClick={originalClick} />;
      const ClonedComponent = cloneValidElement<TestComponentProps>(original, {
        onClick: newClick,
      });

      cy.mount(ClonedComponent as React.ReactElement);
      cy.get('[data-testid="test-component"]').click();
      cy.get("@originalClick").should("not.have.been.called");
      cy.get("@newClick").should("have.been.called");
    });

    context("Children Handling", () => {
      it("should work with simple text content", () => {
        const original = <div>Original Content</div>;
        const newChild = "New Content";
        const cloned = cloneValidElement(original, { children: newChild });

        cy.mount(cloned as React.ReactElement);
        cy.get("div").should("contain.text", "New Content");
      });

      // Let's make the children more explicit to debug the issue
      it("should handle children prop correctly", () => {
        const TestDiv = () => {
          const original = <div data-testid="test-div">Original</div>;
          const cloned = cloneValidElement(original, { children: "New" });
          return <>{cloned}</>;
        };

        cy.mount(<TestDiv />);
        cy.get('[data-testid="test-div"]').should("contain.text", "New");
      });

      // Test with multiple children
      it("should handle multiple children via props correctly", () => {
        const original = <div data-testid="test-div">Original</div>;
        const cloned = cloneValidElement(original, {
          children: ["First", " ", "Second"],
        });

        cy.mount(cloned as React.ReactElement);
        cy.get('[data-testid="test-div"]').should("contain.text", "First Second");
      });

      // Test appending with React children
      it("should handle React children correctly", () => {
        const original = <div data-testid="test-div">Original</div>;
        const cloned = cloneValidElement(original, null, <span key="new">New</span>);

        cy.mount(cloned as React.ReactElement);
        cy.get("span").should("contain.text", "New");
      });

      // Test replacing content entirely
      it("should replace content when using children prop", () => {
        const TestComponent = () => {
          const original = (
            <div data-testid="test-div">
              <span>Original</span>
            </div>
          );

          const cloned = cloneValidElement(original, {
            children: <span>Replaced</span>,
          });

          return <>{cloned}</>;
        };

        cy.mount(<TestComponent />);
        cy.get('[data-testid="test-div"] span').should("contain.text", "Replaced");
      });

      // Test with null children
      it("should handle null children", () => {
        const original = <div data-testid="test-div">Original</div>;
        const cloned = cloneValidElement(original, { children: null });

        cy.mount(cloned as React.ReactElement);
        cy.get('[data-testid="test-div"]').should("contain.text", "");
      });

      // Test maintaining other props while changing children
      it("should maintain other props while changing children", () => {
        const original = (
          <div data-testid="test-div" className="original">
            Original
          </div>
        );
        const cloned = cloneValidElement(original, {
          className: "modified",
          children: "New Content",
        });

        cy.mount(cloned as React.ReactElement);
        cy.get('[data-testid="test-div"]')
          .should("have.class", "modified")
          .and("contain.text", "New Content");
      });
    });
  });

  describe("Non-Element Nodes", () => {
    it("should return text nodes unchanged", () => {
      const textNode = "Just text";
      const result = cloneValidElement(textNode);
      expect(result).to.equal(textNode);
    });

    it("should return null unchanged", () => {
      const result = cloneValidElement(null);
      expect(result).to.be.null;
    });

    it("should return undefined unchanged", () => {
      const result = cloneValidElement(undefined);
      expect(result).to.be.undefined;
    });

    it("should return numbers unchanged", () => {
      const result = cloneValidElement(42);
      expect(result).to.equal(42);
    });
  });

  describe("Complex Scenarios", () => {
    it("should handle nested elements", () => {
      const original = (
        <div data-testid="parent">
          <TestComponent title="Child" />
        </div>
      );
      const cloned = cloneValidElement(original, { "data-new": "value" });

      cy.mount(cloned as React.ReactElement);
      cy.get('[data-testid="parent"]')
        .should("have.attr", "data-new", "value")
        .find('[data-testid="title"]')
        .should("have.text", "Child");
    });

    it("should preserve existing props while adding new ones", () => {
      const original = <TestComponent title="Original" count={10} />;
      const cloned = cloneValidElement<TestComponentProps>(original, { count: 20 });

      cy.mount(cloned as React.ReactElement);
      cy.get('[data-testid="title"]').should("have.text", "Original");
      cy.get('[data-testid="count"]').should("have.text", "20");
    });

    it("should handle fragments", () => {
      const original = (
        <React.Fragment>
          <TestComponent title="First" />
          <TestComponent title="Second" />
        </React.Fragment>
      );
      const cloned = cloneValidElement(original);

      cy.mount(cloned as React.ReactElement);
      cy.get('[data-testid="title"]').should("have.length", 2);
    });
  });

  describe("Type Safety", () => {
    it("should maintain prop types for custom components", () => {
      const original = <TestComponent title="Test" />;
      const cloned = cloneValidElement<TestComponentProps>(original, {
        title: "New Title",
        count: 42,
        // @ts-expect-error - This should error at compile time
        // invalidProp: "error"
      });

      cy.mount(cloned as React.ReactElement);
      cy.get('[data-testid="title"]').should("have.text", "New Title");
      cy.get('[data-testid="count"]').should("have.text", "42");
    });
  });
});
