import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavLink from "./NavLink";
import ModalLogin from "../components/ModalLogin";
import Input from "../components/Input";
// actions
import { fetchAccount, logoutAccount } from "../redux/actions/authAction";
import { fetchSearchMovies } from "../redux/actions/movieAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");
  let timeoutId = null;
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

  useEffect(() => {
    timeoutId = setTimeout(() => setDebounceQuery(query), 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  useEffect(() => {
    dispatch(fetchSearchMovies({ query: debounceQuery }));
  }, [debounceQuery]);

  const onSearchChange = (e) => {
    setQuery(e.target.value);
    navigate(`/movie/search?query=${e.target.value}`);
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-menu"
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
                <div className="ml-0 sm:ml-10 block sm:flex items-baseline items-center">
                  <NavLink
                    to="/movie/top_rated"
                    className="block hover:text-white px-3 py-2 rounded-md text-sm font-medium mx-0 sm:mx-2"
                    activeClassName="bg-gray-900 text-white"
                    inactiveClassName="text-gray-300 hover:bg-gray-700"
                  >
                    Top rated
                  </NavLink>

                  <NavLink
                    to="/movie/upcoming"
                    className="block hover:text-white px-3 py-2 rounded-md text-sm font-medium mx-0 sm:mx-2"
                    activeClassName="bg-gray-900 text-white"
                    inactiveClassName="text-gray-300 hover:bg-gray-700"
                  >
                    Upcoming
                  </NavLink>

                  <NavLink
                    to="/movie/now_playing"
                    className="block hover:text-white px-3 py-2 rounded-md text-sm font-medium mx-0 sm:mx-2"
                    activeClassName="bg-gray-900 text-white"
                    inactiveClassName="text-gray-300 hover:bg-gray-700"
                  >
                    Now playing
                  </NavLink>

                  <NavLink
                    to="/movie/popular"
                    className="block hover:text-white px-3 py-2 rounded-md text-sm font-medium mx-0 sm:mx-2"
                    activeClassName="bg-gray-900 text-white"
                    inactiveClassName="text-gray-300 hover:bg-gray-700"
                  >
                    Popular
                  </NavLink>

                  {account && (
                    <NavLink
                      to="/movie/watchlist"
                      className="block hover:text-white px-3 py-2 rounded-md text-sm font-medium mx-0 sm:mx-2"
                      activeClassName="bg-gray-900 text-white"
                      inactiveClassName="text-gray-300 hover:bg-gray-700"
                    >
                      Watchlist
                    </NavLink>
                  )}

                  <Input
                    id="search"
                    name="search"
                    type="text"
                    placeholder="search"
                    value={query}
                    onChange={(e) => onSearchChange(e)}
                  />
                </div>

                {account ? (
                  <span
                    className="block text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium mx-0 sm:mx-2 cursor-pointer"
                    onClick={() => onLogoutAccount()}
                  >
                    Logout {account.username}
                  </span>
                ) : (
                  <span
                    className="block text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium mx-0 sm:mx-2 cursor-pointer"
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
