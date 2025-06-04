import styles from "./SiteFooter.module.scss";
// import logo from "../../../assets/icons/logo2.svg";
import logo from "../../../assets/icons/logoFooter.svg";
import { SiteLogo } from "../../UI/SiteLogo/SiteLogo";
import { NavBar } from "../../UI/NavBar/NavBar";

export const SiteFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <SiteLogo variant="footer__logo" icon={logo} />
        <NavBar variant="footer" />
      </div>
    </footer>
  );
};
