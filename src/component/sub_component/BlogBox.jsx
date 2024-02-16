import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { singleBlog, selectBlog } from "../../store/slice/blogReducer";
import { useDispatch } from "react-redux";

export default function BlogBox(props) {
  const { link, title, text, image, authar } = props;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const navigateBlog = (link) => {
    dispatch(selectBlog(link));
    navigate("/singleBlog");
  };

  return (
    <>
      <div className="blog">
        <div className="image-ct">
          <Link state={link} to={"/singleBlog"}>
            <img
              src={
                image ||
                "https://i.pinimg.com/564x/5d/71/72/5d7172216c1eb9ad40512f109ac5e2a4.jpg"
              }
              alt=""
            />
          </Link>
        </div>
        <div className="content-ct">
          <p className="authar">{authar || "Kauhsal patel"}</p>
          <h2>{title || "title"}</h2>
          <p>
            {text || "Decptrion"}Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          {/* <Link to={"/"}> */}
          {/* <button onClick={() => dispatch(singleBlog(link))}>Reed more</button> */}
          <button className="reed-more-btn" onClick={() => navigateBlog(link)}>
            Reed more to
          </button>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
}
