import { Outlet, Link } from "react-router-dom";
import Cart from "./Cart";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";

export default function Navbar() {
  //Homepage
  //Shop
  //Products/Category
  const navigateToTop = () => {
    window.scroll(0, 0);
  };
  return (
    <>
      <div className="min-h-lvh bg-slate-100">
        <div className="flex bg-white justify-between shadow-md sticky z-10 top-0 min-h-20 items-center px-4">
          <MobileMenu></MobileMenu>
          <div className="lg:hidden w-full text-center">
            <Link onClick={navigateToTop} to="/" className="btn btn-ghost text-xl">
              FakeStore
            </Link>
          </div>
          <DesktopMenu></DesktopMenu>
          <Cart></Cart>
        </div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}
//navbar should be fixed at he top and never rerender use React Router for this.
//on select of Product category
//will go to link `/category/${category}`
//fetch all products from certain category and display just like shop
//display different hero image for each category
