import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="navbar bg-[#EBE3CC]  px-20">
      <div className="navbar-start ">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                href="/"
                className=" font-semibold hover:text-white hover:bg-orange-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/brand"
                className=" font-semibold hover:text-white hover:bg-orange-400"
              >
                Brand
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                className=" font-semibold hover:text-white hover:bg-orange-400"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/reviews"
                className=" font-semibold hover:text-white hover:bg-orange-400"
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Shop-First</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="/"
              className=" font-semibold hover:text-white hover:bg-orange-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/brand"
              className=" font-semibold hover:text-white hover:bg-orange-400"
            >
              Brand
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className=" font-semibold hover:text-white hover:bg-orange-400"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/reviews"
              className=" font-semibold hover:text-white hover:bg-orange-400"
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <Link href="/login" className="font-semibold text-[#ED5C01] ">
          Login
        </Link>
        <Link
          href="/signUp"
          className="btn rounded-2xl text-[#ED5C01] bg-[#062D3E]"
        >
          SignUp
        </Link>
      </div>
    </div>
  );
}
