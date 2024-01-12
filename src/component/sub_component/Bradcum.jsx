import React from "react";

export default function Bradcum(props) {
  return (
    <div className="breadcum">
      <img className="breadcum-img" src={props.image || "https://i.pinimg.com/736x/54/62/02/5462026e8f0ad736c0787b4c11170a85.jpg"} alt="bradcum" />
      <div className="body-wrapper">
        <h3 style={{color:props.color}} className="heading">{props.heading || "Heading"}</h3>
        <p style={{color:props.color}} className="text-body">{props.text || "sum text"}</p>
      </div>
    </div>
  );
}
