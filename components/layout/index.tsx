import React from "react";
import Navbar from "../navbar";
import styles from "./layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
