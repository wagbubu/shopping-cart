import { useState } from "react";
import CartButton from "./CartButton";
import CartSideBar from "./CartSideBar";

export default function Cart() {
  const [hideCart, setHideCart] = useState(true);

  const handleClick = () => {
    setHideCart(!hideCart);
  };

  return (
    <>
      <CartButton handleClick={handleClick}></CartButton>
      <CartSideBar hideCart={hideCart}></CartSideBar>
    </>
  );
}
