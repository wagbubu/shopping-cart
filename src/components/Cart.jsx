import { useState } from "react";
import CartButton from "./CartButton";
import CartSideBar from "./CartSideBar";
import { useSelector } from "react-redux";

export default function Cart() {
  const [hideCart, setHideCart] = useState(true);
  const items = useSelector((state) => state.cart.data.products);
  const handleClick = () => {
    setHideCart(!hideCart);
  };
  const totalItems = items.reduce(
    (accumulator, product) => accumulator + product.quantity,
    0
  );

  return (
    <>
      <CartButton handleClick={handleClick} totalItems={totalItems}></CartButton>
      <CartSideBar handleClick={handleClick} hideCart={hideCart}></CartSideBar>
    </>
  );
}
