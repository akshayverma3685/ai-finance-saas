import request from "supertest";
import app from "../src/index.js";

describe("AI Insights API", () => {
  it("should return AI insights for expenses", async () => {
    const res = await request(app).post("/api/ai/insights").send({
      expenses: [{ amount: 200, category: "Food" }, { amount: 1000, category: "Rent" }],
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("insights");
  });
});
