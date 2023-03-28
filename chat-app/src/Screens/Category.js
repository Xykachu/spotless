import React from 'react';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div>
      <h1>Category</h1>
      <button onClick={handleAnxietyClick}>Anxiety</button>
      <button onClick={handleLossClick}>Loss</button>
      <button onClick={handleFeelingDownClick}>Feeling Down</button>
    </div>
  );
}

export default CategoryPage;