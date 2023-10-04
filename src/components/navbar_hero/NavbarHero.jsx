import React, { useState, useEffect } from "react";
import { Navbar, Hero } from "../../exports/components";
import { logo } from "../../exports/icons";
import styles from "./Navbar_Hero.module.scss";

const NavbarHero = ({
  bgColor,
  bgDesktop,
  bgMobile,
  title,
  text,
  DesktopBgColor,
  MobileBgColor,
}) => {
  // State to store the current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to update window width when the window resizes
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Add an event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      // Cleanup: remove the event listener when the component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine which background image to use based on window width
  const bgImage = windowWidth <= 500 ? bgMobile : bgDesktop;

  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className={styles.navbar_hero}
    >
      <div>
        <Navbar
          logo={logo}
          hamburgerColor={"#fff"}
          DesktopBgColor={"var(--persian-blue)"}
          MobileBgColor={"var(--persian-blue)"}
        />
      </div>
      <div className={styles.hero}>
        <Hero bgImage={bgImage} title={title} text={text} />
      </div>
    </div>
  );
};

export default NavbarHero;
