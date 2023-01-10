import styles from "./Navigation.module.css";
import Button from "../Button/Button";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.nav__image}>Nirva</div>
      <div className={styles.nav__info}>
        <div className={styles.nav__info__left}>
          <p>Workshop on</p>
          <span>18th September 2022, at 6:00 PM BST</span>
        </div>
        <div className={styles.nav__info__right}>
          <Button text="Book Now" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
