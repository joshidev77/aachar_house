// AboutPage.js

import React from 'react';
import './About.css'; // Import the corresponding CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="image-holder">
        <img src="Rashmi_Vadgama.jpg" alt="Rashmi's AACHAR HOUSE" />
      </div>
      <div className="text-content">
        <h2>VADGAMA RASHMI</h2>
        <p>
          Welcome to Rashmi's AACHAR HOUSE, where I specialize in crafting delicious homemade pickles with love and care. My journey started with a passion for preserving traditional flavors and providing a unique taste experience to people.
        </p>
        {/* Add more details or customize the description as needed */}
      </div>
    </div>
  );
};

export default About;
