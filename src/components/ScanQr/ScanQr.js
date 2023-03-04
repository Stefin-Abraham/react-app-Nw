import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import { Link } from 'react-router-dom';
import './ScanQr.css';

function ScanQr() {
  const [qrResult, setQrResult] = useState('');
  const [scannerEnabled, setScannerEnabled] = useState(false);
  const handleScan = (data) => {
    if (data) {
      setQrResult(data);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const handleScannerToggle = () => {
    setScannerEnabled(!scannerEnabled);
  };

  return (
    <div className='ScanQrWrapper'>
      <div className="scanner_container_wrapper">
        <div className="scanner_Container_div">
          {scannerEnabled ? (
            <div className="scanner_container">
              <QrScanner delay={300} onError={handleError} onScan={handleScan} />
              <div className="scanner_toggle">
                <button className="ticket_btn" onClick={handleScannerToggle}>Turn off scanner</button>
              </div>
            </div>
          ) : (
            <div className="scanner_container_off">
              <p className='scanqr_txt'>Scanner is turned off.</p>
              <button className="scanner_button" onClick={handleScannerToggle}>Turn on scanner</button>
            </div>
          )}

          <p className='scanqr_txt'>Scan Ticket QR</p>
          <p className='or_txt'>OR</p>

          <label className="login_txt" htmlFor="">Enter ticket number</label>
          <input className="input_ticket" type="text" name="" id="" />

          <Link to="/details">
            <button className="ticket_btn">Get Ticket details</button>
          </Link>
        </div>
      </div>

      {qrResult && <p>{qrResult}</p>}
    </div>
  );
}

export default ScanQr;
