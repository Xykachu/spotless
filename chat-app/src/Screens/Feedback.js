import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './style.css'
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
  <h1>Spotless</h1>
</div>

<div className='feedbackSquare'>
      <h1 >Was this page helpful?</h1>
      <button onClick={handleYesClick} className='TickButton'>
        {/* <span role="img" aria-label="green tick">
          ✅
        </span> */}
      </button>
      <button onClick={handleNoClick} className='CrossButton'>
        {/* <span role="img" aria-label="black X">
          ❌
        </span> */}
      </button>
      </div>
      {feedback === 'yes' && <p>Thank you for your feedback!</p>}
      {feedback === 'no' && <p>We're sorry to hear that. How can we improve?</p>}
    </div>
  );
}

export default FeedbackPage;