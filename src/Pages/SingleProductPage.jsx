import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../features/single_product_page/singleProductSlice";
import {
  addItemToCart,
  addSubTotal,
  toggleCart,
} from "../features/cart/cartSlice";
//import { addToCart } from "../features/cart/cartSlice";

export default function SingleProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.data);
  const status = useSelector((state) => state.product.status);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  const handleInputChange = (e) => {
    setQuantity(e.target.value);
  };
  const handleAddToCart = () => {
    dispatch(addItemToCart({ productId: id, quantity: parseInt(quantity) }));
    dispatch(addSubTotal(product.price * quantity));
    dispatch(toggleCart());
  };

  return (
    <>
      {status === "loading" ? (
        "Loading..."
      ) : (
        <>
          <div className="flex flex-col items-center px-6">
            <figure className="py-8">
              <img
                src={product.image}
                width="250"
                alt={`${product.title} image`}
              ></img>
            </figure>
            <h1 className="text-xl w-full py-2">{product.title}</h1>
            <div className="w-full">
              <h1 className="font-bold italic text-xl text-blue-700">
                USD ${product.price}
              </h1>

              <button
                onClick={handleAddToCart}
                className="btn btn-accent btn-wide px-0 rounded-md mt-8 mr-2"
              >
                <label
                  className="btn btn-square w-full"
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                >
                  Add to cart
                </label>
              </button>
              <span>
                <input
                  onChange={handleInputChange}
                  value={quantity}
                  type="number"
                  min="1"
                  className="input input-accent input-md w-24"
                ></input>
              </span>
            </div>

            <div className="collapse bg-slate-100 collapse-arrow border-t-[1px] border-b-[1px] border-gray-400 rounded-none mt-6">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                description
              </div>
              <div className="collapse-content">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
