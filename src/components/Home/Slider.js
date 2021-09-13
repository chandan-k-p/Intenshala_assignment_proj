import React, { useState } from "react";
import { sliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./Slider.css";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {sliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="Food Product" className="image" />
              )}
            </div>
          );
        })}
      </section>
      <div className="container">
        <h1 className="text-center text-success"> CAKE </h1>
        <p>
          1.Cake is a form of sweet food made from flour, sugar, and other
          ingredients, that is usually baked <br></br>2.The most commonly used
          cake ingredients include flour, sugar, eggs, butter or oil or
          margarine, a liquid, and a leavening agent, such as baking soda or
          baking powder
        </p>
        <h1 className="text-center text-success">BREAD</h1>
        <p>
          bread is Slightly moist, tender and Moist, tender and light Soft,
          springy texture, flaky crumb, with a medium crumb, with medium fine,
          tender and slightly moist fine grain. evenly distributed air with fine
          grain, thin- spaces.
        </p>
      </div>
    </div>
  );
};

export default Slider;
