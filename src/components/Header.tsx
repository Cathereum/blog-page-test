import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";

export const Header = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const loginHandler = () => {
    setIsAuth((prev) => !prev);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">My Project</span>
      </div>

      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        {isAuth ? (
          <div className="text-sm lg:flex-grow flex justify-start">
            <span className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              <Link to="/About">About</Link>
            </span>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              <Link to="/Main">All Posts</Link>
            </span>
          </div>
        ) : null}
        <div>
          <span
            onClick={loginHandler}
            className=" text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            {isAuth ? "Logout" : "Login"}
          </span>
        </div>
      </div>
    </nav>
  );
};
