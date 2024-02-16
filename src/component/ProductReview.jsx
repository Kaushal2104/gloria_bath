import React from "react";
import { FaStar } from "react-icons/fa6";

export default function ProductReview(props) {
  const { name, body, image } = props;
  return (
    <div key={props.id} className="review-wp">
      <div className="name-image">
        <div className="image">
          <img
            src={
              image
                ? image
                : "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
            }
            alt="review-images"
          />
        </div>
        <div className="name">
          <h4>{name ? name : "name"}</h4>
          <span className="star">
            <FaStar />
          </span>
        </div>
      </div>
      <div className="review-content">
        <div className="text-body">
          <p>{body ? body : "no text"}</p>
        </div>
      </div>
    </div>
  );
}
