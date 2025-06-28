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
        {/* <NavBar variant="header" />
        <SearchPanel inputId="headerSearch" inputName="headerSearch" /> */}
        <BurgerMenu />
      </div>
    </header>
  );
};
