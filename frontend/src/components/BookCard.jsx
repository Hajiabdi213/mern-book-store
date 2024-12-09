import { FiTrash, FiEdit } from "react-icons/fi";
import { CgMoreO } from "react-icons/cg";
import { useBookStore } from "../store/book.store";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { useState } from "react";

import UpdateBookModal from "./UpdateBookModal";

const BookCard = ({ book }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedBook, setUpdatedBook] = useState(book);

  const { deleteBook, updateBook } = useBookStore();

  const handleDelete = (bookId) => {
    confirmAlert({
      title: "Confirm Deletion",
      message: "Are you sure you want to delete this Book?",
      buttons: [
        {
          label: "Yes I'm Sure",
          onClick: async () => {
            const { success } = await deleteBook(bookId);
            if (success) {
              console.log("Book Deleted Successfully");
            } else {
              console.log("Failed to delete the Book");
            }
          },
        },
        { label: "No, Cancel the deletion", onClick: () => {} },
      ],
    });
  };

  const handleUpdateBook = async () => {
    await updateBook(book._id, updatedBook);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-blue-50 rounded-xl shadow-md p-4">
      <img
        src={book.cover_image}
        alt={book.title}
        className="w-full rounded-lg"
      />
      <h2 className="text-2xl font-bold font-mono text-blue-800 flex justify-between py-2">
        <span>Title: {book.title}</span>
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
      </div>
      <hr className="bg-blue-100 h-[2px]" />
      <div className="flex items-center gap-6 my-3">
        <button className="text-xl text-red-700 hover:text-red-800">
          <span className="flex items-center gap-2">
            <CgMoreO />
            More
          </span>
        </button>
        <button
          className="text-xl text-red-700 hover:text-red-800"
          onClick={() => {
            setUpdatedBook(book);
            setIsModalOpen(true);
          }}
        >
          <span className="flex items-center gap-2">
            <FiEdit />
            Edit
          </span>
        </button>
        <button
          onClick={() => handleDelete(book._id)}
          className="text-xl text-red-700 hover:text-red-800"
        >
          <span className="flex items-center gap-2">
            <FiTrash />
            Delete
          </span>
        </button>
      </div>

      <UpdateBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        updatedBook={updatedBook}
        setUpdatedBook={setUpdatedBook}
        onUpdate={handleUpdateBook}
      />
    </div>
  );
};

export default BookCard;
