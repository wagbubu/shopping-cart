import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../features/single_product_page/singleProductSlice";
import { addItemToCart } from "../features/cart/cartSlice";
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
  };

  return (
    <>
      {status === "loading" ? (
        "Loading..."
      ) : (
        <>
          <h1 className="font-bold text-3xl">{product.title}</h1>
          <img
            src={product.image}
            width="250"
            alt={`${product.title} image`}
          ></img>
          <h1>{product.description}</h1>
          <h1 className="font-bold">U$D {product.price}</h1>
          <button
            onClick={handleAddToCart}
            className="btn btn-accent px-14 btn-md rounded-md"
          >
            Add to cart
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
        </>
      )}
    </>
  );
}
