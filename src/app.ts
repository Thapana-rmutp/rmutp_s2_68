import { Hono } from "hono"

const app = new Hono();

// operation
// CRUD
app.get("/", (c) => c.text("HELLO WORLD"));

export default app;