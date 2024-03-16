/// <reference types="cypress" />
/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { getContainerEl } from "cypress/react";
import ReactDom from "react-dom";
import "@testing-library/cypress/add-commands";

Cypress.Commands.add("unmount", () =>
  cy.then(() => ReactDom.unmountComponentAtNode(getContainerEl()))
);
