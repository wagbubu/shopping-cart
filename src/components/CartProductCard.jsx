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
        <>
          <img width="100" src={itemData.image}></img>
          <p>{itemData.title}</p>
          <p>{itemData.price}</p>
          <p>x {quantity}</p>
          <p>price: ${price}</p>
          <button
            className="btn btn-square btn-secondary"
            onClick={handleDelete}
          >
            DELETE
          </button>
        </>
      )}
    </>
  );
}
