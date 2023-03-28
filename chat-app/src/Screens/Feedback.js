import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
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
    <div>
      {/* TODO - Track the feedback*/}
      {/* TODO - In the future improve the suggestions e.g. comment box*/}
      {/* TODO - If Negative why?*/}



      <h1>Was this page helpful?</h1>
      <button onClick={handleYesClick}>
        <span role="img" aria-label="green tick">
          ✅
        </span>
      </button>
      <button onClick={handleNoClick}>
        <span role="img" aria-label="black X">
          ❌
        </span>
      </button>
      {feedback === 'yes' && <p>Thank you for your feedback!</p>}
      {feedback === 'no' && <p>We're sorry to hear that. How can we improve?</p>}
    </div>
  );
}

export default FeedbackPage;