import Hero from "../../components/Hero";
import Awards from "./Awards";
import FeaturedProducts from "./FeaturedProducts";
import fs2 from "../../assets/fs2.png";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import ReviewSlider from "../../components/ReviewSlider";

export default function HomePage() {
  const navigate = useNavigate();
  useInterv
  const navigateToShop = () => {
    navigate("/shop");
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Hero title="HOMEPAGE!"></Hero>
      <div
        id="featured-products"
        className="h-max lg:px-16 pt-16 pb-20 bg-slate-300 w-full flex flex-col justify-center"
      >
        <p className="self-center text-3xl mb-8">Our Featured Products!</p>
        <FeaturedProducts></FeaturedProducts>
      </div>
      <div className="h-max py-10 bg-slate-200 flex flex-col justify-center items-center text-4xl">
        <p className="mb-10">Our Fake Awards!</p>
        <Awards></Awards>
      </div>
      <div className="bg-slate-300 grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 justify-center items-center text-4xl px-16 p-20 lg:p-10">
        <div className="lg:my-20 flex justify-center">
          <div className="glow shadow-3xl shadow-pastel-pink rounded-full p-10 lg:p-20 max-w-[600px]">
            <img className="m-auto" src={fs2} />
          </div>
        </div>
        <div className="flex flex-col m-auto lg:px-20">
          <p className="self-center lg:self-start lg:text-6xl">
            FREE SHIPPING!
          </p>
          <div className="mt-10">
            <p className="text-lg w-full">
              Aenean a dictum purus. Morbi facilisis nulla id nibh placerat, ac
              placerat ante finibus. Morbi a pharetra sapien, in accumsan nisi.
              Praesent at purus suscipit, finibus nunc aliquet, dictum dolor.
            </p>
          </div>
          <button
            onClick={navigateToShop}
            className="text-white btn btn-primary mt-16 btn-wide self-center lg:self-start"
          >
            {" "}
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="pt-20 pb-40 bg-slate-200 flex flex-col justify-center items-center text-4xl px-6">
        <p className="mb-20 text-4xl text-center">
          What Our Fake Customers Say
        </p>
        <div className="w-full">
          <ReviewSlider></ReviewSlider>
        </div>
      </div>
    </>
  );
}
