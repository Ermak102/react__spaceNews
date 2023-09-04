import React from "react";

import styles from "./ErrorPage.module.scss";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const redirectToHomePage = () => {
    navigate("/");
  };

  return (
    <div className={styles.error}>
      <div className="container">
        <img src="./assets/error.png" alt="something" />
        <div>
          <div className={styles.title}>Please, redirect to home page</div>
          <button className="button" onClick={() => redirectToHomePage()}>
            Redirect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
