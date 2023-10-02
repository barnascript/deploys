import styles from "./ClientCard.module.scss";

const ClientCard = ({ image, text, title }) => {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt={title} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ClientCard;
