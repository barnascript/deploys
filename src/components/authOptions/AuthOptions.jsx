import styles from "./AuthOptions.module.scss";
import { google } from "../../exports/icons";
import { Button } from "../../exports/components";

const AuthOptions = ({ title, cta, option }) => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <h2>{title}</h2>
      <div className={styles.google_options}>
        <div className={styles.google}>
          <img src={google} alt="google" />
          <div className={styles.button}>
            <Button
              cta={cta}
              className={styles.button}
              text="Sign up With Google"
              buttonBgColor={"var(--persian-blue)"}
            />
          </div>
        </div>
        <div className={styles.option}>
          <div className={styles.line}></div>
          <p>{option}</p>
          <div className={styles.line}></div>
        </div>
      </div>
    </div>
  );
};

export default AuthOptions;
