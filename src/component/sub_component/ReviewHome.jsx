import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

export default function ReviewHome() {
  return (
    <div className="review">
      <div>
        <div className="review-image">
          <img
            src="https://wri-india.org/sites/default/files/styles/profile/public/avtar-b-2020.jpg?itok=7xj_Xrur"
            alt="review_image"
          />
        </div>
        <div className="review_name">
          <h3>Name</h3>
          <div><span className="review-star"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span></div>
        </div>
      </div>
      <div className="review-body">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga omnis
          ab molestiae, explicabo vel quasi distinctio ipsam quae quia mollitia,
          soluta corrupti laudantium cumque, necessitatibus ipsa eaque nemo
          voluptatibus repellendus!
        </p>
      </div>
      <div style={{textAlign:"center"}}>
      <Link to="/singleProduct">
         <button>Read more</button>
        </Link>
      </div>
    </div>
  );
}
