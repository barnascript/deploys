import { Captcha, TextInput } from "../../exports/components";

import styles from "./Form.module.scss";

const Form = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`sw ${styles.container}`}>
        <div className={styles.heading}>
          <h2>Contact Us</h2>
          <p>
            Eget mi odio aliquam fermentum euismod morbi non. Ac aliquam turpis
            diam leo.
          </p>
        </div>
        <form>
          <div>
            <TextInput placeholder={"First Name"} />
          </div>
          <div>
            <TextInput placeholder={"Last Name"} />
          </div>
          <textarea rows="3" placeholder="Message"></textarea>
          <button>Send Message</button>
        </form>
        <Captcha />
      </div>
    </div>
  );
};

export default Form;
