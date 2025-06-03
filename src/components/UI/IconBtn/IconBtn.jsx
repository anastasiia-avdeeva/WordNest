import classNames from "classnames";
import styles from "./IconBtn.module.scss";

export const IconBtn = ({ variant, icon, alt }) => {
  const buttonClass = classNames(styles.button, { [styles[variant]]: variant });

  return (
    <button className={buttonClass} aria-label={alt}>
      <img src={icon} alt="" className={styles.button__icon} />
    </button>
  );
};
