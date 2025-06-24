import React from "react";
import { WordTable } from "../../components/WordTable/WordTable";

export const HomePage = ({ words }) => {
  return <WordTable words={words} />;
};
