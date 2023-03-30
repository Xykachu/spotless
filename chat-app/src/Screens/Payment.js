import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

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
  <h1>Spotless</h1>
</div>

      <h1 class="H1">Payment Page</h1>
      {/* TODO - Add Payment Methods*/}
      {/* TODO - Add ways to track payments*/}
      {/* TODO - Add a donate button*/}
      {/* TODO - Add a back home button*/}
<div class="feedbackSquare">
  <div class="PaymentAmount">
      <label >
        Payment Amount:
        <input type="number" value={paymentAmount} onChange={handlePaymentAmountChange} />
      </label>
      </div>
      <div class="TipAmount">
      <label>
        Tip Amount:
        <input type="number" value={tipAmount} onChange={handleTipAmountChange} />
      </label>
      </div>
      <button class="NormalButton" onClick={handlePayClick}>Pay</button>
    </div>
    </div>
  );
}

export default PaymentPage;