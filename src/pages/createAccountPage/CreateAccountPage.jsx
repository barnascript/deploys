import {
  AuthOptions,
  EmailInput,
  Navbar,
  PasswordInput,
  Snippet,
  TextInput,
  Button,
  AuthOptionsFooter,
  Captcha,
  CompanyComponent,
} from "../../exports/components";
import styles from "./CreateAccountPage.module.scss";
import { contact_logo } from "../../exports/images";

const CreateAccountPage = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Navbar
          logo={contact_logo}
          linkColor="black"
          MobileBgColor="white"
          DesktopBgColor="white"
        />
      </div>
      <div className={styles.auth}>
        <AuthOptions
          title="Create an Account"
          cta="Sign up With Google"
          option="Or, Sign up with your email"
          cta2="Already have a Deployn account? Log in"
        />

        <div className={styles.form}>
          <div className={styles.names}>
            <div className={styles.fname}>
              <TextInput placeholder={"First Name"} />
            </div>
            <div className={styles.lname}>
              <TextInput placeholder={"Last Name"} />
            </div>
          </div>
          <div>
            <EmailInput placeholder="Email Address" />
          </div>
          <div>
            <PasswordInput placeholder="Password" />
          </div>
          <div>
            <Button text="Sign Up" />
          </div>
        </div>

        <AuthOptionsFooter cta2="Already have a Deployn account? Log in" />

        <div className={styles.captcha}>
          <Captcha />
        </div>
      </div>
      <div className={styles.companies}>
        <h3>You are in good Company</h3>
        <CompanyComponent opacity={0.4} />
      </div>
      <Snippet bgColor="#A6A6A6" justifyContent="center" color="white" />
    </div>
  );
};

export default CreateAccountPage;
