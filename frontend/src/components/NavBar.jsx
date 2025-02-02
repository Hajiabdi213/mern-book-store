import { FaRegSquarePlus } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="bg-blue-100 border-b-2 border-blue-200">
      <div className="container mx-auto p-2 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-3xl font-bold font-mono  bg-gradient-to-r from-cyan-400 to-blue-950 bg-clip-text text-transparent">
            BookStore
          </h1>
        </Link>
        <div className="">
          <Link to="/">
            <button className="text-lg font-semibold mr-2 border-2 border-blue-200  p-2 rounded-lg  ">
              <span className="flex items-center gap-2">
                <FaHome className="inline-block  " />
                Home
              </span>
            </button>
          </Link>
          <Link to="/create">
            <button className="text-lg font-semibold mr-2 border-2 border-blue-200  p-2 rounded-lg">
              <span className="flex items-center gap-2">
                <FaRegSquarePlus className="inline-block" /> Add Book
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
