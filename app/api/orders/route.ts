import { NextResponse } from "next/server";
import { getOrders } from "../_order";

export async function GET(request: Request): Promise<NextResponse> {
  const orders = await getOrders();

  return NextResponse.json(orders);
}
