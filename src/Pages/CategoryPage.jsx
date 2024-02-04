import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSingleCategory } from "../features/category_Page/categoryPageSlice";
import ProductCard from "../components/ProductCard";

export default function CategoryPage() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.category.data);
  const status = useSelector((state) => state.category.status);

  useEffect(() => {
    dispatch(getSingleCategory(category));
  }, [dispatch, category]);

  return (
    <>
      {status === "succeeded"
        ? products.map((item) => (
            <ProductCard
              id={item.id}
              key={item.id}
              title={item.title}
            ></ProductCard>
          ))
        : "Loading..."}
    </>
  );
}
