import styles from "./AboutContent.module.scss";
import { ClientCard } from "../../exports/components";
import { mission, vision } from "../../exports/images";

const AboutContent = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.content}>
        <h2>We are all about building</h2>
        <p>
          Deploy functionality to your app quickly using pre-packaged solutions.
          Firebase Extensions are configurable, and work with Firebase and other
          Google Cloud Platform products.
          <br />
          <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
          <br />
          <br />
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
          Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
          in 45 BC. This book is a treatise on the theory of ethics, very
          popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
          ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </p>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <ClientCard
            image={mission}
            title="Our Vision"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution."
          />
        </div>
        <div className={styles.card}>
          <ClientCard
            image={vision}
            title="Our Mission"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution."
          />
        </div>
      </div>

      <button>Join our Community</button>
    </div>
  );
};

export default AboutContent;
