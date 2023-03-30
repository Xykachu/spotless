import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'
import logo from'../spotless_logo.png'
import { Link } from 'react-router-dom';

function CategoryPage() {
  const navigate = useNavigate();

  const handleAnxietyClick = () => {
    navigate('/matching');
  };

  const handleLossClick = () => {
    navigate('/matching');
  };

  const handleFeelingDownClick = () => {
    navigate('/matching');
  };
  const handleMenuClick =()=>{
  navigate('/menu');
  };

  return (
    <div>
      <div className="SpotlessBanner">
        <Link to="/menu">
      <img className='spotlessLogo' src={logo} alt="Logo"/>
      </Link>
    </div>
      <div className='paddingDiv'> 
<div className='container'> 
<h1 className='Pagetitle'>Which of these categories best describes what you're going through?</h1>
      {/* TODO - Make each category match the specialised therapists*/}
      {/* TODO - Change the Routes to correct category routes*/}
      <button className="btnCat" onClick={handleAnxietyClick}>Anxiety</button>
      <button className="btnCat" onClick={handleLossClick}>Loss</button>
      <button className="btnCat" onClick={handleFeelingDownClick}>Feeling Down</button>
      </div>
      </div>
    </div>
  );
}

export default CategoryPage;