import React from 'react';
import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import logo from'../spotless_logo.png'
import { Link } from 'react-router-dom';


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
      <div className="SpotlessBanner">
        <Link to="/menu">
      <img className='spotlessLogo' src={logo} alt="Logo"/>
      </Link>
    </div>
      {/* TODO - Urgent should match with any available therapists*/}
      {/* TODO - Add code for matching users based on their previous expierences on the app e.g. allowing therapist keep a file*/}
      
<div className='paddingDiv'>
<div className='container'>
      <h2>Hello <span className='jamie'>Jamie</span> how can we help you?</h2>
      <p className='aCoolParagraph'>Select <b className='calm'>calm</b> to get matched with a more specific therapist or <b className='urgent'>urgent</b> to get matched with the next available help</p>
      <button className="btnCalm" onClick={handleCalmClick}>Calm</button>
      <button className="btnUrgent" onClick={handleUrgentClick}>Urgent</button>
    </div>
</div>
   
      
    </div>
  );
}

export default HomePage;