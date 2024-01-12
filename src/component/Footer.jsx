import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <div style={{ padding: "0" }} className="container-fluid">
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
                    <Link className="f_link" to={"/"}>Home</Link>
                  </li>
                  <li className="f_item">
                    <Link className="f_link" to={"/product"}>Product</Link>
                  </li>
                  <li className="f_item">
                    <Link className="f_link"></Link>
                  </li>
                  <li className="f_item">
                    <Link className="f_link"></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6">
                <ul>
                  <li className="f_item">
                    <Link></Link>
                  </li>
                  <li className="f_item">
                    <Link></Link>
                  </li>
                  <li className="f_item">
                    <Link></Link>
                  </li>
                  <li className="f_item">
                    <Link></Link>
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
