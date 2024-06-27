import React from "react";
import { Card, CardHeader } from "@/components/card";
import { OrderSchema } from "@/lib/schemas/order";
import Badge from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import styles from "./style.module.css";
import Link from "next/link";
import EditIcon from "@/components/icons/edit";
import DeleteOrder from "@/components/order/delete-order";

async function fetchOrder(id: number) {
  const response = await fetch(`http://localhost:3000/api/order/${id}`, {
    method: "GET",
    cache: "no-cache",
  });
  const data = await response.json();
  return OrderSchema.parse(data);
}

export default async function Page({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const order = await fetchOrder(params.id);

  return (
    <Card>
      <CardHeader>
        <h3>Order #{order.orderNo}</h3>
        <p>View order details.</p>
      </CardHeader>
      <Table className={styles.responsive}>
        <TableHeader>
          <TableRow>
            <TableHead>Item.</TableHead>
            <TableHead>Quantity.</TableHead>
            <TableHead>Status.</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className={styles.tabledata}>
            <TableCell>{order.itemName}</TableCell>
            <TableCell>{order.quantity}</TableCell>
            <TableCell>
              <Badge>{order.status}</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className={styles.more}>
        <div className={styles.info}>
          <div className={styles.subtotal}>
            <span>Subtotal</span>
            <span>{order.quantity * order.price}</span>
          </div>
          <div className={styles.total}>
            <span>Total</span>
            <span>{order.quantity * order.price}</span>
          </div>
          <div className={styles.actions}>
            <Link href={`/order/${order.id}/edit`} className={`${styles.link}`}>
              <EditIcon />
            </Link>
            <DeleteOrder id={order.id!} />
          </div>
        </div>
      </div>
    </Card>
  );
}
