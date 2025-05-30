import classNames from "classnames";
import styles from "./SiteLogo.module.css";

export const SiteLogo = ({ variant, icon }) => {
  const logoClass = classNames(styles.logo, { [styles[variant]]: variant });
  return (
    <div className={logoClass}>
      <a href="/">
        <img src={icon} alt="логотип" className={styles.logo__img} />
      </a>
    </div>
  );
};
