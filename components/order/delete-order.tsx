"use client";

import { useRouter } from "next/navigation";
import React from "react";
import DeleteIcon from "../icons/delete";
import Button from "../ui/button";

async function deleteOrder(id: number) {
  const response = await fetch(`http://localhost:3000/api/order/${id}`, {
    method: "DELETE",
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
}

export default function DeleteOrder({ id }: { id: number }) {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        confirm("Are you sure you want to delete this order?") &&
          deleteOrder(id!);
        router.push("/");
      }}
    >
      <DeleteIcon />
    </Button>
  );
}
