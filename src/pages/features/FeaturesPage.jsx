import {
  Hero,
  Navbar,
  SubHeading,
  Actions,
  WhatWeDo,
  WhatWeDoReverse,
  FeaturesCard,
  Contact,
  Footer,
  Snippet,
} from "../../exports/components";
import { building, contact_logo, line } from "../../exports/icons";
import styles from "./FeaturesPage.module.scss";
import {
  features,
  feature_img,
  tasks,
  manage,
  repo_management,
  server,
  featured_mobile_bg,
} from "../../exports/images";
import {
  projects,
  integrate,
  invite,
  teams,
  project_creation,
  code_storage,
  task_management,
  start_up,
  server_access,
  database_development,
  api_documentation,
  marketplace,
} from "../../exports/icons";

const FeaturesPage = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar
        logo={contact_logo}
        hamburgerColor={"#000000"}
        MobileBgColor="white"
        propLinkColor="black"
        originalLinkColor="black"
      />

      <div className={` ${styles.hero}`}>
        <Hero
          mobile_bg={`url(${featured_mobile_bg})`}
          desktop_bg={`url(${features})`}
          color="black"
          visibility="hidden"
          title="Built for individuals & teams of all sizes"
          text="Deployn helps founders, project managers, and developers to build faster, access dev tools, and manage their tech infastructure via one simple integration."
        />
        <div className={styles.hero_img}>
          <img src={feature_img} alt="features" />
        </div>
      </div>
      <div className={styles.subheading}>
        <SubHeading
          title="How it works!"
          text="Deploy functionality to your app quickly using pre-packaged solutions. Firebase Extensions are configurable, and work with Firebase and other Google Cloud Platform products."
        />
      </div>
      <div className={`sw ${styles.actions}`}>
        <div className={styles.project}>
          <Actions
            image={projects}
            title="Create projects"
            text="The point of using Lorem Ipsum is that it has a more-or-less normal distribution."
          />
        </div>
        <div className={styles.invite}>
          <Actions
            image={invite}
            title="Invite your team"
            text="The point of using Lorem Ipsum is that it has a more-or-less normal distribution."
          />
        </div>
        <div className={styles.integrate}>
          <Actions
            image={integrate}
            title="Integrate your repo & tools"
            text="The point of using Lorem Ipsum is that it has a more-or-less normal distribution."
          />
        </div>
        <div className={styles.building}>
          <Actions
            image={building}
            title="Start building"
            text="The point of using Lorem Ipsum is that it has a more-or-less normal distribution."
          />
        </div>
      </div>
      <div className={`sw ${styles.line}`}>
        <img src={line} alt="line" />
      </div>

      <div className={styles.cards}>
        <div className={`sw ${styles.whatwedo}`}>
          <div>
            <WhatWeDo
              image={tasks}
              title="Tasks & stand-ups/meetings"
              text="Whether you're building a simple prototype or a business-critical product, Deployns's fully-managed platform gives you the simplest path to delivering quickly. Learn more about how Deployn can benefit your development."
            />
          </div>
          <div>
            <WhatWeDoReverse
              image={manage}
              title="Build & manage projects"
              text="Whether you're building a simple prototype or a business-critical product, Deployns's fully-managed platform gives you the simplest path to delivering quickly. Learn more about how Deployn can benefit your development."
            />
          </div>
          <div>
            <WhatWeDo
              image={repo_management}
              title="Repository management"
              text="Whether you're building a simple prototype or a business-critical product, Deployns's fully-managed platform gives you the simplest path to delivering quickly. Learn more about how Deployn can benefit your development."
            />
          </div>
          <div>
            <WhatWeDoReverse
              image={server}
              title="Integration to servers & 3rd party dev tools"
              text="Whether you're building a simple prototype or a business-critical product, Deployns's fully-managed platform gives you the simplest path to delivering quickly. Learn more about how Deployn can benefit your development."
            />
          </div>
        </div>
      </div>
      <div className={`sw ${styles.feature_cards}`}>
        <div className={styles.feature_card}>
          <FeaturesCard image={project_creation} title="Projects creation" />
        </div>
        <div className={styles.feature_card}>
          <FeaturesCard
            image={code_storage}
            title="Code storage & Repository"
          />
        </div>
        <div className={styles.feature_card}>
          <FeaturesCard image={teams} title="Projects creation" />
        </div>
        <div className={styles.feature_card}>
          <FeaturesCard image={task_management} title="Task management" />
        </div>
        <div className={styles.feature_card}>
          <FeaturesCard image={start_up} title="Stand-ups & meetings" />
        </div>
        <div className={styles.feature_card}>
          <FeaturesCard
            image={server_access}
            title="Server access & management"
          />
        </div>
        <div className={styles.feature_card}>
          <FeaturesCard
            image={database_development}
            title="Database development"
          />
        </div>
        <div className={styles.feature_card}>
          <FeaturesCard image={api_documentation} title="API documentation" />
        </div>
        <div className={styles.feature_card}>
          <FeaturesCard image={marketplace} title="Scripts/Apps marketplace" />
        </div>
      </div>
      <div className={styles.contact}>
        <Contact />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      <div className={styles.snippet}>
        <Snippet />
      </div>
    </div>
  );
};

export default FeaturesPage;
