import React from "react";

const CreatePage = () => {
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
              name="name"
              placeholder="Book Title"
              className="p-2 rounded "
            />
            <input
              type="text"
              name="author"
              placeholder="Author Name"
              className="p-2 rounded "
            />
            <input
              type="text"
              name="price"
              placeholder="Language"
              className="p-2 rounded "
            />
            <input
              type="text"
              name="price"
              placeholder="Book Price"
              className="p-2 rounded "
            />
            <input
              type="text"
              name="image"
              placeholder="Cover Image URL"
              className="p-2 rounded "
            />
            <textarea
              className="p-2 rounded "
              placeholder="Book Description"
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
