import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { NavLink } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import logo from "../assets/3.jpg";

// eslint-disable-next-line react/prop-types
const Nav = ({ isDarkMode, toggleDarkMode }) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <img src={logo} alt="" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/reviews">All Reviews</NavLink>
              </li>
              <li>
                <NavLink to="/add">Add Review</NavLink>
              </li>
              <li>
                <NavLink to="/my">My Reviews</NavLink>
              </li>
              <li>
                <NavLink to="/watchlist">Game WatchList</NavLink>
              </li>
            </ul>
          </div>
          <img className="w-16 rounded-full " src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/reviews">All Reviews</NavLink>
            </li>
            <li>
              <NavLink to="/add">Add Review</NavLink>
            </li>
            <li>
              <NavLink to="/my">My Reviews</NavLink>
            </li>
            <li>
              <NavLink to="/watchlist">Game WatchList</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <DarkModeSwitch
            className="mr-3"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={30} // size of the toggle button
          />
          {user ? (
            <>
              <button onClick={logout} className="btn mr-4">
                LogOut
              </button>

              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div>
                    <img
                      // data-tooltip-id="tooltip"
                      src={user?.photoURL}
                      alt="User Photo"
                      className="w-24 h-24 rounded-full object-cover tooltip"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={user?.displayName}
                      data-tooltip-place="top"
                    />
                    <Tooltip id="my-tooltip" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <NavLink className="btn mr-4" to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
