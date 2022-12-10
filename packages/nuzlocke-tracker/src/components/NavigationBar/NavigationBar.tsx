// React Imports
import React from "react";

// Style Imports
import styles from "./NavigationBar.module.css";

type NavigationBarProps = {
  pages: { id: string; label: string; path: string }[];
};

const NavigationBar = ({ pages }: NavigationBarProps) => {
  return <nav className={styles["navbar"]}>hiya</nav>;
};

export default NavigationBar;
