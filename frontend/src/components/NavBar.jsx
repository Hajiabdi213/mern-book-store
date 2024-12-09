import { FaRegSquarePlus, FaBook } from "react-icons/fa6";
const NavBar = () => {
  return (
    <div className="bg-blue-100">
      <div className="container mx-auto p-2 flex justify-between items-center">
        <h1 className="text-3xl font-bold font-mono  bg-gradient-to-r from-cyan-400 to-blue-950 bg-clip-text text-transparent">
          BookStore
        </h1>
        <div className="">
          <button className="text-lg font-semibold mr-2 border-2 border-blue-200  p-2 rounded-lg">
            <FaRegSquarePlus className="inline-block" /> Add Book
          </button>
          <button className="text-lg font-semibold mr-2 border-2 border-blue-200  p-2 rounded-lg">
            <FaBook className="inline-block  " />
            All Books
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
