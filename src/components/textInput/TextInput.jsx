import styles from "./TextInput.module.scss";

const TextInput = ({ placeholder }) => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <input type="text" placeholder={placeholder} minLength={3} required />
    </div>
  );
};

export default TextInput;
