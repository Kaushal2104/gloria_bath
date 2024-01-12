import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

export default function SingleProduct(props) {
  return (
    <>
      <div className="product">
        <div className="image-ct zoom-eft">
          <img
            src={
              props.image ||
              "https://i.pinimg.com/564x/1f/cb/e4/1fcbe4f2c00d856f3bdbf6c0b14f6f42.jpg"
            }
            alt="product-images"
          />
        </div>
        <div className="body-text">
          <Link to={"/"}>{props.name || "Product"}</Link>
          <p>
            {props.dec ||
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
          </p>
          <div className="reating"><FaStar className="active"/><FaStar className="active"/><FaStar className="active"/><FaStar/><FaStar/></div>
          <button className="view-btn">View Now</button>
        </div>
      </div>
    </>
  );
}
