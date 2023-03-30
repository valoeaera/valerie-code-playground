// React Imports
import React from "react";
import { NavLink } from "react-router-dom";

// Styling, Images, and Colors
import styles from "./Navbar.module.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import Github from "../../assets/github.svg";
import LinkedIn from "../../assets/linkedin.svg";
import YouTube from "../../assets/youtube.svg";

const Navbar = (props: {
  pages: { title: string; url: string; component: any }[];
}) => {
  return (
    <nav className={styles["navbar-wrapper"]}>
      <div id={styles["logo-box"]}>
        <FontAwesomeIcon icon={faFeatherAlt} />
      </div>
      <div id={styles["pages-box"]}>
        {props.pages.map((page: { title: string; url: string }) => {
          return (
            <NavLink
              key={page.title}
              to={page.url}
              className={({ isActive }) =>
                isActive ? styles["active-link"] : styles["inactive-link"]
              }>
              {page.title}
            </NavLink>
          );
        })}
      </div>
      <div id={styles["links-box"]}>
        <a
          href="https://www.youtube.com/channel/UCn1CamoVUxvC-DDvyDxq0Ew"
          target="_blank"
          rel="noreferrer">
          <img alt="youtube" src={YouTube}></img>
        </a>
        <a href="https://github.com/valoeaera" target="_blank" rel="noreferrer">
          <img alt="github" src={Github}></img>
        </a>
        <a
          href="https://www.linkedin.com/in/val-roudebush/"
          target="_blank"
          rel="noreferrer">
          <img alt="linkedin" src={LinkedIn}></img>
        </a>
      </div>
      <div id={styles["profile-box"]}></div>
    </nav>
  );
};

export default Navbar;
