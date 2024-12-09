const HomePage = () => {
  const getBooks = async () => {
    const res = await fetch("http://localhost:3000/api/books");
    const data = await res.json();
    console.log(data);
  };
  getBooks();
  return <div className="container mx-auto p-2">HomePage</div>;
};

export default HomePage;
