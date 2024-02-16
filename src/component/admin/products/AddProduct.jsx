import React from "react";
import "./products.scss";

export default function AddProduct() {
  return (
    <>
      <form>
        <div className="form-addProduct">
          <div>
            <input type="text" placeholder="Product name" />
          </div>
          <div>
            <input type="url" placeholder="Image URL" />
          </div>
          <div>
            <input type="number" placeholder="Price" />
          </div>
          <div>
            <input type="text" placeholder="Product-ID" />
          </div>
          <div>
            <input type="text" placeholder="Descptrion" />
          </div>
        </div>
      </form>
    </>
  );
}
