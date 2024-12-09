import React from "react";
import Modal from "react-modal";
import { FaRegWindowClose } from "react-icons/fa";

Modal.setAppElement("#root");

const UpdateBookModal = ({
  isOpen,
  onClose,
  updatedBook,
  setUpdatedBook,
  onUpdate,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Edit Book Modal"
      className="max-w-[800px] mx-auto my-auto bg-blue-50 mt-20 p-10 rounded-lg"
    >
      {/* Header */}
      <div className="flex justify-between">
        <h2 className="text-center text-2xl text-blue-900 font-semibold py-2 ">
          Update Book
        </h2>
        <button onClick={onClose}>
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
            className="p-2 rounded"
            value={updatedBook.title || ""}
            onChange={(e) =>
              setUpdatedBook({ ...updatedBook, title: e.target.value })
            }
          />
          <input
            type="text"
            name="author"
            placeholder="Author Name"
            className="p-2 rounded"
            value={updatedBook.author || ""}
            onChange={(e) =>
              setUpdatedBook({ ...updatedBook, author: e.target.value })
            }
          />
          <input
            type="text"
            name="language"
            placeholder="Language"
            className="p-2 rounded"
            value={updatedBook.language || ""}
            onChange={(e) =>
              setUpdatedBook({ ...updatedBook, language: e.target.value })
            }
          />
          <input
            type="text"
            name="price"
            placeholder="Book Price"
            className="p-2 rounded"
            value={updatedBook.price || ""}
            onChange={(e) =>
              setUpdatedBook({ ...updatedBook, price: e.target.value })
            }
          />
          <input
            type="text"
            name="image"
            placeholder="Cover Image URL"
            className="p-2 rounded"
            value={updatedBook.cover_image || ""}
            onChange={(e) =>
              setUpdatedBook({ ...updatedBook, cover_image: e.target.value })
            }
          />
          <textarea
            className="p-2 rounded"
            placeholder="Book Description"
            rows="4"
            value={updatedBook.description || ""}
            onChange={(e) =>
              setUpdatedBook({ ...updatedBook, description: e.target.value })
            }
          ></textarea>
        </div>
      </div>
      {/* Footer */}
      <div className="flex flex-col sm:flex-row gap-5 mt-4">
        <button
          onClick={onUpdate}
          className="p-2 sm:w-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 font-bold text-gray-700 rounded"
        >
          Update
        </button>
        <button
          onClick={onClose}
          className="p-2 sm:w-1/2 bg-gradient-to-r from-red-200 to-red-500 font-bold text-gray-700 rounded"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default UpdateBookModal;
