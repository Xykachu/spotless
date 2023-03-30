import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import pp from'../paypal.png'
import stripe from'../stripe.png'
import google from'../googlepay.png'
import { Link } from 'react-router-dom';
import logo from'../spotless_logo.png'

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
        <Link to="/menu">
      <img className='spotlessLogo' src={logo} alt="Logo"/>
      </Link>
    </div>
    <div className='paddingDiv2'>
    
    <div className='container'>
      <h1 className="Pagetitle">Choose a payment option</h1>
      <div>
      <button className="PaypalButton" onClick={handlePaymentTransactionClick}>
         <span className="paypal-logo">
         <img className='paypal' src={pp} alt="paypal"/>
    </span>
      </button>
      </div>
      
      <div>
      <div className='stripeSpan'>
      <button className="StripeButton" onClick={handlePaymentTransactionClick}> 
      <img className='stripe' src={stripe} alt="stripe"/>
      </button>
      </div>
      </div>
      <div>
      <button className="GoogleButton" onClick={handlePaymentTransactionClick}>
      <span className="google-logo">
      <img className='google' src={google} alt="google"/>
      </span>
      </button>
      </div>
      <br />
      <button className="btnBackToMenu"onClick={handleBackClick}>Back to Chat App</button>
    </div>
    </div>
    </div>
  );
}

export default PaymentOptionsPage;