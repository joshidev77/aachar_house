import React, { useState } from 'react';
import './WelcomePage.css'; // Create a corresponding CSS file for styling

const WelcomePage = () => {
  // You can use state to manage dynamic content or animations
  const [animationClass, setAnimationClass] = useState('fade-in');

  return (
    <div className={`welcome-container ${animationClass}`}>
      <h1>Welcome!! to Aachar House</h1>
      <p>Experience the authentic taste of homemade pickles.. made with love!</p>
      <button onClick={() => setAnimationClass('fade-out')}>Explore</button>
    </div>
  );
};

export default WelcomePage;
