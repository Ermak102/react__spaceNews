import React from "react";
import { NavLink } from "react-router-dom";

import { BsFillBookmarkHeartFill } from "react-icons/bs";
import styles from "./Navbar.module.scss";
import { useAppSelector } from "../../../hooks/store";

const Navbar = () => {

  const {favorites} = useAppSelector(state => state.favorites)

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles["image-wrapper"]}>
            <img src="./assets/logo.png" alt="something"></img>
          </div>
          <nav className={styles.navigation}>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Home
            </NavLink>
            <NavLink
              to={"/favorites"}
              className={({ isActive }) =>
                styles.mark + " " + (isActive ? styles.active : "")
              }
            >
              <div className={styles.counter}>{favorites.length}</div>
              <BsFillBookmarkHeartFill size={18} />
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
