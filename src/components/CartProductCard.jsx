/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { deductSubTotal, deleteItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

export default function CartProductCard({ id, quantity }) {
  const [itemData, setItemData] = useState(null);
  const [ignore, setIgnore] = useState(null);
  const dispatch = useDispatch();
  const price = itemData?.price * quantity;

  useEffect(() => {
    if (!ignore) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setItemData(json);
        });
    }
    setIgnore(true);
  }, [ignore, id]);

  const handleDelete = () => {
    dispatch(deleteItem({ productId: id }));
    dispatch(deductSubTotal(price));
  };

  return (
    <>
      {itemData && (
        <li>
          <div className="card card-side bg-base-100 shadow-xl pl-6 my-2">
            <figure className="w-[100px]">
              <img src={itemData.image} />
            </figure>
            <div className="card-body">
              <h2 className="font-bold">{itemData.title}</h2>
              <div className="flex justify-between">
                <ul className="text-sm">
                  <li>
                    <p>Quantity: {quantity}</p>
                  </li>
                  <li>
                    <p>Price: ${price}</p>
                  </li>
                </ul>
                <div className="card-actions content-end justify-end">
                  <button
                    onClick={handleDelete}
                    className="btn btn-sm btn-circle"
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
                </div>
              </div>
            </div>
          </div>
        </li>
      )}
    </>
  );
}
