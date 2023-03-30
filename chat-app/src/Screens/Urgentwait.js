import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './style.css'
import logo from'../spotless_logo.png'
import { Link } from 'react-router-dom';

function UrgentWaitPage() {
  //TODO - Add Spotless Chat AI e.g. talkin got an AI for help while you wait for your Therapist if not available
    // this page will be used to set a matching system
    //for now there is a timeout to demonstrate the waiting page
    const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/chat-home/1');
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);
  return(
    <div>
<div className="SpotlessBanner">
    <Link to="/menu">
  <img className='spotlessLogo' src={logo} alt="Logo"/>
  </Link>
</div>
<div className='paddingDiv'>
  <div className='container'>
<h1 className="matching">Matching with next available therapist...</h1>
</div>
</div>    </div>
    
  );
  
}

export default UrgentWaitPage;