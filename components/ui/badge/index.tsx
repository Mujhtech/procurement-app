import React from "react";
import styles from "./badge.module.css";

export default function Badge({ children }: { children: React.ReactNode }) {
  return <div className={`${styles.badge}`}>{children}</div>;
}
