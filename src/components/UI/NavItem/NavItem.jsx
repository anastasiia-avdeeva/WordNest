export const NavItem = ({ href, children }) => {
  return (
    <li className="nav__list-item">
      <a href={href}>{children}</a>
    </li>
  );
};
