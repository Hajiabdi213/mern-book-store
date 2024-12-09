import { FiTrash, FiEdit } from "react-icons/fi";
import { CgMoreO } from "react-icons/cg";

const BookCard = ({ book }) => {
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
          <span className="flex items-center gap-2">
            <FiEdit />
            Edit
          </span>
        </button>
        <button className="text-xl mr-2 text-red-700 hover:text-red-800 transition-all duration-300">
          <span className="flex items-center gap-2">
            <FiTrash />
            Delete
          </span>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
