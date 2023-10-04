import styles from "./Captcha.module.scss";
import { captcha } from "../../exports/icons";

const Captcha = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <img src={captcha} alt="captcha" />
      <small>This page is protected by Google reCAPTCHA</small>
    </div>
  );
};

export default Captcha;
