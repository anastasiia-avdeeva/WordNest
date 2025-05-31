import classNames from "classnames";
import styles from "./TextBtn.module.scss";

export const TextBtn = ({ variant, children }) => {
  const buttonClass = classNames(styles.button, variant && styles[variant]);
  return <button className={buttonClass}>{children}</button>;
};
