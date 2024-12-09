import React, { useState } from "react";

const CreatePage = () => {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    description: "",
    language: "",
    cover_image: "",
    price: "",
  });

  return (
    <div>
      <div className="container p-4 mx-auto">
        <h1 className="text-3xl font-extrabold text-center mb-4 text-blue-900 ">
          Add New Book
        </h1>
        <div className=" bg-blue-50 p-6 shadow-md rounded-md max-w-[800px] mx-auto ">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="title"
              placeholder="Book Title"
              className="p-2 rounded "
              value={newBook.title}
              onChange={(e) =>
                setNewBook({ ...newBook, title: e.target.value })
              }
            />
            <input
              type="text"
              name="author"
              placeholder="Author Name"
              className="p-2 rounded "
              value={newBook.author}
              onChange={(e) =>
                setNewBook({ ...newBook, author: e.target.value })
              }
            />
            <input
              type="text"
              name="language"
              placeholder="Language"
              className="p-2 rounded "
              value={newBook.language}
              onChange={(e) =>
                setNewBook({ ...newBook, language: e.target.value })
              }
            />
            <input
              type="text"
              name="price"
              placeholder="Book Price"
              className="p-2 rounded "
              value={newBook.price}
              onChange={(e) =>
                setNewBook({ ...newBook, price: e.target.value })
              }
            />
            <input
              type="text"
              name="image"
              placeholder="Cover Image URL"
              className="p-2 rounded "
              value={newBook.cover_image}
              onChange={(e) =>
                setNewBook({ ...newBook, cover_image: e.target.value })
              }
            />
            <textarea
              className="p-2 rounded "
              placeholder="Book Description"
              value={newBook.description}
              onChange={(e) =>
                setNewBook({ ...newBook, description: e.target.value })
              }
            ></textarea>
            <button className="p-2 bg-gradient-to-r from-cyan-400 to-blue-500 font-bold text-gray-700 rounded">
              Save Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
