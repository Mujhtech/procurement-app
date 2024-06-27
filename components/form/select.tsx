import * as React from "react";
import styles from "./form.module.css";

const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, ...props }, ref) => {
  return (
    <select
      className={`${styles.select} ${className ?? ""}`}
      ref={ref}
      {...props}
    />
  );
});

export { Select };
