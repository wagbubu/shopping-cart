import Hero from "../../components/Hero";
import FeaturedProducts from "./FeaturedProducts";

export default function HomePage() {
  return (
    <>
      <Hero title="HOMEPAGE!"></Hero>
      <div className="h-max lg:px-16 pt-16 pb-20 bg-slate-300 w-full flex flex-col justify-center">
        <p className="self-center text-3xl mb-8">Our Featured Products!</p>
        <FeaturedProducts></FeaturedProducts>
      </div>
      <div className="h-60 bg-slate-200 flex flex-col justify-center items-center text-4xl">
        <p>Achievements/Awards</p>
      </div>
      <div className="h-96 bg-slate-300 flex flex-col justify-center items-center text-4xl">
        <p>Free shipping?</p>
      </div>
      <div className="h-96 bg-slate-200 flex flex-col justify-center items-center text-4xl">
        <p>Reviews eme?</p>
      </div>
    </>
  );
}
