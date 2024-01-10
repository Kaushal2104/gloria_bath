import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaWhatsapp, FaPinterest } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [menue, setmenue] = useState(false);
  return (
    <div className="container-fluid">
      <header>
        <div className="header-container">
          <div className="logo-container">
            <div className="logo"></div>
            <div className="menu_close_button">
              <button onClick={() => setmenue(menue ? false : true)}>
                {menue ? <IoMdClose /> : <IoMenu />}
              </button>
            </div>
          </div>
          <div className="nav-bar">
            <ul className="nav">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>about</NavLink>
              </li>
              <li>
                <NavLink to={"/contact-us"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"product"}>Product</NavLink>
              </li>
            </ul>
          </div>
          <div className="social-icon-container">
            <div className="social-icon">
              <ul className="social-nav">
                <li>
                  <form>
                    <input type="text" placeholder="Search" />
                  </form>
                </li>
                <li>
                  <ul className="social">
                    <li>
                      <Link to={"#"}>
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <FaWhatsapp />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <FaPinterest />
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
