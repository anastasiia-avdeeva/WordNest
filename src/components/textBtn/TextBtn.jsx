import classNames from "classnames";
import styles from "./TextBtn.module.css";

export const TextButton = ({ variant, children }) => {
  const buttonClass = classNames(styles.button, { [styles[variant]]: variant });
  return <button className={buttonClass}>{children}</button>;
};
