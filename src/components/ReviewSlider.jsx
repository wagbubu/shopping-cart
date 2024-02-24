import ketchap from "../assets/ketchap.jpg";
import tartar from "../assets/tartar.jpg";
import potey from "../assets/potey.jpg";
import champi from "../assets/champi.jpg";
import peppa from "../assets/peppa.jpg";
import fakeCustomer from "../assets/fakeCustomer.jpeg";
import ReviewCard from "./ReviewCard";
import { useState } from "react";
import { useEffect } from "react";
const FAKE_REVIEWS = [
  {
    name: "Raven Guirao",
    img: fakeCustomer,
    message:
      "Wow! This store lives up to its name, it's so fake, it's so unreal!",
  },
  {
    name: "Ketchap Guirao",
    img: ketchap,
    message: "Don't look straight at me or I'm gonna slash your face",
  },
  {
    name: "Tartar Guirao",
    img: tartar,
    message:
      "NYEAW NYEAW NYEAW! I love zoomies at midnight and jump at my owner's back!",
  },
  {
    name: "Potato Guirao",
    img: potey,
    message: "MEEOOOWW! I love my owner when I'm hungry",
  },
  {
    name: "Champi Guirao",
    img: champi,
    message:
      "My owner keeps buying a pair of slippers, I guess it's my toy! ARF!",
  },
  {
    name: "Peppa Guirao",
    img: peppa,
    message:
      "OINK! I'm Peppa, I love eating even non edible things. I will eat everything!",
  },
];
export default function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const slider = setTimeout(
      () =>
        setCurrentIndex((index) => {
          if (index > 4) return 0;
          return index + 1;
        }),
      3500
    );
    return () => {
      clearTimeout(slider);
    };
  }, [currentIndex]);

  return (
    <ul className="flex overflow-hidden">
      {FAKE_REVIEWS.map((reviewer, index) => (
        <ReviewCard
          currentIndex={currentIndex}
          key={index}
          name={reviewer.name}
          img={reviewer.img}
        >
          {reviewer.message}
        </ReviewCard>
      ))}
    </ul>
  );
}
