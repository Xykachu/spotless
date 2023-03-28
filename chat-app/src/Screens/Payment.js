import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <h1>Payment Page</h1>
      {/* TODO - Add Payment Methods*/}
      {/* TODO - Add ways to track payments*/}
      {/* TODO - Add a donate button*/}
      {/* TODO - Add a back home button*/}


      <label>
        Payment Amount:
        <input type="number" value={paymentAmount} onChange={handlePaymentAmountChange} />
      </label>
      <br />
      <label>
        Tip Amount:
        <input type="number" value={tipAmount} onChange={handleTipAmountChange} />
      </label>
      <br />
      <button onClick={handlePayClick}>Pay</button>
    </div>
  );
}

export default PaymentPage;