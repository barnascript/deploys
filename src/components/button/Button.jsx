import styles from "./Button.module.scss";

const Button = ({ text, buttonBgColor }) => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <button style={{ backgroundColor: buttonBgColor }}>{text}</button>
    </div>
  );
};

export default Button;
