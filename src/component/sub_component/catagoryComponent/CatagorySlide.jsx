import React from "react";
import slideImage from "../../../asset/image/slider/slide1.jpg";
import { Link } from "react-router-dom";

export default function CatagorySlide(props) {
  return (
    <Link to={'/'}>
    <div className="catagory_slide">
      <div className="content">
        <img src={props.image || slideImage} alt="slide-images" />
        <div className="title_ct">
          <h4>
            <Link to={"/"}>{props.cname || "Catagory Name"}</Link>
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ullam.</p>
        </div>
      </div>
    </div>
    </Link>
  );
}
