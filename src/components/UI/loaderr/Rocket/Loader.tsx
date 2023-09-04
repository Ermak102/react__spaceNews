import React from "react";

import { BsRocketFill } from "react-icons/bs";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.animation}>
        <BsRocketFill size={50} />
      </div>
    </div>
  );
};

export default Loader;
