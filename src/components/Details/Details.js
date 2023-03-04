import React from "react";
import "./Details.css";
import { Link } from "react-router-dom";

function Details() {
  return (
    <div className="DetailsWrapper">
      <div className="DetailsWrapper_container">
        <div className="ticket_and_id">
          <p className="ticket_number">Ticket number</p>
          <p className="text_id">AZ 123456789</p>
        </div>

        <label className="login_txt" htmlFor="">
          Mobile number
        </label>
        <input
          className="login_input detail_input"
          type="text"
          name=""
          id=""
          placeholder="Mobile number"
        />
        <label className="login_txt" htmlFor="">
          Name of Purchaser
        </label>
        <input
          className="login_input"
          type="text"
          name=""
          id=""
          placeholder="Name"
        />
        <Link to="/">
          <button className="save_btn">Save details</button>
        </Link>
      </div>
    </div>
  );
}

export default Details;
