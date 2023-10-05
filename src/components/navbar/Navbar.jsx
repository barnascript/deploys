import styles from "./Navbar.module.scss";
import { hamburger } from "../../exports/icons";
import { Link, NavLink } from "react-router-dom";
import { LiaTimesSolid } from "react-icons/lia";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ logo, hamburgerColor, MobileBgColor, DesktopBgColor }) => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [bgColor, setBgColor] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [logoColor, setLogoColor] = useState();
  const [linkColor, setLinkColor] = useState();

  // const handleResize = () => {
  //   setWindowWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     // Cleanup: remove the event listener when the component unmounts
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // const NavbarBg = windowWidth <= 850 ? MobileBgColor : DesktopBgColor;

  useEffect(() => {
    const handleScroll = () => {
      const backgroundColor = window.scrollY > 50 ? "white" : "transparent";
      const changeLogoColor =
        window.scrollY > 50
          ? "brightness(0) saturate(100%) hue-rotate(0deg) sepia(100%) grayscale(0%) invert(0%)"
          : "brightness(100%) saturate(100%) hue-rotate(0deg) sepia(100%) grayscale(0%) invert(0%)";
      const changeLinkColor = window.scrollY > 50 ? "black" : "white";
      setBgColor(backgroundColor);
      setLogoColor(changeLogoColor);
      setLinkColor(changeLinkColor);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [bgColor, logoColor]);

  return (
    <div
      className={styles.wrapper_container}
      style={{ backgroundColor: bgColor }}
    >
      <div className={`sw ${styles.wrapper}`}>
        <div className={styles.desktop_container}>
          <Link to="/">
            <div>
              <img
                src={logo}
                alt="logo"
                className={styles.logo}
                style={{
                  filter: logoColor,
                }}
              />
            </div>
          </Link>
          <div className={styles.navigation}>
            <ul>
              <li>
                <Link to="/about" style={{ color: linkColor }}>
                  About
                </Link>
              </li>
              <li>
                <Link style={{ color: linkColor }}>Features</Link>
              </li>
              <li>
                <Link to="/pricing" style={{ color: linkColor }}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: linkColor }}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/login" style={{ color: linkColor }}>
                  Login
                </Link>
              </li>
            </ul>
            <Link to="/signup">
              <button>Sign up</button>
            </Link>
          </div>
        </div>
        <div className={styles.mobile_container}>
          <Link to="/">
            <img src={logo} alt="logo" className={styles.logo} />
          </Link>
          {toggleMenu && (
            <RxHamburgerMenu
              src={hamburger}
              alt="hamburger_menu"
              className={styles.hamburger}
              onClick={() => setToggleMenu(!toggleMenu)}
              style={{ color: hamburgerColor }}
            />
          )}
          {!toggleMenu && (
            <LiaTimesSolid
              className={styles.close_hamburger}
              onClick={() => setToggleMenu(!toggleMenu)}
              style={{ color: hamburgerColor }}
            />
          )}
          <div
            className={
              toggleMenu
                ? styles.mobile_navigation_hid
                : styles.mobile_navigation_shown
            }
          >
            <div className={styles.all_links}>
              <Link to="/about" className={styles.mobile_link}>
                About
              </Link>
              <Link to="/features" className={styles.mobile_link}>
                Features
              </Link>
              <Link to="/pricing" className={styles.mobile_link}>
                Pricing
              </Link>
              <Link to="/contact" className={styles.mobile_link}>
                Contact
              </Link>
              <Link to="/login" className={styles.mobile_link}>
                Login
              </Link>
            </div>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
