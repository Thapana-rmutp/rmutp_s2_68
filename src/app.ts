import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Hello World"));
app.get("/profile", (C) => C.text("profile"));

export default app;