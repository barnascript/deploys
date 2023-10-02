import styles from "./Hero.module.scss";
import { Input } from "../../exports/components";

const Hero = ({ bgColor, bgImage }) => {
  return (
    <div
      className={styles.wrapper}
      style={{ background: bgColor, backgroundImage: bgImage }}
    >
      <div className={`sw ${styles.container}`}>
        <div className={styles.hero_text}>
          <h1>Build, Manage & Deploy Products – Faster.</h1>
          <p>
            Deployn helps founders, project managers, and developers to build
            faster, access dev tools, and manage their tech infastructure via
            one simple integration.
          </p>
        </div>
        <Input />
      </div>
    </div>
  );
};

export default Hero;
