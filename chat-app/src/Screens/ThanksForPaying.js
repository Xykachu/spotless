import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './style.css'
import logo from'../spotless_logo.png'
import { Link } from 'react-router-dom';

function ThanksForPaying() {
  //TODO - Display the amount Donated(if any) and to tell what it goes towards
    // this page will be used to set a matching system
    //for now there is a timeout to demonstrate the waiting page
    const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/menu');
    }, 5000);
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
<h1 className="matching">Thank you for paying! We hope that we managed to help you today!</h1>
</div>
</div>
    </div>
    
  );
}

export default ThanksForPaying;