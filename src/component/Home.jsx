import React from "react";
import Carosar from "./Slider";
import ReviewHome from "./sub_component/ReviewHome";
import TrendingProduct from "./sub_component/TrendingProduct";
import CatagorySlider from "./sub_component/CatagorySlider";
import HomeProductWithDetail from "./sub_component/HomeProductWithDetail";
import OverSocial from "./sub_component/OverSocial";
import { useNavigate } from "react-router";

export default function Home() {
  const navig = useNavigate();
  return (
    <div className="container-fluid p-0">
      <Carosar />
      <div className="container">
        <div className="catagory_slider_wrapper">
          <CatagorySlider />
        </div>
      </div>
      <section className="product-display-data">
        <div className="container">
          <HomeProductWithDetail
            linkID="/singleProduct"
            title="Faucts"
            dec="Shop your bathroom and kitchen sink faucets from a variety of styles and colors to suit every style; including vintage, modern and smart touch sensor faucets."
            image="https://i.pinimg.com/564x/17/d8/47/17d847e63c9a34f696126406d404a6a4.jpg"
          />
          <HomeProductWithDetail
            linkID="/singleProduct"
            dec="Fiora Sigma Silexpol® Oval Countertop Washbasin This stylish Fiora Sigma is a oval counter top washbasin. The Sigma counter top basin combines minimalism with timeless elegance and made of Silexpol® a mixture of polyurethane resin, silica and other minerals. The washbasin is available in a choice of colours and sizes. All Fiora Silexpol washbasins come with a 5 year guarantee. The Sigma basin is designed to suit the Fiora bathroom furniture collection. Basin dimensions Widths: 62.5 cm Projection"
            title="Fiora Sigma Silexpol Oval Countertop Washbasin - Blanco Total"
            image="https://i.pinimg.com/564x/f0/be/9f/f0be9fae86d61b8a475e41d1bb7002a3.jpg"
          />
          {/* <HomeProductWithDetail
            linkID="/"
            title="Parse"
            image="https://i.pinimg.com/564x/59/12/54/591254355764352c04f0196560bbc2f5.jpg"
          /> */}
          {/* <HomeProductWithDetail
            linkID="/"
            title="cera"
            image="https://i.pinimg.com/564x/16/00/97/1600970799b77ab19eb068f54709326b.jpg"
          /> */}
        </div>
      </section>
      <section className="over_product">
        <div className="container">
          <div className="product-wrapper">
            <div className="product">
              <img
                src="https://i.pinimg.com/564x/f9/14/65/f91465e655172dd2b61e896191c09477.jpg"
                alt=""
              />
              <div className="product-det">
                <h3>Product 1</h3>
                <button onClick={() => navig("/singleProduct")}>
                  Watch now
                </button>
              </div>
            </div>
            <div className="product">
              <img
                src="https://i.pinimg.com/564x/ab/10/69/ab1069997f474c99c10ab57543071707.jpg"
                alt=""
              />
              <div className="product-det">
                <h3>Product 2</h3>
                <button onClick={() => navig("/singleProduct")}>
                  Watch now
                </button>
              </div>
            </div>
            <div className="product">
              <img
                src="https://i.pinimg.com/564x/16/06/d5/1606d554d8c3e52107c08d6f3a98a877.jpg"
                alt=""
              />
              <div className="product-det">
                <h3>Product 3</h3>
                <button onClick={() => navig("/singleProduct")}>
                  Watch now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid">
        <div className="letest_collection">
          <div className="row">
            <div className="col-md-6 p-0">
              <div className="product-wrapper">
                <img
                  src="https://i.pinimg.com/564x/88/e8/2e/88e82e360c56b34e9a5af5cc1992f4c6.jpg"
                  alt=""
                />
                <div className="content-wrapper">
                  <h3>title</h3>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <button onClick={() => navig("/singleProduct")}>
                    view Detail
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="product-wrapper">
                <img
                  src="https://i.pinimg.com/564x/6b/62/40/6b62402a1fa7f87cbbd2987bc855d385.jpg"
                  alt=""
                />
                <div className="content-wrapper">
                  <h3>Swirl Is the Most Beautiful Sink Faucet</h3>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <button>view Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="social_media">
        <div className="container">
          <OverSocial />
        </div>
      </section>
      <section className="customer_review">
        <div className="background_image_day">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="title">Customer Review</div>
              </div>
            </div>
            <div className="review_container">
              <ReviewHome />
              <ReviewHome />
              <ReviewHome />
            </div>
          </div>
        </div>
      </section>

      <section>
        <TrendingProduct />
      </section>
      <section className="container-fluid container-xxl">
        <div className="title">PARTNERS WITH US</div>
        <div className="patner-link">
          <div className="ptn-logo">
            <img
              src="https://www.cera-india.com/themes/cera/assets/images/cera-logo-desk.gif"
              alt="cera"
            />
          </div>
          <div className="ptn-logo">
            <img
              src="https://www.jaquar.com/Themes/Jaquar2022/Content/images/logo.svg"
              alt="jaquar"
            />
          </div>
          <div className="ptn-logo">
            <img src="https://www.hindwarehomes.com/images/hhil-logo.png" alt="" />
          </div>
        </div>
      </section>
      <section className="mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.8989419654945!2d72.51888393169077!3d23.050127912015885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b5345125df3%3A0x4f6a7bbb0e60c7c2!2sDrive%20In%20Rd%2C%20Patel%20Society%2C%20Jai%20Ambe%20Nagar%2C%20Thaltej%2C%20Ahmedabad%2C%20Gujarat%20380054!5e0!3m2!1sen!2sin!4v1704798713150!5m2!1sen!2sin"
          width={"100%"}
          height={"450px"}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
