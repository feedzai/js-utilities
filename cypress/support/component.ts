/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import "@cypress/code-coverage/support";
import "./commands.js";
import "./hacks.js";
import { mount } from "cypress/react";

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;

      /**
       * Unmounts a React component from the DOM
       * @param options
       * @example
       * cy.mount(<Button>A Button</Button>).then(() => {
       *  cy.unmount();
       * });
       */
      unmount(): void;
    }
  }
}

Cypress.Commands.add("mount", mount);
