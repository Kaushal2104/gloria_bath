import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
                <FaInstagram className="icon" />
                Instagram
              </Link>
            </li>
            <li>
              <Link className="social twitter" to="/">
                <FaXTwitter className="icon" />
                Twitter
              </Link>
            </li>
            <li>
              <Link className="social facebook" to="/">
                <FaFacebook className="icon" />
                Facebook
              </Link>
            </li>
            <li>
              <Link className="social youtube" to="/">
                <FaYoutube className="icon" />
                Youtube
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
