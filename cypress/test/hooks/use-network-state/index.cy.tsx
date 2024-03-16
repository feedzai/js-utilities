/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useNetworkState } from "src/hooks";
import { NETWORK_STATE_KEYS, NETWORK_STATE_TUPLE } from "./constants";
import "./styles.scss";

function goOffline() {
  cy.log("**go offline**")
    .then(() => {
      return Cypress.automation("remote:debugger:protocol", {
        command: "Network.enable",
      });
    })
    .then(() => {
      Cypress.automation("remote:debugger:protocol", {
        command: "Network.emulateNetworkConditions",
        params: {
          offline: true,
          latency: -1,
          downloadThroughput: -1,
          uploadThroughput: -1,
        },
      });

      cy.wrap(window).its("navigator.onLine").should("be.false");
    });
}

const goOnline = () => {
  // disable offline mode, otherwise we will break our tests :)
  cy.log("**go online**").then(() => {
    // https://chromedevtools.github.io/devtools-protocol/1-3/Network/#method-emulateNetworkConditions
    return Cypress.automation("remote:debugger:protocol", {
      command: "Network.emulateNetworkConditions",
      params: {
        offline: false,
        latency: -1,
        downloadThroughput: -1,
        uploadThroughput: -1,
      },
    });
  });
};

const DemoComponent = () => {
  const networkState = useNetworkState();

  function renderEntries() {
    const list = Object.keys(networkState).map((stateEntry) => {
      const key = `${stateEntry}`;
      const label = `${stateEntry}: ${networkState[stateEntry as keyof typeof networkState]}`;

      return (
        <p key={key} className="network-state__entry" data-testid={stateEntry}>
          {label}
        </p>
      );
    });
    return <div className="network-state">{list}</div>;
  }

  return renderEntries();
};

describe("render", () => {
  it("it should render the current network state", () => {
    cy.mount(<DemoComponent />);

    NETWORK_STATE_TUPLE.forEach((state) => {
      cy.findByTestId(state).should("be.visible").and("contain.text", state);
    });
  });

  it("it should render an offline network state", (done) => {
    cy.mount(<DemoComponent />);

    goOffline();

    cy.findByTestId(NETWORK_STATE_KEYS.online)
      .should("be.visible")
      .and("have.text", "online: false");

    goOnline();
    done();
  });
});
