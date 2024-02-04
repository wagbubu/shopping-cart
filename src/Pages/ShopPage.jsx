import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../features/shop_page/shopPageSlice";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

export default function ShopPage() {
  const products = useSelector((state) => state.shop.data);
  const status = useSelector((state) => state.shop.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllProducts());
    }
  }, [status, dispatch]);

  return (
    <>
      {status == "loading"
        ? "Loading..."
        : products.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              title={item.title}
            ></ProductCard>
          ))}
    </>
  );
}

//add a tag where href=`/product/${id}`
