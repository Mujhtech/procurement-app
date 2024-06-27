import React from "react";
import styles from "./form.module.css";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={`${styles.textarea} ${className ?? ""}`}
      ref={ref}
      {...props}
    />
  );
});

export { Textarea };
