import { Link } from "react-router-dom";
export default function HamburgerMenu() {
  return (
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
            <Link to="/">HOME</Link>{" "}
          </li>
          <li>
            <Link to="shop">SHOP</Link>
          </li>
          <li>
            <a>Categories</a>
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
          </li>
        </ul>
      </div>
      <Link to="/" className="btn btn-ghost text-xl">
        fakeStore
      </Link>
    </div>
  );
}
