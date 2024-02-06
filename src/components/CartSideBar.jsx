/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import CartProductCard from "./CartProductCard";

export default function CartSideBar({ hideCart, handleClick }) {
  const products = useSelector((state) => state.cart.data.products);
  const subtotal = useSelector((state) => state.cart.subtotal);



  return (
    <>
      <div
        style={{ display: `${hideCart ? "none" : "block"}` }}
        className="bg-gray-400 h-screen w-96 absolute top-0 right-0 z-10"
      >
        <button onClick={handleClick}>X</button>
        <p className="text-black">CART:</p>
        {products &&
          products.map((product) => (
            <CartProductCard
              key={product.productId}
              id={product.productId}
              quantity={product.quantity}
            ></CartProductCard>
          ))}
        <div>
          <p>SUBTOTAL : {subtotal}</p>
        </div>
      </div>
    </>
  );
}
