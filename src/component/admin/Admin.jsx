import React, { useEffect } from "react";
import "./admin.scss";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../asset/image/logo/logo.png";
// import { click } from "@testing-library/user-event/dist/click";
export default function Admin() {
  const navigate = useNavigate;
  const openWindow = () => {
    navigate("/admin/products");
  };
  openWindow();
  // useEffect(() => {}, []);

  return (
    <>
      <div className="container-fluid">
        <div className="admin-grid">
          <div className="navbar">
            <div className="logo">
              <div>
                <img src={""} alt="Logo" />
              </div>
            </div>
            <ul>
              <li>
                <Link to="user">User</Link>
              </li>
              <li>
                <Link to="products">Product</Link>
              </li>
              <li>
                <Link to="blog">Blog</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="data-ct">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
