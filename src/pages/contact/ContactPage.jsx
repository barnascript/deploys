import { ContactPageBg, Form } from "../../exports/components";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <Form />
      </div>
      <div className={styles.contactpage}>
        <ContactPageBg />
      </div>
    </div>
  );
};

export default Contact;
