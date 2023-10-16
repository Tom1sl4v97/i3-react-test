import style from "./navigation.module.scss";
import logoData from "../../assets/images/p&g.png";
import Link from "next/link";

export function Navigation() {
  return (
    <nav className={style.navigation}>
      <div className={style["navigation-container"]}>
        <div className={style["navigation-container-item"]}>
          <a href="/" className={style["navigation-container-item-chield"]}>
            2020 Annual Report
          </a>
          <a
            href="/financialHighlights"
            className={style["navigation-container-item-chield"]}
          >
            Financial Highlights
          </a>
        </div>

        <div className="navigation-container-image">
          <img
            className={style["navigation-container-image-logo"]}
            src={logoData.src}
            alt="P&G Logo"
          />
        </div>

        <div className={style["navigation-container-item"]}>
          <a href="/#" className={style["navigation-container-item-chield"]}>
            Letter to Shareowners
            <svg
              className={style["svg-icon"]}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 15.6L3.7 9.4l1.4-1.4L10 12.8l4.9-4.8 1.4 1.4L10 15.6z" />
            </svg>
          </a>
          <a href="/#" className={style["navigation-container-item-chield"]}>
            Downloads
          </a>
        </div>
      </div>
    </nav>
  );
}
