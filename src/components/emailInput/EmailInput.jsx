import styles from "./EmailInput.module.scss";

const EmailInput = ({ placeholder }) => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <input type="email" placeholder={placeholder} required />
    </div>
  );
};

export default EmailInput;
