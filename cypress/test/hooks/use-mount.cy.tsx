/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useMount } from "src/hooks";

interface DemoWithHookProps {
  onMount: VoidFunction;
}

function DemoWithHook({ onMount }: DemoWithHookProps) {
  useMount(() => onMount?.());

  return <div>useMount</div>;
}

it("should call provided callback on mount", () => {
  cy.mount(<DemoWithHook onMount={cy.stub().as("onMount")} />);

  cy.get("@onMount").should("have.been.calledOnce");
});

it("should not call provided callback on unmount", () => {
  cy.mount(<DemoWithHook onMount={cy.stub().as("onMount")} />).then(() => {
    cy.unmount();

    cy.get("@onMount").should("have.been.calledOnce");
  });
});

it("should not call provided callback on rerender", () => {
  cy.mount(<DemoWithHook onMount={cy.stub().as("onMount")} />).then(({ rerender }) => {
    cy.get("@onMount").should("have.been.calledOnce");

    rerender(<DemoWithHook onMount={cy.stub().as("onMountRerender")} />);

    cy.get("@onMountRerender").should("not.have.been.called");
  });
});
