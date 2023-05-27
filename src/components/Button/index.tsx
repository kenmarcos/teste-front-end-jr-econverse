import { ButtonHTMLAttributes } from "react";

import styles from "./button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className = "default", ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={styles[className]}>
      {children}
    </button>
  );
};

export default Button;
