import React, { useEffect, useState } from "react";
import "./contact.scss";
import { useDispatch, useSelector } from "react-redux";
import { getContact, deleteContact } from "../../../store/slice/contactReducer";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import loadingGIF from "../assets/image/loading.gif";

export default function Contact() {
  const [allCT, setallCT] = useState([]);
  // console.log(allCT);
  const dispatch = useDispatch();
  const contacts = useSelector((state) => {
    return state.contacts;
  });
  // console.log(contacts);
  useEffect(() => {
    dispatch(getContact());
    setallCT(contacts.Contact);
  }, []);

  const DeleteCT = (id) => {
    dispatch(deleteContact(id));
    console.log(id);
    dispatch(getContact());
  };
  if (contacts.loading) {
    return (
      <div>
        <img width={"100px"} src={loadingGIF} alt="Loading" />{" "}
      </div>
    );
  }
  return (
    <div>
      <table>
        <thead>
          <tr key={Date()}>
            <th>id</th>
            <th>Email</th>
            <th>name</th>
            <th>Mobile</th>
            <th>Text</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.Contact.map((val, ind) => {
            return (
              <>
                <tr key={val.ind}>
                  <td>{val._id}</td>
                  <td>{val.email}</td>
                  <td>{val.mobile}</td>
                  <td>{val.name}</td>
                  <td>{val.text}</td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button>
                        <GrUpdate />
                      </button>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button onClick={() => DeleteCT(val._id)}>
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
  );
}
