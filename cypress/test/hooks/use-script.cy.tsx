/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useEffect, useState } from "react";
import { useScript } from "src/hooks";

const DEMO_VERSION = "3.7.1";
const DEMO_URL = `https://code.jquery.com/jquery-${DEMO_VERSION}.min.js`;

function DemoComponent({
  src,
  removeOnUnmount = false,
}: {
  src: string;
  removeOnUnmount?: boolean;
}): JSX.Element {
  const [load, error] = useScript(src, removeOnUnmount);
  const [version, setVersion] = useState("no version");

  useEffect(() => {
    if (typeof jQuery !== "undefined") {
      const jqueryVersion = jQuery.fn.jquery;

      setVersion(jqueryVersion);
    }
  }, [load]);

  return (
    <div>
      <p data-testid="script-url">{src}</p>
      <p data-testid="script-load">{`Has loaded? ${load}`}</p>
      <p data-testid="script-error">{`Has error? ${error}`}</p>
      <p data-testid="script-jquery-version">{version}</p>
    </div>
  );
}

describe("useScript", () => {
  afterEach(() => {
    cy.document().then(($document) => {
      $document.querySelector("[data-testid='js-external-script']")?.remove();
    });
  });

  it("should load the external script", () => {
    cy.mount(<DemoComponent src={DEMO_URL} />);

    cy.get("body")
      .findByTestId("js-external-script")
      .should("exist")
      .and("have.attr", "src", DEMO_URL);

    cy.findByTestId("script-url").should("have.text", DEMO_URL);
    cy.findByTestId("script-load").should("have.text", "Has loaded? true");
    cy.findByTestId("script-error").should("have.text", "Has error? false");
    cy.findByTestId("script-jquery-version").should("have.text", DEMO_VERSION);
  });

  it("should handle errors when loading", () => {
    const FAKE_URL = "https://code.jquery.com/jquery-fake-version";

    cy.mount(<DemoComponent src={FAKE_URL} />);

    cy.findByTestId("script-url").should("have.text", FAKE_URL);
    cy.findByTestId("script-load").should("have.text", "Has loaded? false");
    cy.findByTestId("script-error").should("have.text", "Has error? true");
  });

  it("should remove itself from the DOM on unmount", () => {
    cy.mount(<DemoComponent src={DEMO_URL} removeOnUnmount />);

    cy.get("body")
      .findByTestId("js-external-script")
      .should("exist")
      .then(() => {
        cy.unmount();

        cy.get("body").findByTestId("js-external-script").should("not.exist");
      });
  });
});
