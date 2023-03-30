import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './style.css'
import logo from'../spotless_logo.png'
import { Link } from 'react-router-dom';

function FeedbackPage() {
    const navigate = useNavigate();
  const [feedback, setFeedback] = useState(null);

  const handleYesClick = () => {
     // this will track the feedback 
     navigate('/payment/');
    console.log('yes')
  };

  const handleNoClick = () => {
    // this will track the feedback
    console.log('no')
    navigate('/payment/');
  };

  return (
    <div >
      {/* TODO - Track the feedback*/}
      {/* TODO - In the future improve the suggestions e.g. comment box*/}
      {/* TODO - If Negative why?*/}
      <div className="SpotlessBanner">
        <Link to="/menu">
      <img className='spotlessLogo' src={logo} alt="Logo"/>
      </Link>
    </div>

<div className='feedbackSquare'>
      <h1 className='Pagetitle'>Was this page helpful?</h1>
      <button onClick={handleYesClick} className='TickButton'>
        Yes
      </button>
      <button onClick={handleNoClick} className='CrossButton'>
        No
      </button>
      </div>
      {feedback === 'yes' && <p>Thank you for your feedback!</p>}
      {feedback === 'no' && <p>We're sorry to hear that. How can we improve?</p>}
    </div>
  );
}

export default FeedbackPage;