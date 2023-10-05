import styles from "./About.module.scss";
import {
  AboutContent,
  Contact,
  Footer,
  NavbarHero,
  Snippet,
} from "../../exports/components";
import { about_bg } from "../../exports/images";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <NavbarHero
          bgDesktop={`url(${about_bg})`}
          bgColor={"var(--persian-blue"}
          title="We are building the future from the present."
          text="Deployn helps founders, project managers, and developers to build faster, access dev tools, and manage their tech infastructure via one simple integration."
        />
      </div>
      <div>
        <AboutContent />
      </div>
      <Contact />
      <Footer />
      <Snippet />
    </div>
  );
};

export default About;
