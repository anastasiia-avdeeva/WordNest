import classNames from "classnames";
import { NavItem } from "../NavItem/NavItem";
import styles from "./NavBar.module.scss";
import { navBarItems } from "../../../common/constants/constants";

export const NavBar = ({ variant }) => {
  const lstClass = classNames(
    styles.nav__list,
    variant && styles[`nav__list--${variant}`]
  );

  return (
    <nav className="nav">
      <ul className={lstClass}>
        {navBarItems.map((item) => (
          <NavItem key={item.id} href={item.href}>
            {item.name}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};
