import styles from "./ContactPageBg.module.scss";
import { Link } from "react-router-dom";

const ContactPageBg = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`sw ${styles.container}`}>
        {" "}
        {/* <div className={styles.navigation}>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link>Features</Link>
            </li>
            <li>
              <Link>Pricing</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link>Login</Link>
            </li>
          </ul>
          <button>Sign up</button>
        </div> */}
      </div>
    </div>
  );
};

export default ContactPageBg;
