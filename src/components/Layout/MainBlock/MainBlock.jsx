import { WordTable } from "../../WordTable/WordTable";
import styles from "./MainBlock.module.scss";

export const MainBlock = () => {
  return (
    <main className={styles.main}>
      <WordTable />
    </main>
  );
};
