import React from 'react';
import './Popup.css';

const PaymentPopup = ({ isVisible, onClick }) => {
  return (
    isVisible && (
      <div className="popup-overlay">
        <div className="popup-content">
          <h2>Payment Method added Successfully!</h2>
          <div className="popup-animation">
           
            <img src="/assets/PaymentPopup.png" alt="Celebration" />
          </div>
          <button className="popup-button" onClick={onClick}>
            Okay
          </button>
        </div>
      </div>
    )
  );
};

export default PaymentPopup;
