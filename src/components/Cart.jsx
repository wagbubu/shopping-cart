import CartButton from "./CartButton";
import CartSideBar from "./CartSideBar";
import { useSelector } from "react-redux";

export default function Cart() {
  const items = useSelector((state) => state.cart.data.products);

  const totalItems = items.reduce(
    (accumulator, product) => accumulator + product.quantity,
    0
  );

  return (
    <>
      <div className="navbar-end">
        <div className="drawer drawer-end">
          <CartButton totalItems={totalItems}></CartButton>
          <CartSideBar></CartSideBar>
        </div>
      </div>
    </>
  );
}
