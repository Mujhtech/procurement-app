import { OrderSchema } from "@/lib/schemas/order";
import { NextRequest, NextResponse } from "next/server";
import { deleteOrder, getOrder, updateOrder } from "../../_order";

export async function GET(
  request: NextRequest,
  context: {
    params: {
      id: number;
    };
  }
): Promise<NextResponse> {
  try {
    const order = await getOrder(context.params.id);

    return NextResponse.json(order);
  } catch (e) {
    return e as NextResponse;
  }
}

export async function DELETE(
  request: NextRequest,
  context: {
    params: {
      id: number;
    };
  }
): Promise<NextResponse> {
  try {
    await deleteOrder(context.params.id);

    return NextResponse.json({
      success: true,
      message: "Order deleted successfully.",
    });
  } catch (e) {
    return e as NextResponse;
  }
}

export async function PUT(
  request: NextRequest,
  context: {
    params: {
      id: number;
    };
  }
): Promise<NextResponse> {
  try {
    const body = await request.json();
    const parsed = OrderSchema.parse(body);

    await updateOrder(context.params.id, parsed);

    return NextResponse.json({
      success: true,
      message: "Order updated successfully.",
    });
  } catch (e) {
    return e as NextResponse;
  }
}
