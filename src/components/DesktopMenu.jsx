import { Link } from "react-router-dom";

export default function DesktopMenu() {
  return (
    <>
      <div className="hidden lg:flex">
        <Link to="/" className="lg: btn btn-ghost text-xl">
          fakeStore
        </Link>
      </div>

      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="shop">SHOP</Link>
          </li>
          <li className="max-w-min">
            <div className="dropdown dropdown-bottom p-0">
              <div
                tabIndex={0}
                className="py-2 px-4 rounded-md flex justify-center items-center"
              >
                <p className="font-normal">CATEGORIES</p>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
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
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
