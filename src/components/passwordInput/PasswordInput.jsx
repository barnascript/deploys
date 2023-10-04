import styles from "./PasswordInput.module.scss";

const PasswordInput = ({ placeholder }) => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <input type="password" placeholder={placeholder} required />
    </div>
  );
};

export default PasswordInput;
