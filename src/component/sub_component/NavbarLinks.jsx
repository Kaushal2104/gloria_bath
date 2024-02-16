import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function NavbarLinks() {
  return (
    <>
    <div id="nav-header" className="nav-bar">
            <ul className="nav">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/product"}>Prooduct</NavLink>
              </li>
              <li>
                <NavLink to={"/blog"}>Blog</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"catagory"}>Catagory</NavLink>
                <div className="mega-menu">
                  <div className="row">
                    <div className="col-4">
                      <span className="link_title">Kitchan</span>
                      <ul>
                        <li>
                          <Link>Link 1</Link>
                        </li>
                        <li>
                          <Link>Link 1</Link>
                        </li>
                        <li>
                          <Link>Link 1</Link>
                        </li>
                        <li>
                          <Link>Link 1</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <span className="link_title">Leving Room</span>
                      <ul>
                        <li>
                          <Link>Link 2</Link>
                        </li>
                        <li>
                          <Link>Link 2</Link>
                        </li>
                        <li>
                          <Link>Link 2</Link>
                        </li>
                        <li>
                          <Link>Link 2</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <span className="link_title">Bathroom</span>
                      <ul>
                        <li>
                          <Link>Link 3</Link>
                        </li>
                        <li>
                          <Link>Link 3</Link>
                        </li>
                        <li>
                          <Link>Link 3</Link>
                        </li>
                        <li>
                          <Link>Link 3</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link to="about">About us</Link>
              </li>
            </ul>
          </div>
    </>
  )
}
