import { Link, Outlet } from "react-router-dom";
import Cart from "./Cart";

export default function Navbar() {
  //Homepage
  //Shop
  //Products/Category
  return (
    <>
      <h1>NAVBAR</h1>
      <Link to="shop">SHOP</Link>
      <br></br>
      <Link to="/">HOME</Link>
      <br></br>
      <h3>Categories</h3>
      <Link to="category/jewelery">Jewelries</Link>
      <br></br>
      <Link to="category/electronics">Electronics</Link>
      <br></br>
      <Link to="category/men's-clothing">Men&apos;s Clothing</Link>
      <br></br>
      <Link to="category/women's-clothing">Women&apos;s Clothing</Link>
      <hr></hr>
      <Cart></Cart>
      <hr></hr>
      <br></br>
      <Outlet></Outlet>
    </>
  );
}
//navbar should be fixed at he top and never rerender use React Router for this.
//on select of Product category
//will go to link `/category/${category}`
//fetch all products from certain category and display just like shop
//display different hero image for each category
