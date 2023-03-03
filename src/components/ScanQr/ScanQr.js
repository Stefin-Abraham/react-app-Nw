import React from 'react'
import { Link } from 'react-router-dom';
import './ScanQr.css'

function ScanQr() {
  return (
    <div className='ScanQrWrapper'>


      <div className=" scanner_container_wrapper">
        <div className="scanner_Container_div">

          <div className="scanner_container">
            {/* <p>Scan</p> */}
          </div>

          <p className='scanqr_txt'>Scan Ticket QR</p>
           <p className='or_txt'>OR</p>


            <label  className="login_txt" htmlFor="">Enter ticket number</label>
            <input className="input_ticket" type="text" name="" id="" />
          
          <Link to="/details">
            <button className="ticket_btn">Get Ticket details</button>
          </Link>
        </div>
      </div>




    </div>
  )
}

export default ScanQr