/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useEffectOnce } from "src/hooks";

interface DemoWithHookProps {
  effectCallback?: VoidFunction;
}

function DemoWithHook({ effectCallback }: DemoWithHookProps) {
  useEffectOnce(effectCallback as VoidFunction);

  return <div>useEffectOnce</div>;
}

describe("useEffectOnce", () => {
  it("should run provided effect only once", () => {
    cy.mount(<DemoWithHook effectCallback={cy.stub().as("mockEffectCallback")} />);

    cy.get("@mockEffectCallback").should("have.been.calledOnce");
  });

  it("should run clean-up provided on unmount", () => {
    const cleanupFunction = cy.stub();
    const mockEffectCallback = () => {
      return cleanupFunction();
    };

    cy.mount(<DemoWithHook effectCallback={mockEffectCallback} />).then(() => {
      cy.unmount();

      expect(cleanupFunction).to.have.been.calledOnce;
    });
  });
});
