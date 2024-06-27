import React from "react";
import styles from "./table.module.css";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className={`${styles.responsive} ${className}`}>
    <table ref={ref} className={styles.table} {...props} />
  </div>
));

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={styles.tableheader} {...props} />
));

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={styles.tablebody} {...props} />
));

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={`${styles.tablerow} ${className ?? ""}`}
    {...props}
  />
));

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th ref={ref} className={styles.tablehead} {...props} />
));

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ ...props }, ref) => (
  <td ref={ref} className={styles.tablecell} {...props} />
));

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };
