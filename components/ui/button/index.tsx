import React from "react";
import styles from "./button.module.css";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ ...props }, ref) => {
  return (
    <button
      className={`${styles.button} ${props.className ?? ""}`}
      ref={ref}
      {...props}
    />
  );
});

export default Button;
