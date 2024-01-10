import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

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
      <Link to="/">
          <Button className="read_more_link" title="Read more">Read more</Button>
        </Link>
      </div>
    </div>
  );
}
