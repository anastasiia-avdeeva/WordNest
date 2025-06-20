import { WordCards } from "../../WordCards/WordCards";
import { WordTable } from "../../WordTable/WordTable";
import styles from "./MainBlock.module.scss";
import { words } from "../../../common/constants/constants";

export const MainBlock = () => {
  return (
    <main className={styles.main}>
      <WordTable words={words} />
      <WordCards words={words} />
    </main>
  );
};
