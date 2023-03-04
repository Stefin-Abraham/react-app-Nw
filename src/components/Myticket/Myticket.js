import React from "react";
import "./Myticket.css";
import { Link } from "react-router-dom";

function Myticket() {
  return (
    <div className="MyticketWrapper">
      <div>
        <div className="Myticket_Container">
          <p className="myticket_txt">Myticket</p>

          <div className="selled_tickets">
                <div className="Previos_txt">
                <p>Previous selled tickets</p>
                </div>
                <p>No 1 Ticket 12345678910</p>
                <p>No 2 Ticket 22345678912</p>
                <p>No 3 Ticket 82345678911</p>
                <p>No 4 Ticket 32345678916</p>
                <p>No 5 Ticket 27345678912</p>
                <p>No 6 Ticket 23345678913</p>
                <p>No 7 Ticket 43456789102</p>
                <p>No 8 Ticket 32345678913</p>
                <p>No 9 Ticket 12345678917</p>
          </div>

          <Link to="/details">
            <button className="login_btn sell_new">Sell new ticket</button>
          </Link>
          <Link to="/scanqr">
            <button className="login_btn">Goto scan</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Myticket;
