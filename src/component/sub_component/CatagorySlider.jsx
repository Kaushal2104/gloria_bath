import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CatagorySlide from "./catagoryComponent/CatagorySlide";

export default function CatagorySlider() {
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
      items: 1,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        removeArrowOnDeviceType={["tablet"]}
      >
        <CatagorySlide
          image="https://i.pinimg.com/564x/37/da/74/37da7407ef4e88bfb39256bf773d79e4.jpg"
          cname={"Catagory-1"}
        />
        <CatagorySlide
          image="https://i.pinimg.com/564x/71/56/e2/7156e25a63f6f84959d63d5db1caab92.jpg"
          cname={"Catagory-2"}
        />
        <CatagorySlide
          image="https://i.pinimg.com/564x/63/32/a6/6332a6818d56debe4a40627e816a9fca.jpg"
          cname={"Catagory-3"}
        />
        <CatagorySlide
          image="https://i.pinimg.com/564x/04/dc/77/04dc77af1277a31ef32992bfaf76cc62.jpg"
          cname={"Catagory-5"}
        />
        <CatagorySlide
          image="https://i.pinimg.com/564x/68/d5/27/68d527c1ab2e7eee189daaa80c2ae8a4.jpg"
          cname={"Catagory-6"}
        />
      </Carousel>
      ;
    </>
  );
}
