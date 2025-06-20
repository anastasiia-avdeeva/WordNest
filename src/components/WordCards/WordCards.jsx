import React, { useState } from "react";
import { WordCard } from "./WordCard/WordCard";
import styles from "./WordCards.module.scss";
import { IconBtn } from "../UI/IconBtn/IconBtn";
import nextIcon from "../../assets/icons/nextIcon.svg";
import prevIcon from "../../assets/icons/prevIcon.svg";

export const WordCards = ({ words = [], initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (!words.length) {
    return (
      <div className={styles.cards}>
        <p className="error-message">Нет доступных слов для изучения.</p>
      </div>
    );
  }

  const handleNext = () => {
    setCurrentIndex((previousIndex) => (previousIndex + 1) % words.length);
  };
  const handlePrevious = () => {
    setCurrentIndex(
      (previousIndex) => (previousIndex - 1 + words.length) % words.length
    );
  };
  return (
    <div className={styles.cards}>
      <IconBtn
        variant="slider-button"
        icon={prevIcon}
        alt="кнопка назад"
        onClick={handlePrevious}
      />
      <WordCard word={words[currentIndex]} />
      <IconBtn
        variant="slider-button"
        icon={nextIcon}
        alt="кнопка вперед"
        onClick={handleNext}
      />
    </div>
  );
};
