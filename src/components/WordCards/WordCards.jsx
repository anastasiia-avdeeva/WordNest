import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // обязательно из 'framer-motion'
import { WordCard } from "./WordCard/WordCard";
import styles from "./WordCards.module.scss";
import { IconBtn } from "../UI/IconBtn/IconBtn";
import nextIcon from "../../assets/icons/nextIcon.svg";
import prevIcon from "../../assets/icons/prevIcon.svg";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    position: "absolute",
  }),
};

export const WordCards = ({ words = [], initialIndex = 0 }) => {
  const [[currentIndex, direction], setCurrentIndex] = useState([
    initialIndex,
    0,
  ]);

  if (!words.length) {
    return (
      <div className={styles.cards}>
        <p className="error-message">Нет доступных слов для изучения.</p>
      </div>
    );
  }

  const paginate = (newDirection) => {
    setCurrentIndex(([prevIndex]) => {
      const newIndex = (prevIndex + newDirection + words.length) % words.length;
      return [newIndex, newDirection];
    });
  };

  return (
    <div className={styles.cards}>
      <IconBtn
        variant="slider-button"
        icon={prevIcon}
        alt="кнопка назад"
        onClick={() => paginate(-1)}
      />
      <div className={styles["cards__card-and-counter"]}>
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.4 }}
            className={styles["cards__motion-wrapper"]}
          >
            <WordCard word={words[currentIndex]} />
          </motion.div>
        </AnimatePresence>
        <p className={styles.cards__counter}>{`${currentIndex + 1}/${
          words.length
        }`}</p>
      </div>
      <IconBtn
        variant="slider-button"
        icon={nextIcon}
        alt="кнопка вперед"
        onClick={() => paginate(1)}
      />
    </div>
  );
};
