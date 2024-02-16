import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CatagorySlide from "./catagoryComponent/CatagorySlide";
import axios from "axios";

export default function CatagorySlider() {
  const [category, setcategory] = useState([]);
  useEffect(() => {
    const url = `http://127.0.0.1:8000/category`;
    const fetchCategory = async () => {
      try {
        const response = await axios(url);
        setcategory(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {category.map((val, ind) => {
          return (
            <CatagorySlide
              id={val._id}
              image={val.url}
              cname={val.name}
              dec={val.dec}
            />
          );
        })}
      </Carousel>
      ;
    </>
  );
}
