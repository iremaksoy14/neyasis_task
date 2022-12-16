import React from "react";
import "./Slider.css";
import leftArrow from "../../../assets/images/left-arrow.png";
 import rightArrow from "../../../assets/images/right-arrrow.png";


export default function BtnSlider({ direction, moveSlide }) {
  
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? leftArrow : rightArrow} />
    </button>
  );
}