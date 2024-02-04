/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { deleteItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

export default function CartProductCard({ id, quantity }) {
  const [itemData, setItemData] = useState(null);
  const [ignore, setIgnore] = useState(null);
  const dispatch = useDispatch();

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
  };

  return (
    <>
      {itemData && (
        <>
          <img width="100" src={itemData.image}></img>
          <p>{itemData.title}</p>
          <p>{itemData.price}</p>
          <p>x {quantity}</p>
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
