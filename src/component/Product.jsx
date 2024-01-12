import React, { useState } from "react";
import Bradcum from "./sub_component/Bradcum";
import { TbGridDots } from "react-icons/tb";
import { CiGrid2H } from "react-icons/ci";
import SingleProduct from "./sub_component/SingleProduct";

export default function Product() {
  const [gridBtn, setgridBtn] = useState("col");
  const [catagory, setcatagory] = useState("All");
  return (
    <>
      <Bradcum color={"black"} />
      <div className="container">
        <div className="navbar">
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
            <li>
              <select id="catagory"
                onChange={(e) => {
                  setcatagory(e.target.value);
                }}
              >
                <option value="all product">Choos Catagory</option>
                <option value="kitchan">Kitchan</option>
                <option value="Bathroom">Bathroom</option>
              </select>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-center">
            <span className="catagory-text">Catagory : {catagory}</span>
          </h4>
          <p className="result-show-text">
            <span className="number">(200)</span> result show
          </p>
        </div>
        <div className={`product-grid-${gridBtn}`}>
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
        </div>

      </div>
    </>
  );
}
