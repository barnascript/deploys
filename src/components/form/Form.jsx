import { SubHeading } from "../../exports/components";
import { captcha } from "../../exports/icons";
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
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <textarea rows="3" placeholder="Message"></textarea>
          <button>Send Message</button>
        </form>
        <div className={styles.captcha}>
          <img src={captcha} alt="captcha" />
          <p>This page is protected by Google reCAPTCHA</p>
        </div>
      </div>
    </div>
  );
};

export default Form;
