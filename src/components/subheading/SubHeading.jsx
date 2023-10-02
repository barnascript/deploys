import styles from "./SubHeading.module.scss";

const SubHeading = ({ title, text }) => {
  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default SubHeading;
