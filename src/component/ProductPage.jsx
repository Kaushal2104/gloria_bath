import React, { useEffect, useState } from "react";
import Bradcum from "./sub_component/Bradcum";
import { TbGridDots } from "react-icons/tb";
import { CiGrid2H } from "react-icons/ci";
import SingleProduct from "./sub_component/SingleProduct";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/slice/productReducer";
import loadingGIF from "./admin/assets/image/loading.gif";

export default function Product() {
  const [product, setproduct] = useState([]);

  const storeProducts = useSelector((state) => state.product);
  console.log("store", storeProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const compneyct = ["jaquar", "washbasin", "care"];
  const [gridBtn, setgridBtn] = useState("col");
  // const [catagory, setcatagory] = useState([]);
  // const [sowCt, setsowCt] = useState("all");

  // if (storeProducts.loading) {
  //   return (
  //     <div style={{ display: "flex", justifyContent: "center" }}>
  //       <img width={"100px"} src={loadingGIF} alt="Loading" />
  //     </div>
  //   );
  // }
  if(storeProducts.status === 'rejected'){
    return <div><h2>Database not Work</h2></div>
  }

  return (
    <>
      <Bradcum color={"black"} />
      <div className="container-fluid p-5">
        {/* <div className="navbar">
          <ul>
            <li>
              <button
                className={`btn ${gridBtn === "col" ? "active" : ""}`}
                onClick={() => {
                  setgridBtn("col");
                }}
              >
                <TbGridDots />
              </button>
              <button
                className={`btn ${gridBtn === "row" ? "active" : ""}`}
                onClick={() => {
                  setgridBtn("row");
                }}
              >
                <CiGrid2H />
              </button>
            </li>
            <li></li>
            <li>
              <select
                className="select"
                id="catagory"
                onChange={(e) => {
                  dispatch(getProducts(e.target.value));
                }}
              >
                <option selected value="">
                  All
                </option>
                <option value="washbasin">washbasin</option>
                <option value="jaquar">jaquar</option>
                <option value="care">care</option>
              </select>
            </li>
          </ul>
        </div> */}
        <div>
          <p className="result-show-text">
            <span className="number">({storeProducts.products.count})</span>
            result show
          </p>
        </div>
        <div className="product-filter-wrapper">
          <div className="filter-ct">
            {/* <h3>Catagory</h3> */}
            {/* <div className="compney-selector">
              <select
                className="select"
                onChange={(e) => dispatch(getProducts(e.target.value))}
              >
                <option value="">All Product</option>
                {compneyct.map((val, ind) => {
                  return (
                    <option key={ind} value={val}>
                      {val}
                    </option>
                  );
                })}
              </select>
            </div> */}
          </div>
          <div className={`product-grid-${gridBtn}`}>
            {storeProducts.loading ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img width={"100px"} src={loadingGIF} alt="Loading" />
              </div>
            ) : (
              storeProducts.products.data.map((val, key) => {
                return (
                  <SingleProduct
                    id={val.pid}
                    name={val.name}
                    dec={val.dec}
                    url={val.url}
                  />
                );
              })
            )}

            {/* {storeProducts.products.data.map((val, key) => {
              return (
                <SingleProduct
                  id={val.pid}
                  name={val.name}
                  dec={val.dec}
                  url={val.url}
                />
              );
            })} */}
          </div>
        </div>
      </div>
    </>
  );
}
