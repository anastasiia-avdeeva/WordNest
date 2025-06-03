import { TextBtn } from "../../UI/TextBtn/TextBtn";
import styles from "./ActionsCell.module.scss";

export const ActionsCell = ({
  btnVariant1,
  btnText1,
  btnVariant2,
  btnText2,
}) => {
  return (
    <div className={styles.table__btns}>
      <TextBtn variant={btnVariant1}>{btnText1}</TextBtn>
      <TextBtn variant={btnVariant2}>{btnText2}</TextBtn>
    </div>
  );
};
