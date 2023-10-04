import { Hero, Navbar } from "../../exports/components";
import styles from "./Pricing.module.scss";
import { logo } from "../../exports/icons";
import { about_bg } from "../../exports/images";
const Pricing = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Navbar
          logo={logo}
          DesktopBgColor={"var(--persian-blue)"}
          MobileBgColor={"var(--persian-blue)"}
          hamburgerColor="white"
        />
      </div>
      <div className={styles.hero}>
        <Hero
          className={styles.hero}
          bgImage={`url(${about_bg})`}
          bgColor={"var(--persian-blue)"}
          title="Your full stack of building, managing & deploying tools."
          displayInput="none"
          text="Deployn helps founders, project managers, and developers to build faster, access dev tools, and manage their tech infastructure via one simple integration."
        />
      </div>
    </div>
  );
};

export default Pricing;
