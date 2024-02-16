import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer(props) {
  const location = useLocation();

  return (
    <div
      style={{
        padding: "0",
        display: location.pathname === "/admin" ? "none" : "block",
      }}
      className="container-fluid"
    >
      <footer>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-md-6">
                <Link to={"/"}>
                  <img className="logo" src={props.logo} alt="logo" />
                </Link>
              </div>
              <div className="col-md-6">
                <ul className="f_nav">
                  <li className="f_item">
                    <Link className="f_link" to={"/"}>
                      Home
                    </Link>
                  </li>
                  <li className="f_item">
                    <Link className="f_link" to={"/product"}>
                      Product
                    </Link>
                  </li>
                  <li className="f_item">
                    <Link className="f_link" to={"/blog"}>
                      Blog
                    </Link>
                  </li>
                  <li className="f_item">
                    <Link className="f_link" to={"/contact"}>
                      Contact
                    </Link>
                  </li>
                  <li className="f_item">
                    <Link className="f_link" to={"/about"}>
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <li>
                    <Link to={"/"}></Link>
                  </li>
                  <li>
                    <Link></Link>
                  </li>
                  <li>
                    <Link></Link>
                  </li>
                  <li>
                    <Link></Link>
                  </li>
                  <li>
                    <Link></Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <h4>Address</h4>
                <address>
                  acmeunivers-itech <br />
                  ahmedabad,Driving Rd,
                  <br />
                  Doordarshan Tower
                </address>
                <ul>
                  <li>
                    <a target="_blenk" href="">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a target="_blenk" href="">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a target="_blenk" href="">
                      <FaWhatsapp />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </footer>
    </div>
  );
}
