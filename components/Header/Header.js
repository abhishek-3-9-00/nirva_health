import styles from "./Header.module.css";

const LIST_ITEMS = [
  "Mauris pellentesque congue libero nec",
  "Suspendisse mollis tincidunt",
  "Praesent varius justo vel justo pulvinar",
];

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.header__left}>
        <h2>Ayurveda and Therapeutic Yoga to help your body heal!</h2>
        <p>lrem ipsum lrem ipsum lrem ipsum lrem ipsum</p>
        {LIST_ITEMS.map((each, key) => (
          <div className={styles.header__left__list}>
            <div className={styles.list__item}>{each}</div>
          </div>
        ))}
      </div>
      <div className={styles.header__right}>
        <div className={styles.right__header}>
          <span>Hurry up!</span>
          <div className={styles.timer}>
            <div className={styles.timer__div}>
              <span>05</span>
              <span>Day</span>
            </div>
            <div className={styles.timer__div}>
              <span>08</span>
              <span>Hour</span>
            </div>
            <div className={styles.timer__div}>
              <span>03</span>
              <span>Min</span>
            </div>
            <div className={styles.timer__div}>
              <span>02</span>
              <span>Sec</span>
            </div>
          </div>
        </div>
        <div className={styles.right__form}>
          <h1>Join our workshop</h1>
          <p>90 min workshop to improve your body naturally fro free</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
