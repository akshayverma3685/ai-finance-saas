import request from "supertest";
import app from "../src/index.js";

describe("Expenses API", () => {
  let token;

  beforeAll(async () => {
    const login = await request(app).post("/api/auth/login").send({
      email: "test@example.com",
      password: "123456",
    });
    token = login.body.token;
  });

  it("should add a new expense", async () => {
    const res = await request(app)
      .post("/api/expenses")
      .set("Authorization", `Bearer ${token}`)
      .send({ amount: 500, category: "Food", description: "Pizza" });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("_id");
  });

  it("should fetch expenses", async () => {
    const res = await request(app)
      .get("/api/expenses")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
