export const NavItem = ({ href, children }) => {
  return (
    <li className="nav__list-item">
      <a href={href} className="nav__link">
        {children}
      </a>
    </li>
  );
};
