import { Outlet } from "react-router-dom";
import Cart from "./Cart";
import HamburgerMenu from "./HamburgerMenu";
import DesktopMenu from "./DesktopMenu";

export default function Navbar() {
  //Homepage
  //Shop
  //Products/Category
  return (
    <>
      <div className="bg-slate-100 min-h-screen">
        <div className="navbar bg-blue-600 sticky z-10 top-0">
          <HamburgerMenu></HamburgerMenu>
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
