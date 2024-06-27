import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.h1}>Procurement App</h1>
      <div>
        <Link href="/order" className={styles.link}>
          Create New Order
        </Link>
      </div>
    </div>
  );
}
