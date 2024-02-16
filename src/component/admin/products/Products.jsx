import React, { useEffect, useState } from "react";
import "./products.scss";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import loadingGIF from "../assets/image/loading.gif";
import { getProducts } from "../../../store/slice/productReducer";
import { deleteProduct } from "../../../store/slice/productReducer";

export default function Products() {
  const [selectProduct, setselectProduct] = useState([]);
  const selectBox = (id) => {
    if (!selectProduct.includes(id)) {
      setselectProduct([...selectProduct, id]);
    } else {
      const newList = selectProduct.filter((val) => {
        return val !== id;
      });
      setselectProduct(newList);
    }
  };
  //   console.log(selectProduct);
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productDTL = (id) => {
    dispatch(deleteProduct(id));
    dispatch(getProducts());
  };

  if (product.loading) {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img width={"40px"} src={loadingGIF} alt="Loading" />
      </div>
    );
  }
  return (
    <>
      <div className="product-admin">
        <div className="navbar-btn">
          <button>Add product</button>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>
                  <div>
                    <input type="checkbox" />
                  </div>
                </th>
                <th>No</th>
                <th>Id</th>
                <th>Product</th>
                <th>Price</th>
                <th>image</th>
                <th>category</th>
                <th>Created date</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {product.products.map((val, key) => {
                return (
                  <>
                    <tr>
                      <td>
                        <input
                          onChange={() => selectBox(val._id)}
                          type="checkbox"
                        />
                      </td>
                      <td>{val.key}</td>
                      <td>{val.pid}</td>
                      <td>{val.name}</td>
                      <td>{val.price}</td>
                      <td>
                        <img width={"30px"} src={val.url} alt="" />
                      </td>
                      <td>
                        <ul>
                          {val.category.map((val) => {
                            return <li>{val}</li>;
                          })}
                        </ul>
                      </td>
                      <td>Created date</td>
                      <td>
                        <button>
                          <GrUpdate />
                        </button>
                      </td>
                      <td>
                        <button onClick={() => productDTL(val._id)}>
                          <MdDeleteForever />
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
              {/* <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>No</td>
                <td>Id</td>
                <td>Product</td>
                <td>Price</td>
                <td>category</td>
                <td>Created date</td>
                <td>
                  <button>
                    <GrUpdate />
                  </button>
                </td>
                <td>
                  <button>
                    <MdDeleteForever />
                  </button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
