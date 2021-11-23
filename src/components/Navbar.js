import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavLink from "./NavLink";
import ModalLogin from "../components/ModalLogin";
import { fetchAccount, logoutAccount } from "../redux/actions/authAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const auth = useSelector((state) => state.auth);
  const account = useSelector((state) => state.auth.account);

  useEffect(() => {
    if (auth.userSession) {
      dispatch(fetchAccount());
    }
  }, [auth.userSession]);

  const onLogoutAccount = () => {
    dispatch(logoutAccount());
  };

  return (
    <div className="min-h-full">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="block sm:flex items-center justify-between h-full">
            <div className="block sm:flex items-center w-full">
              <div className="flex flex-shrink-0 py-2 items-center">
                <div onClick={() => setShowMenu(!showMenu)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-menu"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </div>
                <span className="text-3xl font-bold text-white ml-2">
                  Movie
                </span>
              </div>
              <div
                className={`${
                  showMenu ? "block sm:flex" : "hidden sm:flex"
                } block sm:flex justify-between w-full`}
              >
                <div className="ml-0 sm:ml-10 block sm:flex items-baseline">
                  <NavLink
                    to="/movie/top_rated"
                    className="block hover:text-white px-3 py-2 rounded-md text-sm font-medium mx-0 sm:mx-4"
                    activeClassName="bg-gray-900 text-white"
                    inactiveClassName="text-gray-300 hover:bg-gray-700"
                  >
                    Top rated movies
                  </NavLink>

                  <NavLink
                    to="/movie/upcoming"
                    className="block hover:text-white px-3 py-2 rounded-md text-sm font-medium mx-0 sm:mx-4"
                    activeClassName="bg-gray-900 text-white"
                    inactiveClassName="text-gray-300 hover:bg-gray-700"
                  >
                    Upcoming movies
                  </NavLink>

                  <NavLink
                    to="/movie/now_playing"
                    className="block hover:text-white px-3 py-2 rounded-md text-sm font-medium mx-0 sm:mx-4"
                    activeClassName="bg-gray-900 text-white"
                    inactiveClassName="text-gray-300 hover:bg-gray-700"
                  >
                    Now playing movies
                  </NavLink>

                  <NavLink
                    to="/movie/popular"
                    className="block hover:text-white px-3 py-2 rounded-md text-sm font-medium mx-0 sm:mx-4"
                    activeClassName="bg-gray-900 text-white"
                    inactiveClassName="text-gray-300 hover:bg-gray-700"
                  >
                    Popular movies
                  </NavLink>

                  {account && (
                    <NavLink
                      to="/movie/watchlist"
                      className="block hover:text-white px-3 py-2 rounded-md text-sm font-medium mx-0 sm:mx-4"
                      activeClassName="bg-gray-900 text-white"
                      inactiveClassName="text-gray-300 hover:bg-gray-700"
                    >
                      Watchlist Movie
                    </NavLink>
                  )}
                </div>

                {account ? (
                  <span
                    className="block text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium mx-0 sm:mx-4 cursor-pointer"
                    onClick={() => onLogoutAccount()}
                  >
                    Logout {account.username}
                  </span>
                ) : (
                  <span
                    className="block text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium mx-0 sm:mx-4 cursor-pointer"
                    onClick={() => setToggle(true)}
                  >
                    Login
                  </span>
                )}

                <ModalLogin
                  toggle={toggle}
                  setToggle={(value) => setToggle(value)}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
