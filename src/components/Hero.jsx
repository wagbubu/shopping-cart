import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero-final.jpg";
/* eslint-disable react/prop-types */
export default function Hero() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/shop");
    window.scrollTo(0, 0);
  };
  return (
    <div
      className="hero min-h-[40rem] bg-[center_right_-6rem] bg-no-repeat lg:bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content lg:absolute lg:top-50 lg:left-0 text-center text-neutral-content lg:ml-20 lg:text-left">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">FakeStore</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button
            onClick={handleButtonClick}
            className="btn px-6 btn-wide btn-sm  mt-4"
          >
            SHOP
          </button>
        </div>
      </div>
    </div>
  );
}
