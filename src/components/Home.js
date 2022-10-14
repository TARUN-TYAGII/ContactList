import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import ContactCard from "./ContactCard";

function Home(props) {
  const contacts = props.contacts;
  return (
    <div className=" bg-gray-400 ">
      <Navbar contacts={props} />
      <div className="list ">
        {contacts.length > 0 ? (
          <ul>
            {contacts.map((contact, index) => (
              <li>
                <ContactCard
                  contact={contact}
                  dispatch={props.dispatch}
                  key={`contact-${index}`}
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className=" text-center mt-24 font-bold font-serif text-8xl">
            No Contact Found!!!
          </div>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { contacts: state };
}
export default connect(mapStateToProps)(Home);
