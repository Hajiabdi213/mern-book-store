import { useEffect } from "react";
import { useBookStore } from "../store/book.store";

const HomePage = () => {
  const { getBooks, books } = useBookStore();
  useEffect(() => {
    getBooks();
  }, []);
  console.log(books);
  return (
    <div className="container mx-auto p-2">
      {books.map((book) => (
        <h1 key={book._id}>{book.title}</h1>
      ))}
    </div>
  );
};

export default HomePage;
