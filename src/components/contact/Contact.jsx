import styles from "./Contact.module.scss";
import { SubHeading, Input } from "../../exports/components";

const Contact = () => {
  return (
    <div className={styles.wrapper_container}>
      <div className={`sw ${styles.wrapper}`}>
        <SubHeading
          title="Try Deployn for free today"
          text="Whether you're building a simple prototype or a business-critical product, Deployn’s fully-managed platform gives you the simplest path to delivering apps quickly."
        />
        <Input />
      </div>
    </div>
  );
};

export default Contact;
