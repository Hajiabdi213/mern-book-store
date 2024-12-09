import { useEffect, useState } from "react";

const HomePage = () => {
  const [courses, setCourses] = useState([]);

  const getBooks = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/books");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setCourses(data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return <div className="container mx-auto p-2">HomePage</div>;
};

export default HomePage;
