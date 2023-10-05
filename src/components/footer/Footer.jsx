import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { facebook, instagram, twitter, footer_logo } from "../../exports/icons";

const Footer = () => {
  return (
    <div className={`fw ${styles.wrapper_container}`}>
      <div className={`sw ${styles.wrapper}`}>
        <div className={styles.container}>
          <img src={footer_logo} alt="footer-logo" />
          <div className={styles.all_links}>
            <ul className={styles.links}>
              <li className={styles.title}>Product</li>
              <Link>Features</Link>
              <Link>Pricing</Link>
              <Link>Support</Link>
            </ul>

            <ul className={styles.links}>
              <li className={styles.title}>Company</li>
              <Link>Contact Us</Link>
              <Link>Hire Talent</Link>
              <Link>Community</Link>
            </ul>

            <ul className={styles.links}>
              <li className={styles.title}>Contact</li>
              <li>2, Connal Road, Yaba, Lagos, Nigeria.</li>
              <li>
                Kemp House, 160 City Road, London, EC1V 2NX, United Kingdom.
              </li>
            </ul>
            <ul className={styles.links}>
              <li className={styles.title}>Social</li>
              <div className={styles.images}>
                <img
                  src={facebook}
                  alt="facebook"
                  className={styles.facebook}
                />
                <img
                  src={instagram}
                  alt="instagram"
                  className={styles.instagram}
                />
                <img src={twitter} alt="twitter" className={styles.twitter} />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
//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
