/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import React, { useRef, forwardRef } from "react";
import { useEnsuredForwardedRef, useMount } from "src/hooks";

// Test component that uses the hook
const TestButton = forwardRef<HTMLButtonElement>((props, ref) => {
  const ensuredRef = useEnsuredForwardedRef(ref);

  return (
    <button ref={ensuredRef} {...props}>
      Test Button
    </button>
  );
});

// Component that manipulates the ref internally
const TestButtonWithEffect = forwardRef<HTMLButtonElement>((props, ref) => {
  const ensuredRef = useEnsuredForwardedRef(ref);

  useMount(() => {
    if (ensuredRef.current) {
      ensuredRef.current.dataset.initialized = "true";
    }
  });

  return (
    <button ref={ensuredRef} {...props}>
      Test Button
    </button>
  );
});

describe("useEnsuredForwardedRef", () => {
  it("should create a valid ref when parent provides no ref", () => {
    cy.mount(<TestButton />);

    cy.get("button").should("exist").should("have.text", "Test Button");
  });

  it("should sync with parent ref when provided", () => {
    const ParentComponent = () => {
      const buttonRef = useRef<HTMLButtonElement>(null);

      return (
        <div>
          <TestButton ref={buttonRef} />
          <button
            onClick={() => {
              // Check if ref is properly synced
              if (buttonRef.current) {
                buttonRef.current.textContent = "Updated via ref";
              }
            }}
            data-testid="update-button"
          >
            Update Text
          </button>
        </div>
      );
    };

    cy.mount(<ParentComponent />);

    cy.get('[data-testid="update-button"]').click();
    cy.get("button").first().should("have.text", "Updated via ref");
  });

  it("should maintain ref through re-renders", () => {
    const ParentComponent = () => {
      const [count, setCount] = React.useState(0);
      const buttonRef = useRef<HTMLButtonElement>(null);

      return (
        <div>
          <TestButton ref={buttonRef} />
          <button onClick={() => setCount((c) => c + 1)} data-testid="trigger-rerender">
            Rerender ({count})
          </button>
        </div>
      );
    };

    cy.mount(<ParentComponent />);

    // Force multiple re-renders
    cy.get('[data-testid="trigger-rerender"]').click().click().click();
    cy.get("button").first().should("exist");
  });

  it("should allow internal ref manipulation", () => {
    cy.mount(<TestButtonWithEffect />);

    cy.get("button").should("have.attr", "data-initialized", "true");
  });

  it("should sync internal changes with parent ref", () => {
    const ParentComponent = () => {
      const buttonRef = useRef<HTMLButtonElement>(null);

      return (
        <div>
          <TestButtonWithEffect ref={buttonRef} />
          <button
            onClick={() => {
              // Parent should see the data-initialized attribute
              const isInitialized = buttonRef.current?.dataset.initialized === "true";
              buttonRef.current?.setAttribute("data-parent-check", isInitialized.toString());
            }}
            data-testid="check-sync"
          >
            Check Sync
          </button>
        </div>
      );
    };

    cy.mount(<ParentComponent />);

    cy.get('[data-testid="check-sync"]').click();
    cy.get("button").first().should("have.attr", "data-parent-check", "true");
  });

  it("should handle null refs gracefully", () => {
    // Explicitly passing null ref
    const ParentComponent = () => {
      return <TestButton ref={null} />;
    };

    cy.mount(<ParentComponent />);

    cy.get("button").should("exist").should("have.text", "Test Button");
  });

  it("should maintain proper ref identity", () => {
    const ParentComponent = () => {
      const [, setCount] = React.useState(0);
      const buttonRef = useRef<HTMLButtonElement>(null);
      const refValueChecks: boolean[] = [];

      React.useEffect(() => {
        // Check if ref.current maintains the same element
        refValueChecks.push(buttonRef.current instanceof HTMLButtonElement);
        // @ts-ignore - Adding custom property for test
        window.refChecks = refValueChecks;
      });

      return (
        <div>
          <TestButton ref={buttonRef} />
          <button onClick={() => setCount((c) => c + 1)} data-testid="trigger-rerender">
            Rerender
          </button>
        </div>
      );
    };

    cy.mount(<ParentComponent />);

    // Force re-renders and check ref stability
    cy.get('[data-testid="trigger-rerender"]').click().click();

    //@ts-ignore - Checking custom property
    cy.window().its("refChecks").should("not.include", false);
  });
});
