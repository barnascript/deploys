import { ClientCard, SubHeading } from "../../exports/components";
import styles from "./Clients.module.scss";
import {
  developers,
  ipo,
  teams,
  ngo,
  startups,
  government,
} from "../../exports/icons";

const Clients = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <SubHeading title="Built for individuals & teams of all sizes" />
      <div className={styles.clients}>
        <div className={styles.client}>
          <ClientCard
            image={developers}
            title="Developers"
            text="Orci pellentesque risus proin commodo aliquam, in fringilla nisl enim. Mi sit venenatis urna."
          />
        </div>
        <div className={styles.client}>
          <ClientCard
            image={ipo}
            title="Corporates"
            text="Orci pellentesque risus proin commodo aliquam, in fringilla nisl enim. Mi sit venenatis urna."
          />
        </div>
        <div className={styles.client}>
          <ClientCard
            image={government}
            title="Government"
            text="Orci pellentesque risus proin commodo aliquam, in fringilla nisl enim. Mi sit venenatis urna."
          />
        </div>
        <div className={styles.client}>
          <ClientCard
            image={startups}
            title="Startups"
            text="Orci pellentesque risus proin commodo aliquam, in fringilla nisl enim. Mi sit venenatis urna."
          />
        </div>
        <div className={styles.client}>
          <ClientCard
            image={ngo}
            title="NGOs"
            text="Orci pellentesque risus proin commodo aliquam, in fringilla nisl enim. Mi sit venenatis urna."
          />
        </div>
        <div className={styles.client}>
          <ClientCard
            image={teams}
            title="Teams"
            text="Orci pellentesque risus proin commodo aliquam, in fringilla nisl enim. Mi sit venenatis urna."
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
