import classNames from "classnames";
import styles from "./SiteLogo.module.scss";
import { Link } from "react-router-dom";

export const SiteLogo = ({ variant, icon }) => {
  const logoClass = classNames(styles.logo, variant && styles[variant]);
  return (
    <div className={logoClass}>
      <Link to="/" className={styles.logo__link}>
        <img
          src={icon}
          alt="логотип сайта внутри ссылки"
          className={styles.logo__img}
        />
      </Link>
    </div>
  );
};
