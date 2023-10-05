import {
  NavbarHero,
  Companies,
  Clients,
  Features,
  Contact,
  Footer,
  Snippet,
} from "../../exports/components";
import styles from "./Home.module.scss";
import { bg } from "../../exports/images";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar_hero}>
        <NavbarHero
          bgDesktop={`url(${bg})`}
          title="Build, Manage & Deploy Products – Faster."
          text="Deployn helps founders, project managers, and developers to build
          faster, access dev tools, and manage their tech infastructure via
          one simple integration."
        />
      </div>
      <div className={styles.companies}>
        <Companies />
      </div>
      <div className={styles.clients}>
        <Clients />
      </div>
      <div className={styles.features}>
        <Features />
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

export default Home;
