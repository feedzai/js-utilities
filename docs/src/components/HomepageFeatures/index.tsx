import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "A Go-To JavaScript Toolkit",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>A reliable set of tools at your disposal that can make all the difference.</>,
  },
  {
    title: "Simplified Development",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Empowers Javascript developers to write cleaner, more concise code without sacrificing
        functionality.
      </>
    ),
  },
  {
    title: "Built for the Future, embracing the Past",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        This library is available in both UMD and ES Modules formats, ensuring compatibility with a
        wide range of project setups.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
