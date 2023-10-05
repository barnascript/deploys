import {
  Contact,
  Footer,
  Navbar,
  Hero,
  PriceCard,
  Snippet,
} from "../../exports/components";
import styles from "./Pricing.module.scss";
import { about_bg } from "../../exports/images";
import {
  observatory,
  earth,
  astronomy,
  logo,
  round_checkmark,
} from "../../exports/icons";
const Pricing = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar_hero}>
        <Navbar logo={logo} />
        <Hero
          bgImage={`url(${about_bg})`}
          title="Your full stack of building, managing & deploying tools."
          text="Deployn helps founders, project managers, and developers to build faster, access dev tools, and manage their tech infastructure via one simple integration."
        />
      </div>
      <div className={`sw ${styles.pricecards}`}>
        <div className={styles.pricecard}>
          <PriceCard image={observatory} />
        </div>
        <div className={styles.pricecard}>
          <PriceCard image={earth} />
        </div>
        <div className={styles.pricecard}>
          <PriceCard image={astronomy} />
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
