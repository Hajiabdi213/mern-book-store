import { useEffect } from "react";
import { useBookStore } from "../store/book.store";
import BookCard from "../components/BookCard";

const HomePage = () => {
  const { getBooks, books } = useBookStore();
  useEffect(() => {
    getBooks();
  }, []);
  console.log(books);
  return (
    <div className="container mx-auto p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {books.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default HomePage;
