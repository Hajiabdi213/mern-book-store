import { useEffect } from "react";
import { useBookStore } from "../store/book.store";
import BookCard from "../components/BookCard";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { getBooks, books } = useBookStore();
  useEffect(() => {
    getBooks();
  }, []);
  console.log(books);
  return (
    <>
      <h1 className="text-4xl text-center my-5 font-bold text-blue-800 italic ">
        All Books 📚
      </h1>
      {!books.length > 0 ? (
        <h1 className="text-center text-2xl font-semibold italic">
          There is no book currenlty!,
          <Link to="/create" className="text-blue-800 ml-2 underline">
            Add New Book
          </Link>
        </h1>
      ) : (
        <div className="container mx-auto p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </>
  );
};

export default HomePage;
