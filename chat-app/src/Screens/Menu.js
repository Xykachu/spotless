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
      <h1>Home Page</h1>
      <button onClick={handleCalmClick}>Calm</button>
      <button onClick={handleUrgentClick}>Urgent</button>
    </div>
  );
}

export default HomePage;