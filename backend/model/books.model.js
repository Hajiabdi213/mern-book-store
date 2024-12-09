import mongoose from "mongoose";

// The Book Schema
const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String },
    language: { type: String, required: true },
    cover_image: { type: String },
    price: { type: Number, required: true },
  },
  { timestamps: true } // this adds the 2 fields (createdAt, Updated At)
);

// The Book Model
const Book = mongoose.model("Book", bookSchema);
export default Book;
