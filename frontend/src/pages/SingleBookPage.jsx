import { useParams } from "react-router-dom";
import { useBookStore } from "../store/book.store";
import { useEffect, useState } from "react";

const SingleBookPage = () => {
  const { getOneBook } = useBookStore();
  const params = useParams();
  const [book, setBook] = useState(null); // State to store the book data
  const id = params.id;

  useEffect(() => {
    const fetchBook = async () => {
      const fetchedBook = await getOneBook(id);
      setBook(fetchedBook); // Set the book data to state
    };

    fetchBook();
  }, [id, getOneBook]); // Dependency array to re-fetch if `id` changes

  if (!book) {
    return <div>Loading...</div>; // Show a loading message while the book is being fetched
  }

  return (
    <div className="container mx-auto p-2 grid grid-cols-1   sm:grid-cols-2 mt-10 gap-2 ">
      <div className="border-l-4 border-r-4 border-blue-200  p-3 rounded-2xl">
        <img src={book.cover_image} alt="" />
      </div>
      <div className="border-r-4 border-l-4 border-blue-200 p-3 rounded-2xl">
        <h2 className="text-4xl font-bold font-mono text-blue-800 py-2">
          Book Title: <span className="italic">{book.title}</span>
        </h2>
        <h2 className="text-4xl font-bold font-mono text-blue-800 py-2">
          Price: <span className="italic">{book.price}</span>
        </h2>
        <hr className="bg-blue-200 h-[2px]" />
        <div className="py-4">
          <h2 className="text-2xl text-blue-950 font-mono">
            Author: {book.author}
          </h2>
          <h2 className="text-2xl text-blue-950 font-mono">
            Language: {book.language}
          </h2>
          <h2 className="text-2xl text-blue-950 font-mono">
            Published At: {book.createdAt}
          </h2>
          <h2 className="text-2xl text-blue-950 font-mono">
            Updated At: {book.updatedAt}
          </h2>
          <hr className="bg-blue-200 h-[2px]" />

          <h2 className="text-2xl text-blue-950 font-mono underline">
            Desciption:
          </h2>
          <p className="text-2xl ">{book.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBookPage;
