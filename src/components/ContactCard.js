import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteContact } from "../actions";

export default function ContactCard(props) {
  const contact = props.contact;

  const handleDelete = (id) => {
    props.dispatch(deleteContact(id));
  };

  return (
    <div className="contact-card flex flex-row justify-center  w-screen ">
      <div className="list-container flex items-center w-[60%]  bg-gray-900 w h-52 mt-4 ">
        <div className="left">
          <img
            className="rounded-full h-36  w-36 p-3"
            src={contact.picture}
            alt="user-dp"
          ></img>
        </div>
        <div className="right p-7">
          <ul className="text-white">
            <li className="text-xl font-bold font-sans"> {contact.name}</li>
            <li> {contact.gender}</li>
            <li> {contact.phone}</li>
            <li>{contact.group}</li>
          </ul>
        </div>
        <div className="flex absolute ml-[8in] ">
          <Link to={`/update-contact/${contact.id}`} state={{ contact }}>
            <div className="edit-btn h-16 w-16 bg-blue-300  text-center text-xl font-bold pt-4 rounded-md">
              <button>
                <img
                  className="h-8"
                  src="https://cdn-icons-png.flaticon.com/128/1827/1827951.png"
                  alt="edit"
                />
              </button>
            </div>
          </Link>
          <button
            className="delete-btn h-16 w-16  bg-red-300 ml-3  flex justify-center items-center rounded-md "
            onClick={() => handleDelete(contact.id)}
            id={contact.id}
          >
            <img
              className="h-8 "
              src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
              alt="delete-contact"
              value={contact.id}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
