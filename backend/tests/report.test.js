import request from "supertest";
import app from "../src/index.js";

describe("Report API", () => {
  it("should generate a PDF report", async () => {
    const res = await request(app)
      .post("/api/report/generate")
      .send({ month: "2025-08" });

    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toBe("application/pdf");
  });
});
