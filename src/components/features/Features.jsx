import { Feature, SubHeading } from "../../exports/components";
import styles from "./Features.module.scss";
import {
  software,
  network,
  repository,
  integration,
} from "../../exports/icons";

const Features = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <SubHeading
        title="Rich features for today’s workforce"
        text="Build and deploy applications faster using our pre-packaged solutions. Deployn is configurable, flexible and supports integrations to your other favorite softwares."
      />
      <div className={styles.features}>
        <div className={styles.feature}>
          {" "}
          <Feature
            image={software}
            title="Launch great software faster"
            text="Create tasks, get frequent updates and host fewer but more productive meetings. Deployn’s integration with Zoom lets you have quick meetings on projects."
          />
        </div>
        <div className={styles.feature}>
          {" "}
          <Feature
            image={network}
            title="Repository management"
            text="Go live faster by Integrating easily with your favorite DevOps tools and frameworks to quickly build and launch your apps many times faster."
          />
        </div>
        <div className={styles.feature}>
          {" "}
          <Feature
            image={repository}
            title="Launch great software faster"
            text="Bring all your repos on Github, Gitlab and Bitbucket together on Deployn and make production seamless. Create a gitlab repo or integrate your existing repos and set automatic deployments to the server."
          />
        </div>
        <div className={styles.feature}>
          {" "}
          <Feature
            image={integration}
            title="Integration to 3rd party dev services"
            text="Build better software by tapping into a global ecosystem of useful tools that are continuously being added to the Deployn ecosystem of useful services."
          />
        </div>
      </div>
      <button>Learn More</button>
    </div>
  );
};

export default Features;
