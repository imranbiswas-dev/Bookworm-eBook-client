import { Link, NavLink } from "react-router";
import book from "../../assets/Logo/book.png";
import { PiSignInBold } from "react-icons/pi";
const Navbar = () => {
  const links = (
    <>
      <NavLink className="hover:underline" to="/dashboard">Dashboard</NavLink>
      <NavLink className="hover:underline" to="/library">Library</NavLink>
      <NavLink className="hover:underline" to="/blog">Blog</NavLink>
      <NavLink className="hover:underline" to="/contact">Contact</NavLink>
    </>
  );
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="navbar bg-base-100  shadow-sm md:h-25 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-36 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="flex items-center relative">
            <div className="m-0 absolute">
              <img className="md:w-20 md:h-20 w-10" src={book} alt="" />
            </div>
            <div className="  md:ml-20 ml-10 mt-1 text-lg  md:text-2xl font-semibold ">
              Bookworm
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex flex-col-reverse  w-150 ">
          <ul className="menu menu-horizontal px-1 flex gap-5  text-xl ">
            {links}
          </ul>
          {/* Search bar */}
          <div className="w-full">
            <label className="input w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" className="grow" placeholder="Search" />
              <kbd className="kbd kbd-sm">⌘</kbd>
              <kbd className="kbd kbd-sm">K</kbd>
            </label>
          </div>
        </div>
        <div className="navbar-end ">
          <div className="mr-3 ">
            <Link to ="/login"
              className="flex items-center gap-2 px-3 py-2 text-orange-600 font-medium 
               transition-all duration-300 ease-in-out 
               hover:text-white hover:bg-orange-600 
               rounded-md shadow-sm hover:shadow-md 
               active:scale-95"
            >
              <PiSignInBold size={20} />
              <span className="hidden md:block">Sign In</span>
            </Link>
          </div>

          <div className="dropdown dropdown-end mr-3">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar md:w-13"
            >
              <div className=" rounded-full border">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
