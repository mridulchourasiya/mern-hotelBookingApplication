import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

import userRoutes from "./routes/users";

//MongoDb Connection
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// route
app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello from Express endpoint!" });
});

// new routes for an update
app.use("/api/users", userRoutes);

//listening port
app.listen(7000, () => {
  console.log("server running on localhost:7000");
});
