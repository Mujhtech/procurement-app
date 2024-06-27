import React from "react";
import styles from "./card.module.css";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.card}>{children}</div>;
};

const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.cardheader}>{children}</div>;
};

export { Card, CardHeader };
