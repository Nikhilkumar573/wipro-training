const request = require("supertest");
const app = require("../server");

describe("User API Integration Tests", () => {
  it("GET /api/users returns users", async () => {
    const res = await request(app).get("/api/users");
    if (res.status !== 200) throw new Error("Expected status 200");
  });

  it("POST /api/users creates user", async () => {
    const res = await request(app)
      .post("/api/users")
      .send({ username: "john", email: "john@test.com" });

    if (res.status !== 201) throw new Error("Expected status 201");
  });
});
