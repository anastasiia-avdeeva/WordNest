import bird from "../../assets/gifs/flying-away.gif";
import { Link } from "react-router-dom";
import styles from "./NoMatches.module.scss";

export const NoMatches = () => {
  return (
    <div className={styles["no-match"]}>
      <div className={styles["no-match__text"]}>
        <h1 className={styles["no-match__title"]}>Страница не найдена...</h1>
        <p className={styles["no-match__paragraph"]}>
          Код ошибки 404. Запрошенный URL отсутствует на сервере.
        </p>
        <Link to="/" className={styles["no-match__link"]}>
          Перейти на главную &rarr;
        </Link>
      </div>
      <div className={styles["no-match__img-wrapper"]}>
        <img
          src={bird}
          alt="анимация вылетающей птицы из клетки"
          className={styles["no-match__img"]}
        />
      </div>
    </div>
  );
};
