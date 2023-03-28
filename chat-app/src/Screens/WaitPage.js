import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function WaitPage() {
    // this page will be used to set a matching system
    //for now there is a timeout to demonstrate the waiting page
    const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/chat-home/1');
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);

  return <h1>Waiting on match...</h1>;
}

export default WaitPage;