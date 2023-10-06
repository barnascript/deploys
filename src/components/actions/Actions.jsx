import styles from "./Actions.module.scss";

const Actions = ({ title, image, text }) => {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt="projects" />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Actions;
