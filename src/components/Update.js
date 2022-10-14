import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { updateContact } from "../actions";

const Update = (props) => {
  const { id } = useParams();
  const location = useLocation();
  const { contact } = location.state;

  const [user, setUser] = useState({
    id,
    name: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setUser({
      ...user,
      [field]: value,
    });
  };

  console.log("USER", user);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(updateContact(user));
    navigate("/");
  };

  return (
    <div className="create-contact flex  bg-gray-900 h-screen ">
      <div className="inner w-80 ml-[6in] mt-8">
        <div className="heading text-white text-center text-4xl font-bold mb-4  underline underline-offset-8">
          Update Contact
        </div>
        <div className="flex ">
          <form className="w-full max-w-xs">
            <div className="mb-4">
              <label className="block text-white text-sm  mb-2">Name</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                required
                defaultValue={contact.name}
                onChange={(e) => handleChange("name", e.target.value)}
              ></input>
            </div>

            <div>
              <label className="block text-white text-sm  mb-2">Phone</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="tel"
                name="phone"
                required
                defaultValue={contact.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              ></input>
            </div>

            <div className="flex items-center justify-between mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSubmit}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(props) {
  return { props };
}

export default connect()(Update);
