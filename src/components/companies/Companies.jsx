import { SubHeading } from "../../exports/components";
import styles from "./Companies.module.scss";
import {
  civichive,
  budgit,
  co_creation,
  riby,
  lifebank,
  dsn,
} from "../../exports/icons";

const Companies = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <SubHeading
        title="Trusted by top tech companies"
        text="We are continuously amazed by the thousands of customers who have placed their trust in Deployn."
      />
      <div className={styles.logos}>
        <img src={co_creation} alt="" />
        <img src={budgit} alt="" />
        <img src={civichive} alt="" />
        <img src={riby} alt="" />
        <img src={lifebank} alt="" />
        <img src={dsn} alt="" />
      </div>
    </div>
  );
};

export default Companies;
