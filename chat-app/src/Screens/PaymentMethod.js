import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PaymentOptionsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/menu');
  };
  const handlePaymentTransactionClick = () => {
    navigate('/success');
  };

  return (
    <div>
      <h1>Payment Options Page</h1>
      <button onClick={handlePaymentTransactionClick}>
        paypal
        
      </button>
      <button onClick={handlePaymentTransactionClick}> 
        stripe
      </button>
      <button onClick={handlePaymentTransactionClick}>
        google pay
      </button>
      <br />
      <button onClick={handleBackClick}>Back to Chat App</button>
    </div>
  );
}

export default PaymentOptionsPage;