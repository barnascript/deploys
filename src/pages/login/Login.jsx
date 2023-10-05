import styles from "./Login.module.scss";
import {
  AuthOptions,
  AuthOptionsFooter,
  Button,
  EmailInput,
  Navbar,
  PasswordInput,
  Snippet,
  CompanyComponent,
} from "../../exports/components";
import { contact_logo } from "../../exports/icons";
import { Link } from "react-router-dom";

const Login = () => {
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
          title="Log In"
          option="Or, Log in with your email"
          cta="Log in With Google"
          cta2="Don’t have a Deployn account? Sign up Here"
        />
        <form className={styles.form}>
          <div>
            <EmailInput placeholder="Email" />
          </div>
          <div>
            <PasswordInput placeholder="Password" />
          </div>
          <Link className={styles.forgot_password}>Forgot Password?</Link>
        </form>
        <div className={styles.button}>
          <Button text="Sign Up" />
        </div>
        <AuthOptionsFooter cta2="Don’t have a Deployn account? Sign up Here" />
      </div>
      <div className={styles.companies}>
        <h3>You are in good Company</h3>
        <CompanyComponent opacity={0.4} />
      </div>
      <Snippet justifyContent="center" color="white" bgColor="#A6A6A6" />
    </div>
  );
};

export default Login;
