import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = ({ brandTitle = "JobFinder", brandLogo = logo }) => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-emerald-600 border-b border-emerald-500 shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* Brand Logo with Spin Animation on Hover */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto rounded-full transition-transform duration-5000 ease-in-out transform hover:rotate-180"
                src={brandLogo}
                alt={brandTitle}
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                {brandTitle}
              </span>
            </NavLink>

            {/* Navigation Links */}
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={linkClass}>
                  Jobs
                </NavLink>
                <NavLink to="/add-job" className={linkClass}>
                  Add Job
                </NavLink>
                <NavLink to="/contact" className={linkClass}>
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
