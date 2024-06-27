import { Card, CardHeader } from "@/components/card";
import OrderForm from "@/components/order/form";
import React from "react";

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <h3>New Order</h3>
        <p>Fill out the form to place your order.</p>
      </CardHeader>
      <OrderForm />
    </Card>
  );
}
