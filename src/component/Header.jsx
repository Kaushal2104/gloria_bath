import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import MobileHeader from "./MobileHeader";

// mobile header
// import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavbarLinks from "./sub_component/NavbarLinks";
import { MdMenu } from "react-icons/md";

export default function Header(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <div
       
        className="mobile-header d-block d-md-none"
      >
        <img
          width={"100px"}
          style={{ padding: "1rem" }}
          src={props.logo}
          alt="logo"
        />
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img width={"150px"} src={props.logo} alt="logo" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div id="Mobile-Header">
              <NavbarLinks />
            </div>
          </Offcanvas.Body>
        </Offcanvas>

        <div style={{ float: "right" }}>
          {/* <Button className="mobileCanva" onClick={handleShow}>
          </Button> */}
          <button onClick={handleShow} className="mobileCanva">
            <MdMenu />
          </button>
        </div>
      </div>
      <header  style={{ display: location.pathname === "/admin" ? "none" : "block" }}>
        <div className="header-container">
          <div className="logo-container">
            <div className="logo">
              <Link to={"/"}>{/* <img src={props.logo} alt="logo" /> */}</Link>
            </div>
          </div>
          <NavbarLinks />
          <div className="social-icon-container">
            <div className="social-icon">
              <ul className="social-nav">
                <li>
                  {/* <form>
                    <input type="text" placeholder="Search" />
                  </form> */}
                  <form className="d-flex">
                    <div className="search-box_header">
                      <input
                        className="form-control me-2 "
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <div className="search_content">
                        {/* <div className="search_title">search name</div> */}
                      </div>
                    </div>
                    {/* <button onClick={(e)=> e.preventDefault()} className="btn btn-outline-success" type="submit">
                      Search
                    </button> */}
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
