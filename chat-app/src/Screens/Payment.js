import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'
import logo from'../spotless_logo.png'
import { Link } from 'react-router-dom';

function PaymentPage() {
  const navigate = useNavigate();
  const [paymentAmount, setPaymentAmount] = useState('');
  const [tipAmount, setTipAmount] = useState('');

  const handlePaymentAmountChange = (event) => {
    setPaymentAmount(event.target.value);
  };

  const handleTipAmountChange = (event) => {
    setTipAmount(event.target.value);
  };

  const handlePayClick = () => {
    navigate('/payment-method', { state: { paymentAmount, tipAmount } });
  };

  return (
    <div>
  <div className="SpotlessBanner">
        <Link to="/menu">
      <img className='spotlessLogo' src={logo} alt="Logo"/>
      </Link>
    </div>
      {/* TODO - Add Payment Methods*/}
      {/* TODO - Add ways to track payments*/}
      {/* TODO - Add a donate button*/}
      {/* TODO - Add a back home button*/}
      <div className='paddingDiv2'>
<div className="container">
<h1 className='Pagetitle'>How much would you like to pay?</h1>
  <div className="PaymentAmount">
      <label className="paymentLabels" >
Payment Amount:<br></br>
        <input type="number" value={paymentAmount} onChange={handlePaymentAmountChange} />
      </label>
      </div>
      <div className="TipAmount">
      <label  className="paymentLabels">
        Tip Amount:
        <br></br>
        <input type="number" value={tipAmount} onChange={handleTipAmountChange} />
      </label>
      </div>
      <button className="payButton" onClick={handlePayClick}>Pay</button>
    </div>
    </div>
    </div>
  );
}

export default PaymentPage;