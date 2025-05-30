import { SiteLogo } from "../siteLogo/SiteLogo";
import { NavBar } from "../navBar/NavBar";
import { SearchPanel } from "../searchPanel/SearchPanel";
import styles from "./SiteHeader.module.css";

export const SiteHeader = () => {
  const logo = "icons/logo.svg";
  return (
    <header className={styles.header}>
      <div className={styles["header__first-line"]}>
        <SiteLogo variant="header__logo" icon={logo} />
        <NavBar variant="header" />
        <SearchPanel inputId="headerSearch" inputName="headerSearch" />
      </div>
    </header>
  );
};
