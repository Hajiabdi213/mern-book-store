import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Book from "./model/books.model.js";
dotenv.config();
const app = express();
app.use(express.json()); // this allows that we can send JSON data to the server
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
app.post("/api/books", async (req, res) => {
  // let's get the data we want to save from req.body
  const book = req.body;
  // let's check if all fields are filled
  if (!book.title || !book.price || !book.author || !book.language) {
    return res
      .status(400)
      .send({ success: false, message: "Please fill all the fields" });
  }

  // let's save the book
  const newBook = new Book(book);
  try {
    await newBook.save();
    res.status(201).send({
      success: true,
      data: newBook,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: `Error - ${error}` });
  }
});

// PUT - Update a Book

app.put("/api/books/:id", (req, res) => res.send({ message: "Update a Book" }));

// DELETE - removing a book

app.delete("/api/books/:id", (req, res) => res.send("Deleting a book"));
