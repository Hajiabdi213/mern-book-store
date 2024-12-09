import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`server is running at http://localhost:${PORT}`);
});

// Routes

app.get("/", (req, res) => res.send("Hello Students"));

// GET - ALL BOOKS
app.get("/api/books", (req, res) => res.send({ message: "All Books" }));

// GET - GET Single Book - books/id
app.get("/api/books/:id", (req, res) => res.send({ message: "Single Book" }));

// POST - Save a Book
app.post("/api/books", (req, res) => res.send({ message: "Save a Book" }));

// PUT - Update a Book

app.put("/api/books/:id", (req, res) => res.send({ message: "Update a Book" }));

// DELETE - removing a book

app.delete("/api/books/:id", (req, res) => res.send("Deleting a book"));
