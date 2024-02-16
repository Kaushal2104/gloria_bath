import React, { useEffect, useState } from "react";
import CatagoryBox from "./sub_component/CatagoryBox";
import axios from "axios";
import { useLocation } from "react-router";
import Bradcum from './sub_component/Bradcum'

export default function CatagoryPage() {
  const location = useLocation();
 
  const [category, setcategory] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const url = `http://127.0.0.1:8000/category/${location.search}`;
        const response = await axios.get(url);
        setcategory(response.data);
    
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, []);
  return (
    <>
    <Bradcum text={'This sum text'} color={'white'} heading={'Category'}/>
      <div style={{ minHeight: "100vh" }} className="container-fluid">
        {/* <div className="catagory-title">New branded catagory</div> */}
        <div className="title">catagorys</div>
        <div className="catagory-wrapper">
          {category.map((val, ind) => {
            return (
              <CatagoryBox
                id={val._id}
                image={val.url}
                title={val.name}
                text={val.dec}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
