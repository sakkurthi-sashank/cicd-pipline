import { Server } from "http";
import request from "supertest";
import { app } from "../src/index";

let server: Server;

beforeAll(async () => {
  server = app.listen(8080);
});

afterAll((done) => {
  server.close(done);
});

describe("GET /", () => {
  it("should return { Server is running }", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Server is running");
  });
});
