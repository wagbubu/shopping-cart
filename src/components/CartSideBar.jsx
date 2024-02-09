/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import CartProductCard from "./CartProductCard";

export default function CartSideBar({ hideCart, handleClick }) {
  const products = useSelector((state) => state.cart.data.products);
  const subtotal = useSelector((state) => state.cart.subtotal);

  return (
    <>
      <div
        className={`${
          hideCart ? "hidden" : "flex"
        } bg-gray-400 h-screen w-96 absolute top-0 right-0 px-6 py-4 z-10 flex-col justify-between`}
      >
        <div>
          <div className="flex flex-row-reverse justify-between items-center">
            <button
              onClick={handleClick}
              className="btn btn-square btn-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <p className="text-black font-bold">MY CART:</p>
          </div>
          {products &&
            products.map((product) => (
              <CartProductCard
                key={product.productId}
                id={product.productId}
                quantity={product.quantity}
              ></CartProductCard>
            ))}
        </div>
        <div
          className={`${
            products.length ? "flex" : "hidden"
          } flex-col items-center py-4`}
        >
          <p className="text-black text-xl font-bold mb-4">
            SUBTOTAL : ${subtotal.toFixed(2)}
          </p>
          <button className="btn-secondary btn btn-wide">Checkout</button>
        </div>
      </div>
    </>
  );
}
