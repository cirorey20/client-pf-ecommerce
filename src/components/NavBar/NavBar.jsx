/* This example requires Tailwind CSS v2.0+ */
import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
import SearchBtn from "../SearchBar/SearchBar";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";

export default function LandingPage() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-4 h-40 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to={"/"}>
              <img
                className="h-20 w-25"
                src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Universal-Pictures-Logo.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              to={"/home"}
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#cbd5e1] hover:bg-[#0f172a]"
            >
              Home
            </Link>
          </div>
          <Link
            to={"/"}
            className="text-5xl mr-8 font-medium text-gray-500 hover:text-gray-900"
          >
            Universal Music
          </Link>
          <SearchBtn />
          {isAuthenticated ? <Profile /> : <Login />}
        </div>
      </div>
    </Popover>
  );
}
