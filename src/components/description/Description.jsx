import styles from "./Description.module.scss";

const Description = ({ title, text }) => {
  return (
    <div className={styles.wrapper}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Description;
