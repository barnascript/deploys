import styles from "./AuthOptionsFooter.module.scss";

const AuthOptionsFooter = ({ cta2 }) => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.login}>{cta2}</div>

      <div className={styles.terms_and_condition}>
        <p>
          By signing up you agree to our <a href="#">terms & conditions</a>
        </p>
      </div>
    </div>
  );
};

export default AuthOptionsFooter;
