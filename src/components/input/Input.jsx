import styles from "./Input.module.scss";

const Input = () => {
  return (
    <div className={styles.wrapper}>
      <input type="email" placeholder="Enter your work email" />
      <button>Get Started Now</button>
    </div>
  );
};

export default Input;
