// React Imports
import React from "react";

// Styling, Images, and Colors
import styles from "./Navbar.module.css";

const PageLink = (props: { title: string; url: string }) => {
  return <a href={props.url}>{props.title}</a>;
};

const Navbar = (props: {
  pages: { title: string; url: string; component: any }[];
}) => {
  return (
    <nav className={styles["navbar-wrapper"]}>
      <div id="logo-box"></div>
      <div id="pages-box">
        {props.pages.map((page: { title: string; url: string }) => {
          return (
            <PageLink key={page.title} title={page.title} url={page.url} />
          );
        })}
      </div>
      <div id="links-box"></div>
      <div id="profile-box"></div>
    </nav>
  );
};

export default Navbar;
