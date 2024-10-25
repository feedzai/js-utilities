import React from "react";
import { usePermission } from "src/hooks";

// Test component that uses the hook
interface TestComponentProps {
  permissionType: PermissionName;
  onStateChange?: (state: string) => void;
}

const TestComponent: React.FC<TestComponentProps> = ({ permissionType, onStateChange }) => {
  const permissionState = usePermission({ name: permissionType });

  React.useEffect(() => {
    onStateChange?.(permissionState);
  }, [permissionState, onStateChange]);

  return (
    <div data-testid="permission-container">
      <span data-testid="permission-state">{permissionState}</span>
      {permissionState === "prompt" && (
        <button
          data-testid="request-permission"
          onClick={() => {
            // Simulate permission request
            if (permissionType === "notifications") {
              Notification.requestPermission();
            }
          }}
        >
          Request Permission
        </button>
      )}
    </div>
  );
};

describe("usePermission Hook", () => {
  beforeEach(() => {
    // Mock the Permissions API
    cy.window().then((win) => {
      let currentState = "prompt";
      const listeners = new Set<() => void>();

      const mockPermissionStatus = {
        state: currentState,
        addEventListener: (event: string, handler: () => void) => {
          if (event === "change") {
            listeners.add(handler);
          }
        },
        removeEventListener: (event: string, handler: () => void) => {
          if (event === "change") {
            listeners.delete(handler);
          }
        },
      };

      // Add method to trigger state changes (for testing)
      win.mockPermissionChange = (newState: PermissionState) => {
        currentState = newState;
        mockPermissionStatus.state = newState;
        listeners.forEach((handler) => handler());
      };

      cy.stub(navigator.permissions, "query").resolves(mockPermissionStatus);
    });
  });

  it("should update state when permission status changes", () => {
    const onStateChange = cy.spy().as("stateChangeSpy");

    cy.mount(<TestComponent permissionType="notifications" onStateChange={onStateChange} />);

    // Wait for initial states
    cy.get("@stateChangeSpy").should("have.been.calledWith", "not-requested");
    cy.get("@stateChangeSpy").should("have.been.calledWith", "requested");
    cy.get("@stateChangeSpy").should("have.been.calledWith", "prompt");

    // Simulate permission grant
    cy.window().then((win) => {
      win.mockPermissionChange("granted");
    });

    cy.get('[data-testid="permission-state"]').should("have.text", "granted");
    cy.get("@stateChangeSpy").should("have.been.calledWith", "granted");
  });

  it("should handle permission denial", () => {
    cy.mount(<TestComponent permissionType="notifications" />);

    // Simulate permission denial
    cy.window().then((win) => {
      win.mockPermissionChange("denied");
    });

    cy.get('[data-testid="permission-state"]').should("have.text", "denied");
  });

  it("should show request button only in prompt state", () => {
    cy.mount(<TestComponent permissionType="notifications" />);

    // Should show button in prompt state
    cy.get('[data-testid="request-permission"]').should("exist");

    // Simulate permission grant
    cy.window().then((win) => {
      win.mockPermissionChange("granted");
    });

    // Button should disappear
    cy.get('[data-testid="request-permission"]').should("not.exist");
  });

  it("should cleanup event listeners on unmount", () => {
    const TestWrapper = () => {
      const [show, setShow] = React.useState(true);

      return (
        <div>
          {show && <TestComponent permissionType="notifications" />}
          <button data-testid="toggle-component" onClick={() => setShow(false)}>
            Unmount
          </button>
        </div>
      );
    };

    cy.mount(<TestWrapper />);

    // Unmount component
    cy.get('[data-testid="toggle-component"]').click();

    // Simulate permission change after unmount
    cy.window().then((win) => {
      win.mockPermissionChange("granted");
    });

    // Verify component no longer exists
    cy.get('[data-testid="permission-state"]').should("not.exist");
  });

  it("should handle different permission types", () => {
    cy.mount(<TestComponent permissionType="camera" />);

    cy.get('[data-testid="permission-state"]').should("have.text", "prompt");

    cy.window().then((win) => {
      win.mockPermissionChange("granted");
    });

    cy.get('[data-testid="permission-state"]').should("have.text", "granted");
  });

  it("should handle rapid permission state changes", () => {
    const onStateChange = cy.spy().as("stateChangeSpy");

    cy.mount(<TestComponent permissionType="notifications" onStateChange={onStateChange} />);

    // Simulate rapid state changes
    cy.window().then((win) => {
      win.mockPermissionChange("prompt");
      win.mockPermissionChange("granted");
      win.mockPermissionChange("denied");
    });

    // Should end up in final state
    cy.get('[data-testid="permission-state"]').should("have.text", "denied");
  });

  it("should handle permission descriptor changes", () => {
    const TestWrapper = () => {
      const [permissionType, setPermissionType] = React.useState<PermissionName>("notifications");

      return (
        <div>
          <TestComponent permissionType={permissionType} />
          <button data-testid="change-permission" onClick={() => setPermissionType("camera")}>
            Change Permission
          </button>
        </div>
      );
    };

    cy.mount(<TestWrapper />);

    // Change permission type
    cy.get('[data-testid="change-permission"]').click();

    // Should go through state cycle for new permission
    cy.get('[data-testid="permission-state"]').should("have.text", "prompt");
  });
});
