import styles from "./Snippet.module.scss";

const Snippet = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <p>© 2020 Deployn.com. All rights reserved.</p>
      <div className={styles.rights}>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Snippet;
