import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = new Hono();

app.get("/", (c) => c.text("Hello World Today!"));
app.get("/profile", async (c) => {
    //get data from db
    const profiles = await prisma.profile.findMany();
    //response
    return c.json({
        message: "get data completed",
        data: profiles
    }, 200);
});
app.post("/profile", async (c) => {
  try {
    const body = await c.req.json();
    console.log("Body received:", body);

    const newProfile = await prisma.profile.create({
      data: {
        username: body.username,
        password: body.password,
        mobile: body.mobile,
        cardId: body.cardId,
      },
    });

    return c.json({
      message: "Profile created successfully",
      data: newProfile,
    }, 201);
  } catch (error: any) {
    console.error("Error creating profile:", error);
    return c.json({ message: "Failed to create profile", error: error.message }, 500);
  }
});

export default app;