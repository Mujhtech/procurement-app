import { Card, CardHeader } from "@/components/card";
import OrderForm from "@/components/order/form";
import { OrderSchema } from "@/lib/schemas/order";
import React from "react";

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
        <h3>Edit Order</h3>
        <p>Fill out the form to place your order.</p>
      </CardHeader>
      <OrderForm order={order} />
    </Card>
  );
}
