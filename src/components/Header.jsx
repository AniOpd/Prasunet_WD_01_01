import React, { useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  useEffect(
    // this functoin will change the color of the navbar when the user scrolls
    () => {
      let scrollpos = 0;
      const header = document.querySelector(".navbar");
      window.addEventListener("scroll", function () {
        scrollpos = window.scrollY;
        console.log(scrollpos);
        if (scrollpos > 10) {
          console.log(scrollpos);
          header.classList.add("bg-gray-200");
          header.classList.remove("text-white");
          header.classList.remove("bg-gray-800");
          header.classList.add("text-black");
        } else {
          header.classList.remove("bg-gray-200");
          header.classList.remove("text-black");
          header.classList.add("text-white");
          header.classList.add("bg-gray-800");
        }
      });
    },
    [],
    [scroll]
  );

  return (
    <>
      <div className="navbar text-white relative sticky top-0 z-30 bg-gray-800">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
              className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow flex flex-col justify-center items-center"
            >
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/'>About</Link>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
            </ul>
          </div>
          <a className="text-xl md:pl-8 ">Ed-Tech</a>
        </div>
        <div className="navbar-end gap-5 hidden md:flex">
          <Link to='/' className="btn btn-ghost ">Home</Link>
            <Link to='/about' className="btn btn-ghost ">About</Link>
          <Link to='/contact' className="btn btn-ghost ">Contact us</Link>
          <a href="/login" className="btn btn-ghost">
            Login
          </a>
          <a href="/register" className="btn btn-ghost">
            Register
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
