import styles from "./HeaderRow.module.scss";
import { capitalizeStr } from "../../../common/utils/stringUtils";

export const HeaderRow = ({ headerCells }) => {
  return (
    <thead className={styles.table__header}>
      <tr className={styles["table__header-row"]}>
        {headerCells.map((item, index) => (
          <th key={index} className={styles["table__header-cell"]}>
            {capitalizeStr(item)}
          </th>
        ))}
      </tr>
    </thead>
  );
};
