import React, { useState, useEffect } from "react";
import { Navbar, Hero } from "../../exports/components";
import { logo } from "../../exports/icons";
import { bg } from "../../exports/images";
import styles from "./Navbar_Hero.module.scss";

const NavbarHero = ({ bgColor, bgDesktop, bgMobile, title, text }) => {
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
        <Navbar bgColor={"var(--persian-blue)"} logo={logo} />
      </div>
      <div className={styles.hero}>
        <Hero bgImage={bgImage} title={title} text={text} />
      </div>
    </div>
  );
};

export default NavbarHero;
