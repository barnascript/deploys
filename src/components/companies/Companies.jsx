import { CompanyComponent, SubHeading } from "../../exports/components";
import styles from "./Companies.module.scss";

const Companies = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <SubHeading
        title="Trusted by top tech companies"
        text="We are continuously amazed by the thousands of customers who have placed their trust in Deployn."
      />
      <CompanyComponent />
    </div>
  );
};

export default Companies;
