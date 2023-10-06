import styles from "./FeaturesCard.module.scss";

const FeaturesCard = ({ image, title }) => {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default FeaturesCard;
