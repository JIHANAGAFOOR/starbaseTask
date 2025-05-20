import  { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { authActions, useAppSelector } from "../../store/slice/auth";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/slice/user";
import { persistor } from "../../store";
import { FaHome } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { IoCloseSharp, IoLogOutOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useAppSelector((state) => state.auth.username);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    dispatch(authActions.logOut());
    dispatch(userActions.userDetailsSeelcted([])); // clear user state manually if needed
    persistor.purge();

    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <div
        className={`${
          isSidebarOpen ? "translate-x-0 mt-18" : "-translate-x-full "
        } bg-[#d2d2dd] text-black dark:text-white dark:bg-blue-950  w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out z-10 flex flex-col`}
      >
        <div className="flex items-center justify-between px-4 ">
          <div className="text-xl font-semibold">Admin Dashboard</div>
          {/* Close button - visible on mobile screens only */}
          <button
            className="md:hidden"
            onClick={toggleSidebar}
            aria-label="Close sidebar"
          >
            <IoCloseSharp size={30} />
          </button>
        </div>

        {/* User info */}
        <div className="px-4 py-4 border-t border-b border-blue-800 ">
          <div className="flex items-center space-x-2">
            <div className="flex-shrink-0">
              {username && (
                <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
                  {username.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <div>
              <p className="text-sm font-medium">{username}</p>
            </div>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="space-y-1 px-2 flex-1 overflow-y-auto">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                isActive
                  ? "bg-blue-900 text-white "
                  : "text-black hover:bg-blue-900 hover:text-white dark:text-white"
              }`
            }
          >
            <FaHome size={20} className="mx-2" />
            Dashboard
          </NavLink>

          <NavLink
            to="/users"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                isActive
                  ? "bg-blue-900 text-white "
                  : "text-black hover:bg-blue-900 hover:text-white dark:text-white"
              }`
            }
          >
            <HiUsers size={20} className="mx-2" />
            Users
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                isActive
                  ? "bg-blue-900 text-white "
                  : "text-black hover:bg-blue-900 hover:text-white dark:text-white"
              }`
            }
          >
            <IoMdSettings size={20} className="mx-2" /> Settings
          </NavLink>
        </nav>

        <div className="px-4 mt-auto pt-4 ">
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-2 text-sm font-medium rounded-md bg-red-600 hover:bg-red-700 text-white"
          >
            <IoLogOutOutline size={20} className="mx-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header with hamburger for mobile */}
        <header className="bg-white shadow-sm z-10">
          <div
            className={`${
              isSidebarOpen ? "px-4 py-3 flex justify-between items-center" : ""
            }`}
          >
            <button
              onClick={toggleSidebar}
              className="md:hidden text-gray-600 focus:outline-none"
              aria-label="Open sidebar"
            >
              <GiHamburgerMenu size={30} className="m-4" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-6 transition-colors">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

