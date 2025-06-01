import styles from "./SiteFooter.module.scss";
import logo from "../../assets/icons/logo2.svg";
import { SiteLogo } from "../siteLogo/SiteLogo";
import { NavBar } from "../navBar/NavBar";

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
