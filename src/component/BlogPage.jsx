import React, { useEffect, useState } from "react";
import Bradcum from "./sub_component/Bradcum";
import BlogBox from "./sub_component/BlogBox";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../store/slice/blogReducer";

export default function BlogPage() {
  // const [blogs, setblogs] = useState([]);
  // const url = "http://localhost:8000/blog/";
  // useEffect(() => {
  //   const fechBlog = async () => {
  //     try {
  //       const response = await axios.get(url);
  //       setblogs(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fechBlog();
  // }, []);

  const blog = useSelector((state) => state.blog);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlog());
  }, []);
  console.log(blog);
  return (
    <>
      {/* <Bradcum color="black" title="Blog page" text="abc" /> */}
      <div>
        <h1 className="title">Blog</h1>
      </div>
      <div className="container-xxl">
        <div className="blog-container py-3 py-md-5">
          {blog.art.map((val, ind) => {
            return (
              <BlogBox
                image={val.imageUrl}
                title={val.title}
                text={val.dec}
                link={val._id}
                authar={val.authar}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
