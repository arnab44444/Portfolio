import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {

  // Theme state
    // const [theme, setTheme] = useState("light");

//   // Load saved theme from localStorage
//      useEffect(() => {
//        const savedTheme = localStorage.getItem("theme") || "light";
//        setTheme(savedTheme);
//        document.documentElement.setAttribute("data-theme", savedTheme);
//      }, []);

//   // Toggle theme
//      const toggleTheme = () => {
//       const newTheme = theme === "light" ? "dark" : "light";
//       setTheme(newTheme);
//       document.documentElement.setAttribute("data-theme", newTheme);
//       localStorage.setItem("theme", newTheme);
//     };

 
  return (
    <div className="flex justify-between navbar p-0 bg-gradient-to-r bg-cyan-600 p-6  border-b px-8 md:px-12 lg:px-16 xl:px-24 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="cursor-pointer mr-2 lg:hidden md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-indigo-900" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allBook"
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : ""
                }
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addBook"
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : ""
                }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                //to={`/my-plants/${user?.email}`}
                to='/my-orders'
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : ""
                }
              >
                Education
              </NavLink>
            </li>

            <li>
              <NavLink
                //to={`/my-plants/${user?.email}`}
                to='/my-orders'
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : ""
                }
              >
                My Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                //to={`/my-plants/${user?.email}`}
                to='/my-orders'
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : ""
                }
              >
                About Me
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex gap-2 items-center">
          {/* <img
            src="https://i.postimg.cc/FFCdWY6S/green-eco-garden-plant-by-marcololstudio-brandcrowd.png"
            className="h-10"
          /> */}
          <p className="font-bold text-secondary">BookVerse</p>
        </div>
      </div>

      <div className="hidden navbar-center md:flex lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-indigo-900" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allBook"
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : ""
                }
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addBook"
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : ""
                }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                //to={`/my-plants/${user?.email}`}
                to='/my-orders'
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : ""
                }
              >
                Education
              </NavLink>
            </li>

            <li>
              <NavLink
                //to={`/my-plants/${user?.email}`}
                to='/my-orders'
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : ""
                }
              >
                My Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                //to={`/my-plants/${user?.email}`}
                to='/my-orders'
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : ""
                }
              >
                About Me
              </NavLink>
            </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        {/* 🌙 Theme Toggle Button */}
         {/* <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />  */}
        {/* Sun Icon */}
         {/* <svg
            className="swap-on fill-current w-6 h-6 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5 12a7 7 0 1114 0 7 7 0 01-14 0zm7-10v2m0 16v2m10-10h-2M4 12H2m16.95-6.95l-1.414 1.414M6.464 17.536l-1.414 1.414M17.536 17.536l1.414 1.414M6.464 6.464L5.05 5.05" />
          </svg>  */}
        {/* Moon Icon */}
         {/* <svg
            className="swap-off fill-current w-6 h-6 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
          </svg>
        </label>  */}

        <button className="btn btn-primary">
            Resume
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;
