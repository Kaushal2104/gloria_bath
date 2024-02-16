import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

export default function SingleProduct(props) {
  const navigate = useNavigate();
  return (
    <>
      <div key={props.id} className="product">
        <div className="image-ct zoom-eft">
          <img
            src={
              props.url ||
              "https://i.pinimg.com/564x/1f/cb/e4/1fcbe4f2c00d856f3bdbf6c0b14f6f42.jpg"
            }
            alt="product-images"
          />
        </div>
        <div className="body-text">
          <Link to={"/singleProduct"}>{props.name || "Product"}</Link>
          <p>{props.dec || "No decptrion"}</p>
          <div className="reating">
            <FaStar className="active" />
            <FaStar className="active" />
            <FaStar className="active" />
            <FaStar />
            <FaStar />
          </div>
          <Link to={"/singleProduct"}state={props.id}>
            <button className="view-btn">View Now</button>
          </Link>
        </div>
      </div>
    </>
  );
}
