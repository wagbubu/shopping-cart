import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../features/shop_page/shopPageSlice";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";

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
      <Hero title="shop"></Hero>
      <div className="flex md:max-w-3xl lg:max-w-6xl px-8 mx-auto pb-20">
        <div className="grid gap-4  lg:gap-8 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 justify-items-center mx-auto">
          {status == "loading"
            ? "Loading..."
            : products.map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  title={item.title}
                ></ProductCard>
              ))}
        </div>
      </div>
    </>
  );
}

//add a tag where href=`/product/${id}`
