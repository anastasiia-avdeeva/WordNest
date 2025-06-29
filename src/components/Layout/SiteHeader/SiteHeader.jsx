import { SiteLogo } from "../../UI/SiteLogo/SiteLogo";
import { NavBar } from "../../UI/NavBar/NavBar";
import { SearchPanel } from "../../UI/SearchPanel/SearchPanel";
import logo from "../../../assets/icons/logo.svg";
import styles from "./SiteHeader.module.scss";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";

export const SiteHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <SiteLogo variant="header__logo" icon={logo} />
        <div className={styles["header__menu-desctop"]}>
          <NavBar variant="header" />
          <SearchPanel inputId="headerSearch" inputName="headerSearch" />
        </div>
        <div className={styles["header__burger-menu"]}>
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};
