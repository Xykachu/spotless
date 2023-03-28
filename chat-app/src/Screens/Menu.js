import React from 'react';
import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



function HomePage() {

	const navigate = useNavigate();
  const handleCalmClick = () => {
    navigate('/whats-wrong/');
  };

  const handleUrgentClick = () => {
	
    navigate("/urgent");
  };

  return (
    <div>
      {/* TODO - Urgent should match with any available therapists*/}
      {/* TODO - Add code for matching users based on their previous expierences on the app e.g. allowing therapist keep a file*/}
    

      <h1>Home Page</h1>
      <button onClick={handleCalmClick}>Calm</button>
      <button onClick={handleUrgentClick}>Urgent</button>
    </div>
  );
}

export default HomePage;