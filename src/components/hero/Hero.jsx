import styles from "./Hero.module.scss";
import { Input } from "../../exports/components";

const Hero = ({ bgColor, bgImage, title, text }) => {
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
        <Input />
      </div>
    </div>
  );
};

export default Hero;
