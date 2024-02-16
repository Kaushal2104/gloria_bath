import React, { useEffect } from "react";
import "./blog.scss";
import { useDispatch, useSelector } from "react-redux";
import { getBlog, deleteBlog } from "../../../store/slice/blogReducer";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

export default function Blog() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlog());
  }, []);
  const blogs = useSelector((state) => state.blog.art);
  //   console.log(blogs);
  const blogDelete = (id) => {
    dispatch(deleteBlog(id));
    dispatch(getBlog());
  };
  return (
    <>
      <div>
        <div><h1 className="text-center py-3">Blog</h1></div>
        <div>
          <ul className="button-nav">
            <li>
              <button>
                <span>
                  <FaPlus />
                </span>
                <span>Add Blog</span>
              </button>
            </li>
          </ul>
        </div>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Id</th>
              <th>Title</th>
              <th>Totle Articel</th>
              <th>Category</th>
              <th>Image</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((val, key) => {
              return (
                <>
                  <tr>
                    <td style={{ textAlign: "center" }}>{key}</td>
                    <td>{val._id}</td>
                    <td>{val.title}</td>
                    <td className="text-center">{val.article.length}</td>
                    <td>
                      {val.category.map((val) => {
                        return <li>{val}</li>;
                      })}
                    </td>
                    <td>
                      {val.imageUrl ? (
                        <img height={"30px"} src={val.imageUrl} alt="" />
                      ) : (
                        "<span>No Image</span>"
                      )}
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <button className="update">
                          <GrUpdate />
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <button className="delete" onClick={() => blogDelete(val._id)}>
                          <MdDeleteOutline />
                        </button>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
