import styles from "./PriceCard.module.scss";
import {
  observatory,
  earth,
  astronomy,
  round_checkmark,
} from "../../exports/icons";
import Button from "../button/Button";

const PriceCard = ({ image }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.heading}>
          <div className={styles.title}>
            <span className={styles.name}>Deployn Free</span>
            <h2>Free</h2>
            <span className={styles.timeline}>Forever</span>
          </div>
          <img src={image} alt="observatory" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.details}>
          <div className={styles.detail}>
            <img src={round_checkmark} alt="round-checkmark" />
            <p>Up to 3 team members</p>
          </div>
          <div className={styles.detail}>
            <img src={round_checkmark} alt="round-checkmark" />
            <p>Unlimited projects</p>
          </div>
          <div className={styles.detail}>
            <img src={round_checkmark} alt="round-checkmark" />
            <p>Meetings</p>
          </div>
          <div className={styles.detail}>
            <img src={round_checkmark} alt="round-checkmark" />
            <p>Integration to 3rd party tools</p>
          </div>
          <div className={styles.detail}>
            <img src={round_checkmark} alt="round-checkmark" />
            <p>Server access (coming soon)</p>
          </div>
          <div className={styles.detail}>
            <img src={round_checkmark} alt="round-checkmark" />
            <p>24/7 support</p>
          </div>
          <div className={styles.detail}>
            <img src={round_checkmark} alt="round-checkmark" />
            <p>24/7 support</p>
          </div>
          <div className={styles.detail}>
            <img src={round_checkmark} alt="round-checkmark" />
            <p>
              Access to Deployn spaceship to purchase scripts & plugins (coming
              soon)
            </p>
          </div>
        </div>
        <div>
          <Button text="Get Started Now" />
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
