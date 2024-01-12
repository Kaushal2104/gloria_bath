import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { FaFacebookF, FaWhatsapp, FaPinterest } from "react-icons/fa";
// import { IoMenu } from "react-icons/io5";
// import { IoMdClose } from "react-icons/io";

export default function Header(props) {
  // const [mobileMenue, setmobileMenue] = useState(false);

  return (
    <div className="container-fluid">
      <header>
        <div className="header-container">
          <div className="logo-container">
            <div className="logo">
              <Link to={"/"}>
                <img src={props.logo} alt="logo" />
              </Link>
            </div>
            {/* <div className="menu_close_button">
              <button
                onClick={() => setmobileMenue(mobileMenue ? false : true)}
              >
                {mobileMenue ? <IoMdClose /> : <IoMenu />}
              </button>
            </div> */}
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
                <NavLink to={"/"}>Catagory</NavLink>
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
            </ul>
          </div>
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
                {/* <li>
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
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
