import { ContactPageBg, Form, Navbar } from "../../exports/components";
import styles from "./Contact.module.scss";
import { contact_logo } from "../../exports/icons";

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar
        logo={contact_logo}
        hamburgerColor={"#000000"}
        MobileBgColor="white"
      />
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
