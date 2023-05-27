import { InputHTMLAttributes, ReactNode } from "react";
import styles from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  adorment?: ReactNode;
}

const Input = ({ type = "text", adorment = null, ...rest }: InputProps) => {
  return (
    <div className={styles.container}>
      <input type={type} {...rest} />
      {adorment}
    </div>
  );
};

export default Input;
