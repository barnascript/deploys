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
  color,
  visibility,
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
      style={{
        background: bgColor,
        backgroundImage: bgImage ?? bgColor,
      }}
    >
      <div className={`sw ${styles.container}`}>
        <div className={styles.hero_text}>
          <h1 style={{ color: color }}>{title}</h1>
          <p style={{ color: color }}>{text}</p>
        </div>
        <div style={{ display: displayInput, visibility: visibility }}>
          <Input />
        </div>
      </div>
    </div>
  );
};

export default Hero;
