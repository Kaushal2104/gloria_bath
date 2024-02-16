import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import Bradcum from "./sub_component/Bradcum";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ContactUs() {
  const [form, setform] = useState({});
  const [popup, setpopup] = useState({});
  const [mess, setmess] = useState();
  // message popup
  const messFn = (message) => {
    setmess(message);
    console.log(mess);
    setTimeout(() => {
      setmess("");
    }, 2000);
  };

  const submit = async (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/contact/create", form)
      .then((response) => {
        if (response.status === 201) {
          setform({ name: "", email: "", mobile: "", text: "" });
          messFn("Data sent successfully");
        }
      })
      .catch((error) => {
        // console.log(error.response.data.errors);
        setpopup(error.response.data.errors);
      });
  };

  return (
    <>
      <Bradcum
        color={"white"}
        image={
          "https://i.pinimg.com/564x/1e/24/3e/1e243e50024aa2ef0e778907b35e18bf.jpg"
        }
      />

      <div className="container my-3 my-md-5">
        <div className="row g-4 px-4">
          <div className="col-12 col-md-7">
            <div className="contact-form">
              <div className="row">
                <div className="form-title">Get contact</div>
              </div>
              <form>
                <div className="row">
                  <div className="col-12">
                    <input
                      value={form.name}
                      onChange={(e) =>
                        setform({ ...form, name: e.target.value })
                      }
                      type="text"
                      placeholder="Name"
                    />
                    <div>{popup.name && popup.name.message}</div>
                  </div>
                  <div className="col-md-6">
                    <input
                      value={form.email}
                      onChange={(e) =>
                        setform({ ...form, email: e.target.value })
                      }
                      type="text"
                      placeholder="Email"
                    />
                    <div>{popup.email && popup.email.message}</div>
                  </div>
                  <div className="col-md-6">
                    <input
                      value={form.mobile}
                      onChange={(e) =>
                        setform({ ...form, mobile: e.target.value })
                      }
                      type="number"
                      placeholder="Number"
                    />
                    <div>{popup.number && popup.number.message}</div>
                  </div>
                  <div className="col-12">
                    <textarea
                      value={form.text}
                      onChange={(e) =>
                        setform({ ...form, text: e.target.value })
                      }
                      placeholder="Your message"
                    ></textarea>
                    <div>{popup.text && popup.text.message}</div>
                  </div>
                  <div className="col-12">
                    <button onClick={(e) => submit(e)} className="submit-btn">
                      Submit
                    </button>

                    {mess && (
                      <span className="form-message" style={{ color: "green" }}>
                        {mess}
                      </span>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="row">
              <div className="form-title">Get social</div>
            </div>
            <div className="row my-4">
              <div className="col-12">
                <div className="addresa-wrapper">
                  Address
                  <address>
                    acmeunivers-itech
                    <br /> gala empire,doordarsan tower,ahmedabad,gujarat
                  </address>
                </div>
                <ul className="contact-nav">
                  <li>
                    <Link to="tel:0000000000">
                      <IoIosCall className="call-icon" />
                      000-0000-000
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:kg21041999@gmail.com">
                      <BiLogoGmail className="mail-icon" />
                      test@gmail.com
                    </Link>
                  </li>
                </ul>

                <div>
                  <ul className="social-nav">
                    <li>
                      <Link to="/">
                        <FaFacebook className="facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaInstagram className="instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaTwitter className="twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaYoutube className="youtube" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14685.515963071111!2d72.5323023!3d23.046563149999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84afbc804959%3A0x1bd6f237ba587f77!2sSterling%20Hospitals%20-%20Memnagar!5e0!3m2!1sen!2sin!4v1705579805311!5m2!1sen!2sin"
          width="100%"
          height="450px"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
