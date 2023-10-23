import styles from "./Navbar.module.scss";
import { hamburger } from "../../exports/icons";
import { Link, NavLink } from "react-router-dom";
import { LiaTimesSolid } from "react-icons/lia";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({
  logo,
  scrolledHamburgerColor,
  unscrolledHamburgerColor,
  MobileBgColor,
  DesktopBgColor,
  propLinkColor,
  originalLinkColor,
  mobileHamburgerColor,
  scrolledLogoColor,
}) => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [bgColor, setBgColor] = useState();
  const [logoColor, setLogoColor] = useState("white");
  const [linkColor, setLinkColor] = useState(originalLinkColor);
  const [boxShadow, setBoxShadow] = useState();
  const [hamburgerColor, setHamburgerColor] = useState("white");

  useEffect(() => {
    const handleScroll = () => {
      const backgroundColor = window.scrollY > 50 ? "white" : "transparent";
      const hamburgerIconColor =
        window.scrollY > 50 ? scrolledHamburgerColor : unscrolledHamburgerColor;
      const changeLogoColor =
        window.scrollY > 50
          ? scrolledLogoColor
          : "brightness(100%) saturate(100%) hue-rotate(0deg) sepia(100%) grayscale(0%) invert(0%)";
      const changeLinkColor =
        window.scrollY > 50 ? propLinkColor : originalLinkColor;
      const changeBoxShadow =
        window.scrollY > 50
          ? "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
          : null;
      setBgColor(backgroundColor);
      setLogoColor(changeLogoColor);
      setLinkColor(changeLinkColor);
      setBoxShadow(changeBoxShadow);
      setHamburgerColor(hamburgerIconColor);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [
    propLinkColor,
    originalLinkColor,
    mobileHamburgerColor,
    unscrolledHamburgerColor,
    scrolledHamburgerColor,
    scrolledLogoColor,
  ]);

  return (
    <div
      className={styles.wrapper_container}
      style={{ backgroundColor: bgColor, boxShadow: boxShadow }}
    >
      <div className={` ${styles.wrapper}`}>
        <div className={`sw ${styles.desktop_container}`}>
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
                <Link to="/features" style={{ color: linkColor }}>
                  Features
                </Link>
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
        <div
          className={`sw ${styles.mobile_container}`}
          style={{ backgroundColor: MobileBgColor }}
        >
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className={styles.logo}
              style={{ filter: logoColor }}
            />
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
              <Link
                to="/about"
                className={styles.mobile_link}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                About
              </Link>
              <Link
                to="/features"
                className={styles.mobile_link}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className={styles.mobile_link}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className={styles.mobile_link}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                Contact
              </Link>
              <Link
                to="/login"
                className={styles.mobile_link}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
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
