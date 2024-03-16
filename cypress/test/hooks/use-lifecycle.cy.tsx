/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { emptyFunction, useLifecycle } from "src/index";

interface DemoWithHookProps {
  onMount: VoidFunction;
  onUnmount?: VoidFunction;
}

function DemoWithHook({ onMount, onUnmount }: DemoWithHookProps) {
  useLifecycle(onMount, onUnmount);

  return <div>useEffectOnce</div>;
}

describe("useEffectOnce", () => {
  it("should run provided effect on mount", () => {
    cy.mount(<DemoWithHook onMount={cy.stub().as("onMount")} />);

    cy.get("@onMount").should("have.been.calledOnce");
  });

  it("should run clean-up provided on unmount", () => {
    cy.mount(<DemoWithHook onMount={emptyFunction} onUnmount={cy.stub().as("onUnmount")} />).then(
      () => {
        cy.findByText("useEffectOnce").should("exist");

        cy.unmount();
        cy.get("@onUnmount").should("have.been.called");
      }
    );
  });
});
