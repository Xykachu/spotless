import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function UrgentWaitPage() {
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

  return <h1>Matching with next available therapist</h1>;
}

export default UrgentWaitPage;