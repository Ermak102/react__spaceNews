import React, { FC } from "react";

import { BiErrorAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./ErrorModal.module.scss";

interface IErrorModal {
  error: string;
  hideError: void;
}

const ErrorModal: FC<IErrorModal> = ({ error, hideError }) => {
  return (
    <div className={styles.error}>
      <AiOutlineClose
        className={styles.close}
        size={18}
        onClick={() => hideError}
      />
      <div className={styles.wrapper}>
        <BiErrorAlt size={40} color="red" />
        <div className={styles.info}>
          <div className={styles.title}>Error</div>
          <div className={styles.subtitle}>{error}</div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
