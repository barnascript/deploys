import styles from "./WhatWeDoReverse.module.scss";

const WhatWeDoReverse = ({ image, title, text }) => {
  return (
    <div className={styles.wrapper}>
      <div className="content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <img src={image} alt={title} />
    </div>
  );
};

export default WhatWeDoReverse;
