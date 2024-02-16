import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

export default function SingleBlog() {
  const navigate = useNavigate();
  const blogData = useSelector((state) => state.blog.oneBlog[0]);
  if (blogData === undefined) {
    navigate("/");
    return <h1>No Blog Found</h1>;
  }
  console.log(blogData);

  return (
    <>
      <div className="container py-2 py-md-5">
        <div className="row">
          <div className="col-12">
            <div className="blog-image">
              <img src={blogData.imageUrl} alt="blog" />
            </div>
          </div>
          <div className="col-12">
            <div>
              <h3 className="title-blog">{blogData.title}</h3>
              <p className="authar-time">
                <span className="authear">{blogData.authar}</span> |
                <span className="time">{blogData.createdAt}</span>
              </p>
              <ul className="category-navbar">
                <li>
                  <h2>Category : </h2>
                </li>
                {blogData.category.map((val) => {
                  return (
                    <li>
                      <Link to={"/"}>{val}</Link>
                    </li>
                  );
                })}
              </ul>
              <h4>Describion</h4>
              <p className="blog-dec">{blogData.dec}</p>
              <ul className="blog-artical">
                <h4>Artical</h4>
                {blogData.article.map((val) => {
                  return (
                    <li className="artical">
                      <p>{val}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-sm-6">
            <div>
              <Link className="goto-link" to={"/blog"}>
                {/* <span className="btn-icon">
                  <IoArrowBackOutline />
                </span> */}
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
