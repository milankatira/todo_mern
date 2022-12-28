import { connectDb } from "./config/db";
import express from "express";
import userRoutes from './src/user/user.routes';
import todoRoutes from './src/todo/todo.routes';
import cors from 'cors'
const app = express();

import * as dotenv from "dotenv";

dotenv.config();

app.use(express.json());

app.use(cors());

app.use("/api", [userRoutes, todoRoutes]);

app.get("/", (req, res) => {
  res.send("api working fine");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await connectDb();
  console.log(`listening on port ${PORT} `);
});
