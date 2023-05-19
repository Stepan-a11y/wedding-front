import { useEffect, useState } from "react";
import "./Carousel.css";
import Aos from "aos";
import "aos/dist/aos.css";
import rightArrow from "../assets/rightArrow.svg";
import leftArrow from "../assets/leftArrow.svg";

const img = [
  <div id="2" className={`${"slide"} ${"one"}`}></div>,
  <div id="2" className={`${"slide"} ${"two"}`}></div>,
  <div id="3" className={`${"slide"} ${"three"}`}></div>,
  <div id="4" className={`${"slide"} ${"four"}`}></div>,
  <div id="5" className={`${"slide"} ${"five"}`}></div>,
];

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const moveToNextSlide = () => {
    setActiveIndex((current) => {
      // Вычисляем индекс следующего слайда, который должен вывестись
      const res = current === img.length - 1 ? 0 : current + 1;
      // Возвращаем индекс
      return res;
    });
  };

  const moveToPrevSlide = () => {
    setActiveIndex((current) => {
      // Вычисляем индекс следующего слайда, который должен вывестись
      const res = current === 0 ? img.length - 1 : current - 1;
      // Возвращаем индекс
      return res;
    });
  };

  // Вычисляем индекс предыдущего слайда
  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
  // Вычисляем индекс следующего слайда
  const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

  return (
    <div data-aos="fade-up" className="slider">
      <div className="slider-img slider-img-prev" key={prevImgIndex}>
        {img[prevImgIndex]}
      </div>
      <div className="slider-img" key={activeIndex}>
        {img[activeIndex]}
      </div>
      <div className="slider-img slider-img-next" key={nextImgIndex}>
        {img[nextImgIndex]}
      </div>
      <div className="buttonsContainer">
        <div className="skipBtn" onClick={moveToPrevSlide}>
          <img src={leftArrow} className="arrow" />
        </div>
        <div className="skipBtn" onClick={moveToNextSlide}>
          <img src={rightArrow} className="arrow" />
        </div>
      </div>
    </div>
  );
};
