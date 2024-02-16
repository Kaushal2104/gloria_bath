import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function Bradcum(props) {
  const { image, color, heading, text } = props;
  return (
    <div className="breadcum">
      <img
        className="breadcum-img"
        src={
          image ||
          "https://i.pinimg.com/736x/54/62/02/5462026e8f0ad736c0787b4c11170a85.jpg"
        }
        alt="bradcum"
      />
      <div className="body-wrapper">
        <h3 style={{ color: color || "black" }} className="heading">
          {heading || "Heading"}
        </h3>
        <p
          style={{ color: color || "black",fontSize: "1.3rem",
           }}
          className="text-center"
        >
          {text || "sum text"}
        </p>
        <div style={{ width: "max-content", margin: "auto" }}></div>
      </div>
    </div>
  );
}
