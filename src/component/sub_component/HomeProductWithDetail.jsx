import React from "react";
import { Link } from "react-router-dom";

export default function HomeProductWithDetail(props) {
  return (
    <>
      <div className="wrapper-ct">
        <div className="product-image">
          <img
            src={
              props.image ||
              "https://i.pinimg.com/564x/56/55/53/565553e0bd151f6ee95061de0552f143.jpg"
            }
            alt="product_image"
          />
        </div>
        <div className="content">
          <div>
            <h3>{props.title || "Jaquar"}</h3>
            <p>
              {props.dec ||
                ` Go Green 10 | Colour Finishes 12 | Arc 20 Queen’s Prime 24 |
              Continental Prime 28 Kubix Prime 31 | Opal Prime 35 Ornamix Prime
              39 | Alive 43 | Lyric 46 Aria 50 | Fonte 54 | D’Arc 58 Vignette
              Prime 62 | Fusion 66 | Solo 71 Queen’s 77 | Florentine 80 |
              Clarion 89 Continental 92 | Sensor Taps 96 Blush Sensor 100 | New
              Age Pressmatic 102 Pressmatic 104 | Medi Series 106 Spout
              Operating Taps 108 Flush Valves 110 | i Flush 113 Bathtub Spouts
              116 Bath Accessories 120 | Allied 127`}
            </p>
            <div className="link-read">
              <Link to={props.linkID}>Read more</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
