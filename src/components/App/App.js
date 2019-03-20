import React from 'react';
import Skills from '../Skills';
import './App.scss';

const App = () => {
  return (
    <div className="main-container">
      <div className="skill-form">
        <input
          type="text"
          className="input skill-input"
          placeholder="Node JS, Postgres, React, etc"
          maxLength="255"
          tabIndex="1"
        />
        <select className="input experience-selector" tabIndex="2">
          <option value="">Experience</option>
          <option value="<1">&lt; 1 year</option>
          <option value="1-3">1 - 3 years</option>
          <option value="3-5">3 - 5 years</option>
          <option value="5-7">5 - 7 years</option>
          <option value="7+">7+ years</option>
        </select>
        <button className="add-skills-btn" tabIndex="3">
          ADD SKILLS
        </button>
      </div>
      <Skills />
    </div>
  );
};

export default App;
