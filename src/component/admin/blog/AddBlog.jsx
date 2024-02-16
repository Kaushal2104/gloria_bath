import React from "react";

export default function AddBlog() {
  return (
    <>
      <div>
        <form>
          <div className="row">
            <div>
              <input type="text" placeholder="Blog Title" />
            </div>
            <div>
              <input type="text" placeholder="" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
