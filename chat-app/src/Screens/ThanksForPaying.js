import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function ThanksForPaying() {
  //TODO - Display the amount Donated(if any) and to tell what it goes towards
    // this page will be used to set a matching system
    //for now there is a timeout to demonstrate the waiting page
    const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/menu');
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);

  return <h1>Paid Successfully! thank you for the support! Hope you are feeling better</h1>;
}

export default ThanksForPaying;