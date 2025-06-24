import { NavLink } from "react-router-dom";
import styles from "../NavBar/NavBar.module.scss";

export const NavItem = ({ href, children }) => {
  return (
    <li className="nav__list-item">
      <NavLink
        to={href}
        className={({ isActive }) =>
          isActive ? styles["nav__link--active"] : ""
        }
      >
        {children}
      </NavLink>
    </li>
  );
};
