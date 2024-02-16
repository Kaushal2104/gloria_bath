import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { MdCurrencyRupee } from "react-icons/md";

import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { createProduct } from "../store/slice/productReducer";
export default function SingleProduct() {
  const [prd, setprd] = useState([]);
  const loc = useLocation();
  const navigat = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/product/single/${loc.state}`
        );
        setprd(response.data[0]);
      } catch (error) {
        console.log(error);
        // navigat('/')
        // console.log(error)
      }
    };
    fetchProduct();
    // if (loc.state) {
    //   axios
    //     .get(`http://localhost:8000/product/single/${loc.state}`)
    //     .then((response) => {
    //       setprd(response.data[0]);
    //     })
    //     .catch((err) => {
    //       // console.log();
    //       if (err.response.status === 404) {
    //         navigat("/");
    //       }
    //     });
    // } else {
    //   navigat("/");
    // }
  }, []);
  // console.log(prd);
  return (
    <>
      <section className="single-page-product">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="product-image">
                <img src={prd.url} alt="Product-img" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="product_content">
                <h3 className="product-name">{prd.name}</h3>
                <p className="product-id">
                  <span>Product_id : </span>
                  {prd.pid}
                </p>
                <div>
                  <p className="price">
                    <span>
                      Price : <MdCurrencyRupee />
                    </span>
                    {prd.price}
                  </p>
                  <ul className="category-nav">
                    <li className="category-title">Category : </li>

                    {prd.category
                      ? prd.category.map((val) => {
                          return (
                            <li>
                              <Link to={"/"}>{val}</Link>
                            </li>
                          );
                        })
                      : ""}
                  </ul>
                </div>
                <div>
                  <p className="dec">
                    <span className="dec-title">Description : </span>
                    {prd.dec}
                  </p>
                </div>
                <div>
                  <Link to={"/contact"}></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
