/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useEffect, useState } from "react";
import { useMountedState, wait } from "src/index";

interface DemoWithHookProps {
  onMountedStateChange?: (state: boolean) => void;
}

function DemoWithHook({ onMountedStateChange }: DemoWithHookProps) {
  const isMounted = useMountedState();
  const [mountedState, setMountedState] = useState(false);

  useEffect(() => {
    async function announceMounted() {
      wait(500);

      if (isMounted()) {
        setMountedState(true);
        onMountedStateChange?.(true);
      }
    }

    announceMounted();

    return () => {
      onMountedStateChange?.(false);
    };
  });

  return <p data-is-mounted={mountedState}>useMountedState</p>;
}

it("should call provided callback on mount", () => {
  cy.mount(<DemoWithHook onMountedStateChange={cy.stub().as("onMountedStateChange")} />);

  cy.get("p").should("have.attr", "data-is-mounted", "true");
  cy.get("@onMountedStateChange").should("have.been.calledWith", true);
});

it("should call provided callback on unmount", () => {
  cy.mount(<DemoWithHook onMountedStateChange={cy.stub().as("onMountedStateChange")} />).then(
    () => {
      cy.get("p").should("have.attr", "data-is-mounted", "true");

      cy.unmount();

      cy.get("@onMountedStateChange").should("have.been.calledWith", false);
    }
  );
});
