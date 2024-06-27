import React from "react";
import styles from "./form.module.css";

export default function Label({ children }: { children: React.ReactNode }) {
  return <label className={styles.label}>{children}</label>;
}
