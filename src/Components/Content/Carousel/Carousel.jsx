import React from "react";
import "./Carousel.scss";
import Input from "../../Input/Input";

const Carousel = () => {
  return (
    <div className="l-carousel">
      <div className="l-carousel__bg"></div>
      <div className="l-carousel__inner">
        <h1 className="l-carousel__inner__txt01">Unlimited movies, TV shows, and more.</h1>
        <p className="l-carousel__inner__txt02">Watch anywhere. Cancel anytime.</p>
        <p className="l-carousel__inner__txt03">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="l-carousel__inner__email">
          <div className="l-carousel__inner__email__container">
            <input type="email" name="email" />
            <label htmlFor="email" className="l-carousel__inner__email__container__label">
              Email Address
            </label>
          </div>
          <Input />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
