const request = require("supertest");
const app = require("../server");
const { expect } = require("chai");

describe("Course API Unit Tests", () => {
  
  it("GET /api/courses should return all courses", async () => {
    const res = await request(app).get("/api/courses");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("POST /api/courses should add new course", async () => {
    const res = await request(app)
      .post("/api/courses")
      .send({ name: "Node.js", duration: "4 weeks" });
    
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("name", "Node.js");
  });
  
});
