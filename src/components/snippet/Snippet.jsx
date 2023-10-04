import styles from "./Snippet.module.scss";

const Snippet = ({ bgColor, justifyContent, color }) => {
  return (
    <div
      className={styles.wrapper_container}
      style={{ backgroundColor: bgColor }}
    >
      <div
        className={`sw ${styles.wrapper}`}
        style={{ justifyContent: justifyContent, color: color }}
      >
        <p>© 2020 Deployn.com. All rights reserved.</p>
        <div className={styles.rights}>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Snippet;
