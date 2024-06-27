import { OrderSchema } from "@/lib/schemas/order";
import { NextResponse } from "next/server";
import { createOrder } from "../../_order";

export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.json();
  const parsed = OrderSchema.parse(body);

  await createOrder(parsed);

  return NextResponse.json({
    success: true,
    message: "Order created successfully.",
  });
}
