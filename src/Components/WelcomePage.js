import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css'; // Create a corresponding CSS file for styling

const WelcomePage = () => {
  // You can use state to manage dynamic content or animations
  const [animationClass, setAnimationClass] = useState('fade-in');
  const Navigate=useNavigate();
  const handleExplore=()=>{
    setAnimationClass('fade-out');
    Navigate("/product")
  }
  return (
    <div className={`welcome-container ${animationClass}`}>
      <h1>Welcome!! to Aachar House</h1>
      <p>Experience the authentic taste of homemade pickles.. made with love!</p>
      <button onClick={handleExplore} className='btnnn'>Explore</button>
    </div>
  );
};

export default WelcomePage;
