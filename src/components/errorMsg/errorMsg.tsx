import { useState } from "react";

import styles from "./errorMsg.module.scss";

export function ErrorMsg({ errorMsg }: { errorMsg: string }) {
  const [isClosed, setIsClosed] = useState(false);

  const closeHandler = () => {
    setIsClosed(true);
  };

  return !isClosed ? (
    <div className={styles["error-msg"]}>
      {errorMsg}
      <div className={styles["close-icon"]} onClick={closeHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
    </div>
  ) : null;
}
