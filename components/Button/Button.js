import styles from "./Button.module.css";

const Button = ({ text, isRounded, ...restProps }) => {
  return (
    <button type="button" {...restProps} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
