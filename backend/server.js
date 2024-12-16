import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import bookRouter from "./routes/book.router.js";
import cors from "cors";
import path from "path";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json()); // this allows that we can send JSON data to the server

app.use("/api/books", bookRouter);

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}
app.listen(PORT, () => {
  connectDB();
  console.log(`server is running at http://localhost:${PORT}`);
});
