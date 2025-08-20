import { convertCurrency } from "../src/utils/currencyConverter.js";
import axios from "axios";
import { vi, test, expect } from "vitest";

vi.mock("axios");

test("converts currency successfully", async () => {
  axios.get.mockResolvedValue({ data: { result: 100 } });
  const result = await convertCurrency(1, "USD", "EUR");
  expect(result).toBe(100);
});

test("returns null on error", async () => {
  axios.get.mockRejectedValue(new Error("fail"));
  const result = await convertCurrency(1, "USD", "EUR");
  expect(result).toBeNull();
});
