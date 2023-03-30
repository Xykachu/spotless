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
      {/* TODO - Add Functionailitys to each of the payment methods*/}
      <div className="SpotlessBanner">
  <h1>Spotless</h1>
</div>
      <h1 class="H1">Payment Options Page</h1>
      <div>
      <button class="PaypalButton" onClick={handlePaymentTransactionClick}>
         <span class="paypal-logo">
      <i>Pay</i><i>Pal</i>
    </span>
      </button>
      </div>
      <div>
      <button class="StripeButton" onClick={handlePaymentTransactionClick}> 
        Stripe
      </button>
      </div>
      <button class="GoogleButton" onClick={handlePaymentTransactionClick}>
        Google Pay
      </button>
      <br />
      <button class="NormalButton"onClick={handleBackClick}>Back to Chat App</button>
    </div>
  );
}

export default PaymentOptionsPage;