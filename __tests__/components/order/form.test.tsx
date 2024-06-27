/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";

async function deleteOrder(id: number) {
  const response = await fetch(`http://localhost:3000/api/order/${id}`, {
    method: "DELETE",
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
}

describe("deleteOrder", () => {
  // successfully deletes an order with a valid ID
  it("should delete the order when a valid ID is provided", async () => {
    const mockResponse = { success: true };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    ) as jest.Mock;

    const result = await deleteOrder(1);
    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/api/order/1", {
      method: "DELETE",
      cache: "no-cache",
    });
  });

  // attempts to delete an order with an invalid ID
  it("should handle error when an invalid ID is provided", async () => {
    const mockErrorResponse = { error: "Order not found" };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockErrorResponse),
      })
    ) as jest.Mock;

    const result = await deleteOrder(-1);
    expect(result).toEqual(mockErrorResponse);
    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/api/order/-1", {
      method: "DELETE",
      cache: "no-cache",
    });
  });
});
