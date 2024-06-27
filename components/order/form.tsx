"use client";

import React, { useTransition } from "react";
import Input from "@/components/form/input";
import Label from "@/components/form/label";
import { Select } from "@/components/form/select";
import { Textarea } from "@/components/form/textarea";
import Button from "@/components/ui/button";
import styles from "./order.module.css";
import { Order, OrderSchema } from "@/lib/schemas/order";
import { z } from "zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

export default function OrderForm({ order }: { order?: Order }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onSubmit = ({ ...props }: z.infer<typeof OrderSchema>) => {
    startTransition(async () => {
      try {
        const req = await fetch(
          order ? `/api/order/${order.id}` : `/api/orders/create`,
          {
            method: order ? "PUT" : "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(props),
          }
        );

        const data = await req.json();

        alert(data.message);

        router.push("/");
      } catch (error) {
        alert((error as any).message);
      }
    });
  };

  const form = useForm<z.infer<typeof OrderSchema>>({
    resolver: zodResolver(OrderSchema),
    defaultValues: {
      ...order,
    },
  });

  return (
    <form className={styles.form} onSubmit={form.handleSubmit(onSubmit)}>
      <div>
        <Label>Item Name</Label>
        <Input {...form.register("itemName")} />
        {form.formState.errors.itemName && (
          <span>{form.formState.errors.itemName.message}</span>
        )}
      </div>
      <div>
        <Label>Item Detail</Label>
        <Textarea {...form.register("itemDetail")} />
        {form.formState.errors.itemDetail && (
          <span>{form.formState.errors.itemDetail.message}</span>
        )}
      </div>
      <div>
        <Label>Quantity</Label>
        <Input {...form.register("quantity")} />
        {form.formState.errors.quantity && (
          <span>{form.formState.errors.quantity.message}</span>
        )}
      </div>
      <div>
        <Label>Price</Label>
        <Input {...form.register("price")} />
        {form.formState.errors.price && (
          <span>{form.formState.errors.price.message}</span>
        )}
      </div>
      <div>
        <Label>Status</Label>
        <Select {...form.register("status")}>
          <option value="PENDING">Pending</option>
          <option value="COMPLETED">Completed</option>
          <option value="DELIVERED">Delivered</option>
        </Select>
        {form.formState.errors.status && (
          <span>{form.formState.errors.status.message}</span>
        )}
      </div>
      <div>
        <Button className={styles.button} disabled={isPending}>
          Submit
        </Button>
      </div>
    </form>
  );
}
