import classNames from "classnames";
import styles from "./TextBtn.module.scss";

export const TextBtn = ({ variant, children, ...rest }) => {
  const buttonClass = classNames(styles.btn, variant && styles[variant]);
  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};
