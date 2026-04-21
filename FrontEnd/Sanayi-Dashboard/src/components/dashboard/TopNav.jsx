import { Link } from "react-router-dom";
import ButtonDropdown from "../ui/ButtonDropdown";

const TopNav = () => {
  return (
    <nav className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 sticky top-0 z-30 ">
      <div className="logo flex items-center ga-2">
        <div className="bg-blue-600 p-2 rounded-lg">
          <span className="text-white font-bold text-xl">S</span>
        </div>
        <span className="text-xl font-bold text-gray-800 hidden md:block">
          anayi
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors  pl-4"
        >
          <button
            type="button"
            className="text-white bg-gradient-to-br rounded-lg from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 cursor-pointer"
          >
            Go To WebSite
          </button>
        </Link>
        <ButtonDropdown />
      </div>
    </nav>
  );
};
export default TopNav;
