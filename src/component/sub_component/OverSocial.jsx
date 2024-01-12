import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
export default function OverSocial() {
  return (
    <>
      <div className="social_acc">
        <div>
          <h2 className="title">Over Social</h2>
          <p>
            Join over community to keep pace with the trend in home and
            lifestyle
          </p>
        </div>
        <div className="social_nav">
          <ul>
            <li>
              <Link className="social instagram" to="/">
                {/* <span className="icon"> */}
                  <FaInstagram className="icon" />
                {/* </span> */}
                Instagram
              </Link>
            </li>
            <li>
              <Link className="social twitter" to="/">
                {/* <span className="icon"> */}
                  <FaTwitter className="icon" />
                {/* </span> */}
                Twitter
              </Link>
            </li>
            <li>
              <Link className="social facebook" to="/">
                {/* <span className="icon"> */}
                  <FaFacebook className="icon"/>
                {/* </span> */}
                Facebook
              </Link>
            </li>
            <li>
              <Link className="social youtube" to="/">
                {/* <span className="icon"> */}
                  <FaYoutube className="icon" />
                {/* </span> */}
                Youtube
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
