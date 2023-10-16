import styles from "./navigationMobile.module.scss";

type NavigationMobileProps = {
  openNavigation: boolean;
  switchNavigationHandler: () => void;
};

export function NavigationMobile({
  openNavigation,
  switchNavigationHandler,
}: NavigationMobileProps) {
  return (
    <div>
      <div
        className={`${styles["primary-navigation"]} ${
          openNavigation ? styles.open : ""
        }`}
        onClick={switchNavigationHandler}
      >
        <a href="/">2020 Annual Report</a>
        <svg
          className={`${styles.arrow} ${openNavigation ? styles.open : ""}`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
        >
          <path d="M10 15.6L3.7 9.4l1.4-1.4L10 12.8l4.9-4.8 1.4 1.4L10 15.6z" />
        </svg>
      </div>

      <div
        className={`${styles["secondary-navigation"]} ${
          openNavigation ? styles.open : ""
        }`}
      >
        <ul>
          <a href="/financialHighlights">
            <li>Financial Highlights</li>
          </a>
          <a href="/#">
            <li>
              Letter to Shareowners
              <svg
                className={styles["svg-icon"]}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 15.6L3.7 9.4l1.4-1.4L10 12.8l4.9-4.8 1.4 1.4L10 15.6z" />
              </svg>
            </li>
          </a>
          <a href="/#">
            <li>Downloads</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
