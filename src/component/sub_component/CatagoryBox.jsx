import React from "react";
import { Link } from "react-router-dom";

export default function CatagoryBox(props) {
  const { image, text, link, title } = props;
  return (
    <>
      <Link key={props.id} to={ValidityState.id || "/"}>
        <div className="catagory">
          <img
            src={
              image ||
              "https://i.pinimg.com/564x/09/e1/95/09e19514ab8af27ada12312b96c63666.jpg"
            }
            alt="catagory"
          />
          <div className="content">
            <h4>{title || "Kitchen"}</h4>
            <p>
              {text ||
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,similique"}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
