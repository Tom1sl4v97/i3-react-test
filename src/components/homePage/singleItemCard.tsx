import styles from "./singleItemCard.module.scss";

export function SingleItemCard({ item }: any) {
  const circleStyle = item.image ? { backgroundImage: `url(${item.image})` } : {};

  return (
    <div className={styles.card}>
      <div className={styles.circle} style={circleStyle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="180"
          height="180"
          viewBox="0 0 180 180"
        >
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
            className={styles["circle-text"]}
          >
            {item.percentage}
          </text>
        </svg>
      </div>
      <div className={styles.text}>
        {item.name}
      </div>
    </div>
  );
}
