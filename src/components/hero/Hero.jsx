import styles from "./Hero.module.scss";
import { Input } from "../../exports/components";
import { useEffect, useState } from "react";

const Hero = ({
  bgColor,
  title,
  text,
  displayInput,
  mobile_bg,
  desktop_bg,
}) => {
  const [windowWidth, setWindowWith] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWith(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const bgImage = windowWidth <= 500 ? mobile_bg : desktop_bg;
  return (
    <div
      className={styles.wrapper}
      style={{ background: bgColor, backgroundImage: bgImage }}
    >
      <div className={`sw ${styles.container}`}>
        <div className={styles.hero_text}>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <div style={{ display: displayInput }}>
          <Input />
        </div>
      </div>
    </div>
  );
};

export default Hero;
