import mongoose from "mongoose";
import Book from "../model/books.model.js";

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).send({ success: true, data: books });
  } catch (error) {
    res.status(500).send({ success: false, message: `Error ${error.message}` });
  }
};
export const getOneBook = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ success: false, message: "invalid  id" });
  }

  try {
    const book = await Book.findById(id);
    res.status(200).send({ success: true, data: book });
  } catch (error) {
    res.status(404).send({ success: false, message: `error ${error.message}` });
  }
};
export const saveBook = async (req, res) => {
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
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const newBook = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ success: false, message: "invalid  id" });
  }

  try {
    const book = await Book.findByIdAndUpdate(id, newBook, { new: true });
    res.status(200).send({ success: true, updatedBook: book });
  } catch (error) {
    res.status(404).send({ success: false, message: `error ${error.message}` });
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ success: false, message: "invalid  id" });
  }

  try {
    await Book.findByIdAndDelete(id);
    res
      .status(200)
      .send({ success: true, message: "book deleted successfully" });
  } catch (error) {
    res.status(404).send({ success: false, message: `error ${error.message}` });
  }
};
