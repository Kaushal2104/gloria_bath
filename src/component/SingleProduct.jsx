import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
import CatagorySlide from "./sub_component/catagoryComponent/CatagorySlide";
import axios from "axios";

export default function SingleProduct() {
  const [decBtn, setdecBtn] = useState("dec");
  const [commentCreate, setcommentCreate] = useState({ uid: "1", pid: "023" });
  const [res, setres] = useState({});

  const showmessage = (status, message) => {
    setres({ status: status, message: message });
    setTimeout(() => {
      setres({ status: "", message: "" });
    }, 3000);
  };

  const creatcmt = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/cmt/createComment", commentCreate)
      .then((response) => {
        setres(response.data);
        showmessage(response.data.status, response.data.message);
        if (response.data.status) {
          setcommentCreate({
            uid: "1",
            pid: "023",
            name: "",
            email: "",
            body: "",
          });
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
    //
  };

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="singleProduct">
            <div className="product-image">
              <img
                src="https://i.pinimg.com/564x/3c/27/40/3c274011722a188df9bb8e4d77ffab79.jpg"
                alt="product-images"
              />
            </div>
            <div className="product-details">
              <h3 className="name">Product name</h3>
              <div className="prd-id">
                <h3>Product ID : 122</h3>
              </div>
              <span className="rating-revies">
                <span className="star">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="review-count">(50) Reviews</span>
              </span>
              <div className="price">
                <span className="label">Price</span>
                <span className="price-tag">
                  <MdCurrencyRupee /> 100
                </span>
              </div>
              <div>
                <button className="call-btn">Call now</button>
              </div>
              <div className="drc-detail">
                <div className="button">
                  <button
                    onClick={() => setdecBtn("dec")}
                    className={`${decBtn === "dec" ? "active" : ""}`}
                  >
                    Decptrion
                  </button>
                  <button
                    className={`${decBtn === "dat" ? "active" : ""}`}
                    onClick={() => setdecBtn("dat")}
                  >
                    Details
                  </button>
                </div>
                <div className="box-dec">
                  <div
                    style={{ display: decBtn === "dec" ? "block" : "none" }}
                    className="dec"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consectetur earum ad nam quas, tempora distinctio labore
                    odit sapiente, aliquam ipsa quibusdam debitis ea similique,
                    excepturi molestias suscipit repellat error impedit sed.
                    Doloribus eaque vitae nisi veniam! Corporis consectetur fuga
                    dicta?
                  </div>
                  <div
                    style={{ display: decBtn === "dat" ? "block" : "none" }}
                    className="detail"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus, cum laudantium! Voluptates suscipit expedita sunt
                    iste, eaque accusamus? Amet consequuntur repudiandae cumque
                    totam. Itaque debitis aliquid, consectetur nostrum sed
                    nobis?
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comment-container">
            <form className="review-form">
              <h4 className="review-title">Submit your review</h4>
              <div className="row">
                <div className="col-md-6">
                  <div className="py-4 py-md-0">
                    <label htmlFor="name">Name</label>
                    <br />
                    <input
                      type="text"
                      id="name"
                      value={commentCreate.name}
                      onChange={(e) =>
                        setcommentCreate({
                          ...commentCreate,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="py-4 py-md-0">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                      value={commentCreate.email}
                      onChange={(e) =>
                        setcommentCreate({
                          ...commentCreate,
                          email: e.target.value,
                        })
                      }
                      type="text"
                      id="email"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="py-4">
                    <label htmlFor="review-text">Review text</label>
                    <textarea
                      id="review-text"
                      value={commentCreate.body}
                      onChange={(e) =>
                        setcommentCreate({
                          ...commentCreate,
                          body: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                </div>
                <div className="col-12">
                  <button onClick={(e) => creatcmt(e)}>Submit</button>
                  <span className="messages-show">{res.message}</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
