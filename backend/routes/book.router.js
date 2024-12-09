import { Router } from "express";
import Book from "../model/books.model.js";

const router = Router();

// Routes

router.get("/", (req, res) => res.send("Hello Students"));

// GET - ALL BOOKS
router.get("/", (req, res) => res.send({ message: "All Books" }));

// GET - GET Single Book - books/id
router.get("/:id", (req, res) => res.send({ message: "Single Book" }));

// POST - Save a Book
router.post("/", async (req, res) => {
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

router.put("/:id", (req, res) => res.send({ message: "Update a Book" }));

// DELETE - removing a book

router.delete("/:id", (req, res) => res.send("Deleting a book"));

export default router;
