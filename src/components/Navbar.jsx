import { Outlet, Link } from "react-router-dom";
import Cart from "./Cart";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  //Homepage
  //Shop
  //Products/Category
  return (
    <>
      <div className="bg-slate-100">
        <div className="flex bg-white justify-between shadow-md sticky z-10 top-0 min-h-16 items-center">
          <MobileMenu></MobileMenu>
          <div className="lg:hidden w-full text-center">
            <Link to="/" className="btn btn-ghost text-xl">
              fakeStore
            </Link>
          </div>
          <DesktopMenu></DesktopMenu>

          <Cart></Cart>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
}
//navbar should be fixed at he top and never rerender use React Router for this.
//on select of Product category
//will go to link `/category/${category}`
//fetch all products from certain category and display just like shop
//display different hero image for each category
