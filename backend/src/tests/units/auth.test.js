import request from "supertest";
import mongoose from "mongoose";
import app from "../../app.js";

describe("Auth API", () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should register a new user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Test User",
        email: "testuser@example.com",
        password: "testpassword",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("token");
    expect(res.body).toHaveProperty("user");
  });

  it("should login with admin credentials", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "akshayverma3685@gmail.com",   // ✅ तेरा email
        password: "Akshay@3686#v@#",          // ✅ तेरा password
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
    expect(res.body).toHaveProperty("user");
    expect(res.body.user).toHaveProperty("role", "admin");
  });
});
