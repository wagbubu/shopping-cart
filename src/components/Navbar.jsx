import { Link, Outlet } from "react-router-dom";
import Cart from "./Cart";

export default function Navbar() {
  //Homepage
  //Shop
  //Products/Category
  return (
    <>
      <div className="navbar bg-blue-600 sticky top-0">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="shop">SHOP</Link>
            </li>
            <li>
              <details>
                <summary>CATEGORIES</summary>
                <ul className="p-2">
                  <li>
                    <Link to="category/jewelery">Jewelries</Link>
                  </li>
                  <li>
                    <Link to="category/electronics">Electronics</Link>
                  </li>
                  <li>
                    <Link to="category/men's-clothing">Men&apos;s</Link>
                  </li>
                  <li>
                    <Link to="category/women's-clothing">Women&apos;s</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Cart></Cart>
        </div>
      </div>
      <hr></hr>
      <Outlet></Outlet>
    </>
  );
}
//navbar should be fixed at he top and never rerender use React Router for this.
//on select of Product category
//will go to link `/category/${category}`
//fetch all products from certain category and display just like shop
//display different hero image for each category
