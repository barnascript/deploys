import styles from "./WhatWeDo.module.scss";

const WhatWeDo = ({ image, title, text }) => {
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

export default WhatWeDo;
