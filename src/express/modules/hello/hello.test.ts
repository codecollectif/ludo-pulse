import express from "express";
import request from "supertest";

import routes from "../../routes";

const app = express();
app.use(routes);

describe("Hello API", () => {
  it("should return hello world", async () => {
    const response = await request(app).get("/api/hello");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "hello, world!" });
  });
});
