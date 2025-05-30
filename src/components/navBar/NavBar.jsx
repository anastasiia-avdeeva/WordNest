import classNames from "classnames";
import NavItem from "../navItem/NavItem";
import styles from "./NavBar.module.css";
import { navBarItems } from "../../common/constants/constants";

export const NavBar = ({ variant }) => {
  const navClass = classNames(styles.nav, variant && styles[`${variant}__nav`]);
  const lstClass = classNames(
    styles.nav__list,
    variant && styles[`${variant}-nav__list`]
  );
  return (
    <nav className={navClass}>
      <ul className={lstClass}>
        {navBarItems.map((item) => {
          <NavItem href={item.href}>{item.name}</NavItem>;
        })}
      </ul>
    </nav>
  );
};
