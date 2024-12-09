import { FiTrash, FiEdit } from "react-icons/fi";
import { FaRegWindowClose } from "react-icons/fa";

import { CgMoreO } from "react-icons/cg";
import { useBookStore } from "../store/book.store";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

const BookCard = ({ book }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [updatedBook, setUPdatedBook] = useState(book);

  const { deleteBook } = useBookStore();
  const handleDelete = (bookId) => {
    confirmAlert({
      title: "Confirm Deletion",
      message: "Are you sure you want to delete this Book?",
      buttons: [
        {
          label: "Yes I'm Sure",
          onClick: async () => {
            const { success, message } = await deleteBook(bookId);
            if (success) {
              console.log("Book Deleted Succesfully");
            } else {
              console.log("Failed to delete the Book");
            }
          },
        },
        {
          label: "No, Cancel the deletion",
          onClick: () => {
            console.log("Deletion canceled.");
          },
        },
      ],
    });
  };
  return (
    <div className="bg-blue-50 rounded-xl shadow-md p-4">
      <img
        src={book.cover_image}
        alt={book.title}
        className="w-full rounded-lg"
      />
      <h2 className="text-2xl font-bold font-mono  text-blue-800 flex justify-between py-2">
        <span> Title: {book.title}</span>
        <span>Price: {book.price}</span>
      </h2>
      <hr className="bg-blue-100 h-[2px]" />
      <div className="py-4">
        <h2 className="text-lg text-blue-950 font-mono">
          Author: {book.author}
        </h2>
        <h2 className="text-lg text-blue-950 font-mono">
          Language: {book.language}
        </h2>
        <h2 className="text-lg text-blue-950 font-mono">
          Uploaded: {book.createdAt}
        </h2>
        <h2 className="text-lg text-blue-950 font-mono">
          Updated: {book.updatedAt}
        </h2>
      </div>
      <hr className="bg-blue-100 h-[2px]" />
      <div className="flex items-center gap-6 my-3">
        <button className="text-xl mr-2 text-red-700 hover:text-red-800 transition-all duration-300">
          <span className="flex items-center gap-2">
            <CgMoreO />
            More
          </span>
        </button>
        <button className="text-xl mr-2 text-red-700 hover:text-red-800 transition-all duration-300">
          {" "}
          <span
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2"
          >
            <FiEdit />
            Edit
          </span>
        </button>
        <button
          onClick={() => handleDelete(book._id)}
          className="text-xl mr-2 text-red-700 hover:text-red-800 transition-all duration-300"
        >
          <span className="flex items-center gap-2">
            <FiTrash />
            Delete
          </span>
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Example Modal"
        className="max-w-[800px]  mx-auto my-auto bg-blue-50  mt-20 p-10 rounded-lg"
      >
        {/* Header */}
        <div className="flex justify-between">
          <h2 className="text-center text-2xl text-blue-900 font-semibold py-2 ">
            Update Course
          </h2>

          <button onClick={() => setIsModalOpen(false)}>
            <FaRegWindowClose className="text-2xl font-bold text-red-800" />
          </button>
        </div>
        <hr className="my-4" />
        {/* Content */}
        <div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="title"
              placeholder="Book Title"
              className="p-2 rounded "
              value={updatedBook.title}
            />
            <input
              type="text"
              name="author"
              placeholder="Author Name"
              className="p-2 rounded "
              value={updatedBook.author}
            />
            <input
              type="text"
              name="language"
              placeholder="Language"
              className="p-2 rounded "
              value={updatedBook.language}
            />
            <input
              type="text"
              name="price"
              placeholder="Book Price"
              className="p-2 rounded "
              value={updatedBook.price}
            />
            <input
              type="text"
              name="image"
              placeholder="Cover Image URL"
              className="p-2 rounded "
              value={updatedBook.cover_image}
            />
            <textarea
              className="p-2 rounded "
              placeholder="Book Description"
              rows="4"
              value={updatedBook.description}
            ></textarea>
          </div>
        </div>
        {/* Footer */}
        <div className="flex flex-col sm:flex-row  gap-5 mt-4">
          <button className="p-2 sm:w-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 font-bold text-gray-700 rounded">
            Update
          </button>
          <button className="p-2 sm:w-1/2 bg-gradient-to-r from-red-200 to-red-500 font-bold text-gray-700 rounded">
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default BookCard;
