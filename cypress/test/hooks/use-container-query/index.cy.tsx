/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */
import { useContainerQuery } from "../../../../src/hooks";
import type {
  ContainerQueryMeasurement,
  QueryBreakpoints,
} from "../../../../src/hooks/useContainerQuery/types";
import "./styles.scss";

const CUSTOM_BREAKPOINTS: QueryBreakpoints = {
  xs: [0, 320],
  sm: [321, 480],
  medium: [481, 640],
  large: [641, 720],
  xlarge: [721, 960],
  xxlarge: [961, 1024],
};

function DemoComponent({
  breakpoints,
  observedMeasurement = "width",
  measureValue = 800,
  ignoreDimensions = false,
}: {
  observedMeasurement?: ContainerQueryMeasurement;
  breakpoints?: QueryBreakpoints;
  measureValue?: number;
  ignoreDimensions?: boolean;
}) {
  const { ref, active, measurement } = useContainerQuery({
    breakpoints,
    ignoreDimensions,
    observedMeasurement,
  });

  const MEASUREMENT_TEXT = `The current measurement is: ${measurement}`;
  const BREAKPOINT_TEXT = `Current Breakpoint: ${active}`;

  return (
    <div
      ref={ref}
      className="tracked-element"
      data-measurement={observedMeasurement}
      data-testid="jd-js-tracked-element"
      style={{
        [observedMeasurement]: measureValue,
      }}
    >
      <span data-testid="jd-js-measurement">{MEASUREMENT_TEXT}</span>
      <span data-testid="jd-js-breakpoint">{BREAKPOINT_TEXT}</span>
    </div>
  );
}

describe("useContainerSize", () => {
  context("should display the correct measures and breakpoint using the default values", () => {
    const SIZES = [
      {
        measureValue: 720,
        breakpoint: "xs",
      },
      {
        measureValue: 1024,
        breakpoint: "sm",
      },
      {
        measureValue: 1280,
        breakpoint: "md",
      },
      {
        measureValue: 1500,
        breakpoint: "lg",
      },
      {
        measureValue: 2000,
        breakpoint: "xl",
      },
    ];

    it("when the measurement is width", () => {
      SIZES.forEach((size) => {
        cy.mount(<DemoComponent measureValue={size.measureValue} />);

        cy.findByTestId("jd-js-tracked-element").should("have.attr", "data-measurement", "width");
        cy.findByTestId("jd-js-measurement").should(
          "have.text",
          `The current measurement is: ${size.measureValue}`
        );
        cy.findByTestId("jd-js-breakpoint").should(
          "have.text",
          `Current Breakpoint: ${size.breakpoint}`
        );
      });
    });

    it("when the measurement is height", () => {
      SIZES.forEach((size) => {
        cy.mount(<DemoComponent observedMeasurement="height" measureValue={size.measureValue} />);

        cy.findByTestId("jd-js-tracked-element").should("have.attr", "data-measurement", "height");
        cy.findByTestId("jd-js-measurement").should(
          "have.text",
          `The current measurement is: ${size.measureValue}`
        );
        cy.findByTestId("jd-js-breakpoint").should(
          "have.text",
          `Current Breakpoint: ${size.breakpoint}`
        );
      });
    });
  });

  context("should display the correct measure and breakpoint when changing container sizes", () => {
    const SIZES = [
      {
        measureValue: 300,
        breakpoint: "xs",
      },
      {
        measureValue: 400,
        breakpoint: "sm",
      },
      {
        measureValue: 500,
        breakpoint: "medium",
      },
      {
        measureValue: 680,
        breakpoint: "large",
      },
      {
        measureValue: 800,
        breakpoint: "xlarge",
      },
    ];

    it("when the measurement is width", () => {
      SIZES.forEach((size) => {
        cy.mount(
          <DemoComponent breakpoints={CUSTOM_BREAKPOINTS} measureValue={size.measureValue} />
        );

        cy.findByTestId("jd-js-tracked-element").should("have.attr", "data-measurement", "width");
        cy.findByTestId("jd-js-measurement").should(
          "have.text",
          `The current measurement is: ${size.measureValue}`
        );
        cy.findByTestId("jd-js-breakpoint").should(
          "have.text",
          `Current Breakpoint: ${size.breakpoint}`
        );
      });
    });

    it("when the measurement is height", () => {
      SIZES.forEach((size) => {
        cy.mount(
          <DemoComponent
            breakpoints={CUSTOM_BREAKPOINTS}
            observedMeasurement="height"
            measureValue={size.measureValue}
          />
        );

        cy.findByTestId("jd-js-tracked-element").should("have.attr", "data-measurement", "height");
        cy.findByTestId("jd-js-measurement").should(
          "have.text",
          `The current measurement is: ${size.measureValue}`
        );
        cy.findByTestId("jd-js-breakpoint").should(
          "have.text",
          `Current Breakpoint: ${size.breakpoint}`
        );
      });
    });
  });

  context("should display the correct breakpoint even when ignoring the sizes", () => {
    const SIZES = [
      {
        measureValue: 300,
        breakpoint: "xs",
      },
      {
        measureValue: 400,
        breakpoint: "sm",
      },
      {
        measureValue: 500,
        breakpoint: "medium",
      },
      {
        measureValue: 680,
        breakpoint: "large",
      },
      {
        measureValue: 800,
        breakpoint: "xlarge",
      },
    ];

    it("when the measurement is width", () => {
      SIZES.forEach((size) => {
        cy.mount(
          <DemoComponent
            breakpoints={CUSTOM_BREAKPOINTS}
            measureValue={size.measureValue}
            ignoreDimensions
          />
        );

        cy.findByTestId("jd-js-tracked-element").should("have.attr", "data-measurement", "width");
        cy.findByTestId("jd-js-measurement").should("have.text", `The current measurement is: 0`);
        cy.findByTestId("jd-js-breakpoint").should(
          "have.text",
          `Current Breakpoint: ${size.breakpoint}`
        );
      });
    });

    it("when the measurement is height", () => {
      SIZES.forEach((size) => {
        cy.mount(
          <DemoComponent
            breakpoints={CUSTOM_BREAKPOINTS}
            observedMeasurement="height"
            measureValue={size.measureValue}
            ignoreDimensions
          />
        );

        cy.findByTestId("jd-js-tracked-element").should("have.attr", "data-measurement", "height");
        cy.findByTestId("jd-js-measurement").should("have.text", `The current measurement is: 0`);
        cy.findByTestId("jd-js-breakpoint").should(
          "have.text",
          `Current Breakpoint: ${size.breakpoint}`
        );
      });
    });
  });
});
