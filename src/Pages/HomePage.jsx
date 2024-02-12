import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero title="HOMEPAGE!"></Hero>
      <div className="h-96 bg-slate-300 flex flex-col justify-center items-center text-4xl">
        <p>Featured</p>
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
