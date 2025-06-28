import { slide as Menu } from "react-burger-menu";
import { navBarItems } from "../../../../common/constants/constants";
import { NavLink } from "react-router-dom";
import { SearchPanel } from "../../../UI/SearchPanel/SearchPanel";
import { useState } from "react";

export const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    document.querySelector("main")?.focus();
  };
  const handleStateChange = (state) => setMenuOpen(state.isOpen);

  return (
    <Menu right width={350} onStateChange={handleStateChange} isOpen={menuOpen}>
      {navBarItems.map((item) => (
        <NavLink
          key={item.id}
          id={item.name}
          to={item.href}
          onClick={closeMenu}
        >
          {item.name}
        </NavLink>
      ))}
      <SearchPanel inputId="burgerSearch" inputName="burgerSearch" />
    </Menu>
  );
};
