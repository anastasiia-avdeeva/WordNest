import { IconBtn } from "../IconBtn/IconBtn";
import searchIcon from "../../../assets/icons/searchIcon.svg";
import styles from "./SearchPanel.module.scss";

export const SearchPanel = ({ inputId, inputName }) => {
  return (
    <div className={styles["search-panel"]}>
      <input
        className={styles["search-panel__input"]}
        type="text"
        placeholder="Поиск"
        name={inputName}
        id={inputId}
      />
      <IconBtn variant="search-button" icon={searchIcon} alt="кнопка поиска" />
    </div>
  );
};
