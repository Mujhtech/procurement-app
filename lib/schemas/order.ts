import { z } from "zod";

export const OrderSchema = z.object({
  id: z.preprocess(
    (args) => (args === "" || args === "0" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "ID must be a number",
        required_error: "ID is required.",
      })
      .positive("ID must be positive")
      .optional()
  ),
  orderNo: z.string().optional(),
  itemName: z.string(),
  itemDetail: z.string().optional(),
  quantity: z.preprocess(
    (args) => (args === "" || args === "0" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "Quantity must be a number",
        required_error: "Quantity is required.",
      })
      .positive("Quantity must be positive")
  ),
  price: z.preprocess(
    (args) => (args === "" || args === "0" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "Price must be a number",
        required_error: "Price is required.",
      })
      .positive("Price must be positive")
  ),
  status: z.enum(["PENDING", "COMPLETED", "DELIVERED"]).default("PENDING"),
});

export const OrdersDataSchema = z.array(OrderSchema);

export type Order = z.infer<typeof OrderSchema>;
