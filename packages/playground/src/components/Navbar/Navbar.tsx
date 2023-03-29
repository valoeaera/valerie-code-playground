// React Imports
import React from "react";
import propTypes from "prop-types";

// Styling, Images, and Colors
import styles from "./Navbar.module.css";

const PageLink = (title: string, link: string) => {
  return <a href={link}>{title}</a>;
};

const Navbar = (pages: object[]) => {
  return (
    <div className={styles["navbar-wrapper"]}>
      <div id="logo-box"></div>
      <div id="pages-box">
        {pages.map((page) => {
          return;
        })}
      </div>
      <div id="links-box"></div>
      <div id="profile-box"></div>
    </div>
  );
};
