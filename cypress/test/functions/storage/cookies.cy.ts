/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { deleteCookie, getCookie, setCookie } from "src/functions";

describe("Cookie Utilities", () => {
  beforeEach(() => {
    // Clear all cookies before each test
    cy.clearCookies();
  });

  describe("setCookie", () => {
    it("should set a basic cookie with default path", () => {
      // Using cy.wrap to handle the synchronous setCookie in async context
      cy.wrap(null).then(() => {
        setCookie("testCookie", "value123", 1);
      });

      // Verify the cookie was set
      cy.getCookie("testCookie")
        .should("exist")
        .should((cookie) => {
          expect(cookie.value).to.equal("value123");
          expect(cookie.path).to.equal("/");
        });
    });

    it("should set a cookie with custom path", () => {
      cy.wrap(null).then(() => {
        setCookie("testCookie", "value123", 1, "/custom");
      });

      cy.getCookie("testCookie")
        .should("exist")
        .should((cookie) => {
          expect(cookie.value).to.equal("value123");
          expect(cookie.path).to.equal("/custom");
        });
    });

    it("should set a cookie with special characters", () => {
      const specialValue = "Hello! @#$%^&*()_+";
      cy.wrap(null).then(() => {
        setCookie("testCookie", specialValue, 1);
      });

      cy.getCookie("testCookie")
        .should("exist")
        .should((cookie) => {
          expect(decodeURIComponent(cookie.value)).to.equal(specialValue);
        });
    });

    it("should handle empty values", () => {
      cy.wrap(null).then(() => {
        setCookie("testCookie", "", 1);
      });

      cy.getCookie("testCookie")
        .should("exist")
        .should((cookie) => {
          expect(cookie.value).to.equal("");
        });
    });

    it("should set multiple cookies independently", () => {
      cy.wrap(null).then(() => {
        setCookie("firstCookie", "value1", 1);
        setCookie("secondCookie", "value2", 1);
      });

      cy.getCookie("firstCookie")
        .should("exist")
        .should((cookie) => {
          expect(cookie.value).to.equal("value1");
        });

      cy.getCookie("secondCookie")
        .should("exist")
        .should((cookie) => {
          expect(cookie.value).to.equal("value2");
        });
    });
  });

  describe("getCookie", () => {
    beforeEach(() => {
      cy.wrap(null).then(() => {
        setCookie("existingCookie", "testValue", 1);
        setCookie("emptyCookie", " ", 1);
        setCookie("specialCookie", "Hello! @#$%^&*()_+", 1);
      });
    });

    it("should retrieve existing cookie value", () => {
      cy.wrap(null).then(() => {
        const value = getCookie("existingCookie");
        expect(value).to.equal("testValue");
      });
    });

    it("should return null for non-existent cookie", () => {
      cy.wrap(null).then(() => {
        const value = getCookie("nonExistentCookie");
        expect(value).to.be.null;
      });
    });

    it("should retrieve empty cookie value", () => {
      cy.wrap(null).then(() => {
        const value = getCookie("emptyCookie");
        expect(value).to.equal(" ");
      });
    });

    it("should retrieve cookie with special characters", () => {
      cy.wrap(null).then(() => {
        const value = getCookie("specialCookie");
        expect(value).to.equal("Hello! @#$%^&*()_+");
      });
    });
  });

  describe("deleteCookie", () => {
    beforeEach(() => {
      cy.wrap(null).then(() => {
        setCookie("testCookie", "value123", 1);
      });
    });

    it("should delete an existing cookie", () => {
      cy.getCookie("testCookie").should("exist");

      cy.wrap(null).then(() => {
        deleteCookie("testCookie");
      });

      cy.getCookie("testCookie").should("not.exist");
    });

    it("should handle deleting non-existent cookie", () => {
      cy.wrap(null).then(() => {
        deleteCookie("nonExistentCookie");
      });
      cy.getCookie("nonExistentCookie").should("not.exist");
    });
  });
});
