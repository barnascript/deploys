import styles from "./About.module.scss";
import {
  AboutContent,
  Contact,
  Footer,
  Navbar,
  Hero,
  Snippet,
} from "../../exports/components";
import { about_bg, mobile_bg } from "../../exports/images";
import { logo } from "../../exports/icons";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Navbar
          logo={logo}
          propLinkColor="black"
          originalLinkColor="white"
          MobileBgColor="var(--persian-blue)"
        />
        <Hero
          desktop_bg={`url(${about_bg})`}
          mobile_bg={`url${mobile_bg}`}
          bgColor={"var(--persian-blue)"}
          title="Your full stack of building, managing & deploying tools."
          text="Deployn helps founders, project managers, and developers to build faster, access dev tools, and manage their tech infastructure via one simple integration."
        />
      </div>
      <div>
        <AboutContent />
      </div>
      <div className={styles.contact}>
        <Contact />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      <div className={styles.snippet}>
        <Snippet />
      </div>
    </div>
  );
};

export default About;
