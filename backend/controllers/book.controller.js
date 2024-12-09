import Book from "../model/books.model.js";

export const getAllBooks = (req, res) => res.send({ message: "All Books" });
export const getOneBook = (req, res) => res.send({ message: "Single Book" });
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

export const updateBook = (req, res) => res.send({ message: "Update a Book" });

export const deleteBook = (req, res) => res.send("Deleting a book");
