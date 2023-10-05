import {
  Contact,
  Footer,
  Hero,
  Navbar,
  NavbarHero,
  PriceCard,
  Snippet,
} from "../../exports/components";
import styles from "./Pricing.module.scss";
import { logo } from "../../exports/icons";
import { about_bg } from "../../exports/images";
const Pricing = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar_hero}>
        <NavbarHero
          bgDesktop={`url(${about_bg})`}
          title="Your full stack of building, managing & deploying tools."
          text="Deployn helps founders, project managers, and developers to build faster, access dev tools, and manage their tech infastructure via one simple integration."
        />
      </div>
      <div className={`sw ${styles.pricecards}`}>
        <div className={styles.pricecard}>
          <PriceCard />
        </div>
        <div className={styles.pricecard}>
          <PriceCard />
        </div>
        <div className={styles.pricecard}>
          <PriceCard />
        </div>
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

export default Pricing;
