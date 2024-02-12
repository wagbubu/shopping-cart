import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSingleCategory } from "../features/category_Page/categoryPageSlice";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";

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
      <Hero title={category}></Hero>
      <div className="flex md:max-w-3xl lg:max-w-6xl px-4 mx-auto pb-20">
        <div className="grid gap-4  lg:gap-8 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 justify-items-center mx-auto">
          {status === "succeeded"
            ? products.map((item) => (
                <ProductCard
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  key={item.id}
                  title={item.title}
                ></ProductCard>
              ))
            : "Loading..."}
        </div>
      </div>
    </>
  );
}
