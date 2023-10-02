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
import { bg, mobile_bg } from "../../exports/images";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <NavbarHero
          bgDesktop={`url(${bg})`}
          bgMobile={`url(${mobile_bg})`}
          bgColor={"var(--persian-blue"}
        />
      </div>
      <Companies />
      <Clients />
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
