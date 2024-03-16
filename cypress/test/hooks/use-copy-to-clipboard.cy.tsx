/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useState } from "react";
import { useCopyToClipboard } from "src/hooks";

function Demo({ injectedValue }: { injectedValue?: string }) {
  const [text, setText] = useState("");
  const { value, error, copyToClipboard } = useCopyToClipboard();

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button type="button" onClick={() => copyToClipboard(injectedValue ?? text)}>
        copy text
      </button>
      {error ? <p>Unable to copy value: {error.message}</p> : value && <p>Copied {value}</p>}
    </div>
  );
}

it("should copy the contents to the clipboard", () => {
  cy.mount(<Demo />);

  cy.get("input").type("jtmdias");
  cy.get("button").click();

  cy.get("p").should("contain", "Copied jtmdias");
});

it("should copy the contents to the clipboard without the user input", () => {
  cy.mount(<Demo injectedValue="something" />);

  cy.get("button").click();

  cy.get("p").should("contain", "Copied something");
});
