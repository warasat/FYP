/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  // Track scroll position with useEffect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust the scroll position as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <div
          className={`navbar bg-blue-900 text-white ${isSticky ? 'sticky top-0 z-50 shadow-md' : ''}`}
        >
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
                className="menu menu-sm dropdown-content bg-blue-800 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
              >
                {/* Dropdown dark blue */}
                <li><a>Home</a></li>
                <li><a>All Doctors</a></li>
                <li><a>About</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Doctor & Patient</a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a className='hover:bg-gray-400'>Home</a></li>
              <li><a className='hover:bg-gray-400'>All Doctors</a></li>
              <li><a className='hover:bg-gray-400'>About</a></li>
              <li><a className='hover:bg-gray-400'>Contact</a></li>
            </ul>
          </div>

          <div className="navbar-end">
            <a className="btn bg-white text-blue-900 hover:bg-gray-200">Create account</a> {/* White button with dark blue text */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
