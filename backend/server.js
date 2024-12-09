import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import bookRouter from "./routes/book.router.js";

dotenv.config();
const app = express();

app.use(express.json()); // this allows that we can send JSON data to the server

app.use("/api/books", bookRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`server is running at http://localhost:${PORT}`);
});
