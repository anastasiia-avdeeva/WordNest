import { SiteLogo } from "../siteLogo/SiteLogo";
import { NavBar } from "../navBar/NavBar";
import { SearchPanel } from "../searchPanel/SearchPanel";
import logo from "../../assets/icons/logo.svg";
import styles from "./SiteHeader.module.scss";

export const SiteHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header__content"]}>
        <SiteLogo variant="header__logo" icon={logo} />
        <NavBar variant="header" />
        <SearchPanel inputId="headerSearch" inputName="headerSearch" />
      </div>
    </header>
  );
};
