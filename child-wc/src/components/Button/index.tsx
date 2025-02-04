import styles from "./Button.module.css";

interface ButtonProps {
  title?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

function Button({ onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.button}>
      Change page
    </button>
  );
}

export default Button;
