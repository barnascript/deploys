import styles from "./Feature.module.scss";
import { Description } from "../../exports/components";

const Features = ({ title, text, image }) => {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt={image} />
      <Description title={title} text={text} />
    </div>
  );
};

export default Features;
