/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import CartProductCard from "./CartProductCard";

export default function CartSideBar({ hideCart }) {
  const products = useSelector((state) => state.cart.data.products);

  return (
    <>
      <div style={{ display: `${hideCart ? "none" : "block"}` }}>
        <p>CART:</p>
        {products &&
          products.map((product) => (
            <CartProductCard
              key={product.productId}
              id={product.productId}
              quantity={product.quantity}
            ></CartProductCard>
          ))}
      </div>
    </>
  );
}
