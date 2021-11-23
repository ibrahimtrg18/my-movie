import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavLink from "./NavLink";
import ModalLogin from "../components/ModalLogin";
import { fetchAccount, logoutAccount } from "../redux/actions/authAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
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

  console.log("debug ", { auth, account });

  return (
    <div className="min-h-full">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center w-full">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden block sm:flex justify-between w-full">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    to="/movie/top_rated"
                    className="hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="bg-gray-900 text-white"
                    inactiveClassName="text-gray-300 hover:bg-gray-700"
                  >
                    Top rated movies
                  </NavLink>

                  <NavLink
                    to="/movie/upcoming"
                    className="hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="bg-gray-900 text-white"
                    inactiveClassName="text-gray-300 hover:bg-gray-700"
                  >
                    Upcoming movies
                  </NavLink>

                  <NavLink
                    to="/movie/now_playing"
                    className="hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="bg-gray-900 text-white"
                    inactiveClassName="text-gray-300 hover:bg-gray-700"
                  >
                    Now playing movies
                  </NavLink>

                  <NavLink
                    to="/movie/popular"
                    className="hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="bg-gray-900 text-white"
                    inactiveClassName="text-gray-300 hover:bg-gray-700"
                  >
                    Popular movies
                  </NavLink>

                  {account && (
                    <NavLink
                      to="/movie/watchlist"
                      className="hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      activeClassName="bg-gray-900 text-white"
                      inactiveClassName="text-gray-300 hover:bg-gray-700"
                    >
                      Watchlist Movie
                    </NavLink>
                  )}
                </div>

                {account ? (
                  <span
                    className="text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                    onClick={() => onLogoutAccount()}
                  >
                    Logout {account.username}
                  </span>
                ) : (
                  <span
                    className="text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
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
