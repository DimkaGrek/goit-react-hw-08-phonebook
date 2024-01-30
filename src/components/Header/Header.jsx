import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/authSlice';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const currPath = useLocation().pathname;
  const [isFocused, setIsFocused] = useState(false);
  console.log(isFocused);
  return (
    <div className="px-2 py-2">
      <nav className="appearance-none rounded-full nm-flat-gray-200 leading-5 px-8 py-4 flex-grow sm:w-full mb-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-gray-600 text-xl font-bold">Phonebook</div>

            {isLoggedIn && (
              <form>
                <div
                  className={`rounded-full  leading-5 px-8 py-4 flex-grow sm:w-full ${
                    isFocused ? 'nm-inset-gray-300' : 'nm-inset-gray-200'
                  }`}
                >
                  <input
                    type="text"
                    placeholder="Search by name"
                    className="bg-transparent focus:outline-none"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  />
                  <button>Search</button>
                </div>
              </form>
            )}

            <div className="flex items-center gap-4">
              {isLoggedIn ? (
                <>
                  <span className="text-gray-600 text-xl font-bold">Dimka</span>
                  <button className="w-14 h-10 flex justify-center items-center rounded-full nm-convex-gray-200-xs hover:nm-inset-gray-200-xs hover:font-semibold text-sm">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className={`w-14 h-10 flex justify-center items-center rounded-full nm-convex-gray-200-xs hover:nm-inset-gray-200-xs hover:font-semibold text-sm ${
                      currPath === '/login'
                        ? 'nm-inset-gray-200-xs font-semibold'
                        : ''
                    }`}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className={`w-16 h-10 flex justify-center items-center rounded-full nm-convex-gray-200-xs hover:nm-inset-gray-200-xs hover:font-semibold text-sm ${
                      currPath === '/register'
                        ? 'nm-inset-gray-200-xs font-semibold'
                        : ''
                    }`}
                  >
                    Register
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* <nav className="nm-flat-gray-200-lg rounded-lg p-8 text-center max-w-sm w-full">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-white">Phonebook</div>
            <div className="flex items-center">
              
              <span className="text-gray-300 text-sm pr-4">John Doe</span>
              <button className="btn btn-sm btn-ghost text-gray-300">
                Logout
              </button>
              <NavLink
                to="/login"
                className="btn btn-sm btn-ghost text-gray-300"
              >
                Login
              </NavLink>
              <button className="btn btn-sm btn-ghost text-gray-300">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav> */}
      <Outlet />
    </div>
  );
};
