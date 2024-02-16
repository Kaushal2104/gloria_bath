import axios from "axios";
import React, { useState } from "react";
import ProductReview from "./ProductReview";

export default function Comment() {
  const [commentData, setcommentData] = useState({});

  // get comment function
  const [comments, setcomments] = useState([]);
  const getComment = () => {
    axios
      .get("http://127.0.0.1:8000/cmt")
      .then((response) => {
        setcomments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getComment();

  // create comment
  const createComments = async (e) => {
    e.preventDefault();
    try {
      const create = await axios.post(
        "http://127.0.0.1:8000/cmt/postComment",
        commentData
      );
      // console.log(create.data);
      if (create.data.status) {
        setcommentData({ name: "", email: "", text: "" });
        msgFn(create.data.status, create.data.message);
        getComment();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // comment success message
  const [message, setmessage] = useState({});
  const msgFn = (status, message) => {
    setmessage({ status: status, message: message });
    setTimeout(() => {
      setmessage({});
    }, 2000);
  };

  return (
    <>
      <form className="review-form">
        <h4 className="review-title">Submit your review</h4>
        <div className="row">
          <div className="col-md-6">
            <div className="py-4 py-md-0">
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                id="name"
                value={commentData.name}
                onChange={(e) =>
                  setcommentData({
                    ...commentData,
                    name: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="py-4 py-md-0">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="text"
                id="email"
                value={commentData.email}
                onChange={(e) =>
                  setcommentData({
                    ...commentData,
                    email: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="col-12">
            <div className="py-4">
              <label htmlFor="review-text">Review text</label>
              <textarea
                value={commentData.text}
                onChange={(e) =>
                  setcommentData({
                    ...commentData,
                    text: e.target.value,
                  })
                }
              ></textarea>
            </div>
          </div>
          <div className="col-12">
            <button onClick={(e) => createComments(e)}>Submit</button>
            <span className="messages-show">{message.message}</span>
          </div>
        </div>
      </form>
      <div className="public-review">
        <div className="rew-title">
          <h3>All review ({comments.length})</h3>
        </div>
        {comments.map((val, ind) => {
          return <ProductReview body={val.text} name={val.name} id={val._id} />;
        })}
      </div>
    </>
  );
}
