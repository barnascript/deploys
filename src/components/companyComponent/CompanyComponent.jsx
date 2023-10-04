import styles from "./CompanyComponent.module.scss";
import {
  civichive,
  budgit,
  co_creation,
  riby,
  lifebank,
  dsn,
} from "../../exports/icons";

const CompanyComponent = ({ opacity }) => {
  return (
    <div className={`sw ${styles.logos}`} style={{ opacity: opacity }}>
      <img src={co_creation} alt="co-creation" />
      <img src={budgit} alt="budgit" />
      <img src={civichive} alt="civichive" />
      <img src={riby} alt="riby" />
      <img src={lifebank} alt="lifebank" />
      <img src={dsn} alt="dsn" />
    </div>
  );
};

export default CompanyComponent;
