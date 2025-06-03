import { TextBtn } from "../../UI/TextBtn/TextBtn";
import styles from "./ActionsCell.module.scss";

export const ActionsCell = ({ actions }) => {
  return (
    <div className={styles.table__btns}>
      {actions.map(({ variant, content, ...btnProps }, index) => (
        <TextBtn key={index} variant={variant} {...btnProps}>
          {content}
        </TextBtn>
      ))}
    </div>
  );
};
