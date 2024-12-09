import { Router } from "express";

import {
  deleteBook,
  getAllBooks,
  getOneBook,
  saveBook,
  updateBook,
} from "../controllers/book.controller.js";

const router = Router();
// GET - ALL BOOKS
router.get("/", getAllBooks);

// GET - GET Single Book - books/id
router.get("/:id", getOneBook);

// POST - Save a Book
router.post("/", saveBook);

// PUT - Update a Book

router.put("/:id", updateBook);

// DELETE - removing a book

router.delete("/:id", deleteBook);

export default router;
