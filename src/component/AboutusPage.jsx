import React from "react";
import Bradcum from "./sub_component/Bradcum";
export default function AboutusPage() {
  return (
    <>
      {/* <Bradcum image={""} /> */}
      <div>
        <div className="aboutus-page">
          <div className="banner">
            <h1 className="title">About us</h1>
            {/* <p className="title-sub-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              officiis.
            </p> */}
          </div>

          <div className="content-wrapper">
            <section className="about-1">
              <div className="container">
                <div className="content-title"></div>
                <div className="content">
                  <p>
                    Welcome to Gloria Bath, your premier destination for
                    top-quality Building Material products in wholesale, retail
                    and Project. Established in 2017, we take pride in being a
                    trusted assembly of brands, offering a diverse range of
                    products to meet your every need. Our showroom is located in
                    the heart of Gujarat in Ahmedabad, where we have been
                    serving our valued customers with excellence and commitment.
                  </p>
                  <p>
                    At Gloria Bath we understand the importance of reliable and
                    stylish Building Materials solutions for both residential
                    and commercial spaces. Our extensive range includes products
                    from renowned brands such as Cera, Franke, Jaguar, Somany,
                    Simpolo, AGL, Geberit, Viega, Finolex, Truflo and more. We
                    bring you the latest designs, advanced technology, and
                    unparalleled functionality to enhance your spaces with
                    sophistication and efficiency.
                  </p>
                </div>
              </div>
            </section>
            <section className="about-2">
              <div className="container">
                <div></div>
                <div className="content">
                  <h3>Why choose us?</h3>
                  <p>
                    Extensive Product Range: Browse through a wide array of
                    sanitary ware merchandise that range from taps and basins to
                    water closets and ceramic finishes. The extensive assortment
                    accommodates all tastes and trends so that you are sure to
                    identify the best selections suited for your requirements.
                  </p>
                  <p>
                    Trusted Brands: We proudly offer superior brands including
                    Cera, Franke, jaquar, Somany and more – brands synonymous
                    with value, reliability and innovation. Shop with confidence
                    knowing you're investing in products that stand up to the
                    luxury standards we're known for.
                  </p>

                  <p>
                    Competitive Pricing: We believe everyone should have access
                    to quality. Competitive pricing throughout our entire range
                    makes premium sanitary ware products affordable without
                    compromising on excellence.
                  </p>
                </div>
              </div>
            </section>
            <section className="about-3">
              <div className="container">
                <div className="content">
                  <p>
                    Expert Guidance: Throughout your shopping experience our
                    team is friendly and knowledgeable, and we are here to help.
                    With product recommendations, design advice, and technical
                    support, we aim to deliver a personalized and smooth
                    experience.
                  </p>
                  <p>
                    Wholesale and Retail Options: Our products are available for
                    both wholesale and retail purchase, and can meet the
                    specific needs of professionals, retailers, homeowners,
                    interior design firms, and architects alike. Attend a
                    training seminar to learn more.
                  </p>
                  <p>
                    Customer Satisfaction: We make customer satisfaction our
                    main focus. We work hard to go above and beyond your
                    expectations with high quality products, exceptional
                    service, and an easy-to-use online website.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
