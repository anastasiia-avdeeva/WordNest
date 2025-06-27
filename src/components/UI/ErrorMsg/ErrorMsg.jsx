import styles from "./ErrorMsg.module.scss";

export const ErrorMsg = ({ message }) => {
  return (
    <div className={styles["error-message__wrapper"]}>
      <h2 className={styles["error-message"]}> {message} &#128532;</h2>
      <p className={styles["error-message"]}>
        Пожалуйста, повторите попытку позже
      </p>
    </div>
  );
};
