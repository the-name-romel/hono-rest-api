import { Hono } from "hono";
import { auth } from "./lib/auth";

const app = new Hono();

app
  .on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw))
  .get("/", (c) => c.text("Welcome to Hono REST API!"));

export default app;
