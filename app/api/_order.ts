import { Order, OrdersDataSchema } from "@/lib/schemas/order";
import path from "path";
import fsPromises from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const orderFilePath = path.join(process.cwd(), "/app/api/orders.json");

const querySchema = z.object({
  id: z.string({ required_error: "order id is required" }),
});

export async function getOrders() {
  const jsonData = await fsPromises.readFile(orderFilePath, "utf8");
  const orders = OrdersDataSchema.parse(JSON.parse(jsonData));

  return orders;
}

export async function getOrder(id: number) {
  const orders = await getOrders();

  const order = orders.find((order) => order.id == id);

  if (!order) {
    throw NextResponse.json(
      {
        message: "Order not found.",
      },
      {
        status: 404,
      }
    );
  }

  return order;
}

export async function deleteOrder(id: number) {
  const order = await getOrder(id);
  const orders = await getOrders();

  const updatedOrders = orders.filter((data) => data.id !== order.id);

  await fsPromises.writeFile(orderFilePath, JSON.stringify(updatedOrders));

  return true;
}

export async function updateOrder(id: number, updatedOrder: Order) {
  const order = await getOrder(id);
  const orders = await getOrders();

  const updatedOrders = orders.map((data) => {
    if (data.id === order.id) {
      return updatedOrder;
    }

    return data;
  });

  await fsPromises.writeFile(orderFilePath, JSON.stringify(updatedOrders));

  return true;
}

export async function createOrder(order: Order) {
  const orders = await getOrders();

  // Generate a unique ID for the order
  const ids = orders.map((order) => (order.id != undefined ? order.id : 0));
  const maxId = Math.max(...ids!);

  // Generate order number
  const orderNo = `ORD-${maxId + 1}`;

  orders.push({ ...order, id: maxId + 1, orderNo: orderNo });

  await fsPromises.writeFile(orderFilePath, JSON.stringify(orders));

  return true;
}
