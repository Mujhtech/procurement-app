import * as React from "react";
import styles from "./form.module.css";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    {
      className,
      type,

      ...props
    },
    ref
  ) => {
    return (
      <input
        type={type}
        className={`${styles.input} ${className ?? ""}`}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
