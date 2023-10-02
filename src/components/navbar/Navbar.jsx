import styles from "./Navbar.module.scss";
import { hamburger } from "../../exports/icons";
import { Link } from "react-router-dom";
import { LiaTimesSolid } from "react-icons/lia";
import { useEffect, useState } from "react";

const Navbar = ({ bgColor, logo }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div
      className={styles.wrapper_container}
      style={{ backgroundColor: bgColor }}
    >
      <div className={`sw ${styles.wrapper}`}>
        <div className={styles.desktop_container}>
          <img src={logo} alt="logo" className={styles.logo} />
          <div className={styles.navigation}>
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
          </div>
        </div>
        <div className={styles.mobile_container}>
          <img src={logo} alt="logo" className={styles.logo} />
          {toggleMenu && (
            <img
              src={hamburger}
              alt="hamburger_menu"
              className={styles.hamburger}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          )}
          {!toggleMenu && (
            <LiaTimesSolid
              className={styles.close_hamburger}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          )}
          <div
            className={
              toggleMenu
                ? styles.mobile_navigation_hid
                : styles.mobile_navigation_shown
            }
          >
            <ul>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Features</Link>
              </li>
              <li>
                <Link>Pricing</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
              <li>
                <Link>Login</Link>
              </li>
            </ul>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
