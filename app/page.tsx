import DeleteIcon from "@/components/icons/delete";
import EditIcon from "@/components/icons/edit";
import EyeIcon from "@/components/icons/eye";
import DeleteOrder from "@/components/order/delete-order";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrdersDataSchema } from "@/lib/schemas/order";
import Link from "next/link";
import styles from "./styles.module.css";

async function fetchOrders() {
  const response = await fetch("http://localhost:3000/api/orders", {
    method: "GET",
    cache: "no-cache",
  });
  const data = await response.json();
  return OrdersDataSchema.parse(data);
}

export default async function Page() {
  const orders = await fetchOrders();

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order No.</TableHead>
            <TableHead>Item.</TableHead>
            <TableHead>Quantity.</TableHead>
            <TableHead>Status.</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.length === 0 && (
            <TableRow>
              <TableCell colSpan={5} className={styles["text-center"]}>
                No orders found.
              </TableCell>
            </TableRow>
          )}
          {orders.map((order, index) => (
            <TableRow className={styles.tabledata} key={index}>
              <TableCell>{order.orderNo}</TableCell>
              <TableCell>{order.itemName}</TableCell>
              <TableCell>{order.quantity}</TableCell>
              <TableCell>
                <Badge>{order.status}</Badge>
              </TableCell>
              <TableCell className={styles.action}>
                <Link
                  href={`/order/${order.id}`}
                  className={`${styles.link} ${styles.p6}`}
                >
                  <EyeIcon />
                </Link>
                <Link
                  href={`/order/${order.id}/edit`}
                  className={`${styles.link} ${styles.p6}`}
                >
                  <EditIcon />
                </Link>
                <DeleteOrder id={order.id!} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
