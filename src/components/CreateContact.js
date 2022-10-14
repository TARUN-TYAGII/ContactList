import React, { useState } from "react";
import { connect } from "react-redux";
import { addContact } from "../actions";
import { useNavigate } from "react-router-dom";

const CreateContact = (props) => {
  const [user, setUser] = useState({
    picture: "https://randomuser.me/api/portraits/med/men/97.jpg",
  });
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setUser({
      ...user,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(addContact(user));

    navigate("/");
  };

  // const notify = () => {
  //   toast.success("Contact Added Successfully!!!");
  // };

  return (
    <div className="create-contact flex  bg-gray-900 h-screen ">
      <div className="inner w-80 ml-[6in] mt-14">
        <div className="heading text-4xl font-bold text-white text-center pb-5 underline underline-offset-8">
          Add Contact
        </div>

        <form className="w-full max-w-xs">
          <div className="pb-3">
            <label className="block text-white text-sm  mb-2">Name</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black font-xl focus:outline-none  "
              required
              type="text"
              onChange={(e) => handleChange("name", e.target.value)}
              value={user.name || ""}
            ></input>
          </div>
          <div className="pb-3">
            <label className="block text-white text-sm  mb-2">Gender</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none required "
              type="text"
              required
              value={user.gender || ""}
              onChange={(e) => handleChange("gender", e.target.value)}
            ></input>
          </div>
          <div className="pb-3">
            <label className="block text-white text-sm  mb-2">Phone</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none required"
              type="tel"
              required
              value={user.phone || ""}
              onChange={(e) => handleChange("phone", e.target.value)}
            ></input>
          </div>
          <div className="pb-3">
            <label className="block text-white text-sm mb-2">Group</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none required"
              type="text"
              required
              value={user.group || ""}
              onChange={(e) => handleChange("group", e.target.value)}
            ></input>
          </div>
          <div className="flex items-center justify-between mt-4 ">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none "
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { props: state.contacts };
}

export default connect(mapStateToProps)(CreateContact);
