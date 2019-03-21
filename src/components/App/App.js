import React, { useState } from 'react';
import Skills from '../Skills';
import './App.scss';

const App = ({ skills = [], addSkill = () => {} }) => {
  const [skillName, setSkillName] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = () => {
    if (!skillName || !experience) {
      return false;
    }

    if (skillName.length < 4) {
      alert('skill name should be greater than 4 characters');
      return false;
    }

    //select max id to add next skill
    const skillIds = skills.map(skill => skill.id);
    const maxSkillId = Math.max(...skillIds);

    addSkill({
      id: maxSkillId + 1,
      name: skillName,
      experience
    });

    //clear form
    setSkillName('');
    setExperience('');
  };

  return (
    <div className="main-container">
      <div className="skill-form">
        <input
          type="text"
          className="input skill-input"
          placeholder="Node JS, Postgres, React, etc"
          maxLength="255"
          tabIndex="1"
          value={skillName}
          onChange={event => setSkillName(event.target.value)}
        />
        <select
          className="input experience-selector"
          tabIndex="2"
          onChange={event => setExperience(event.target.value)}
        >
          <option value="">Experience</option>
          <option value="< 1 Year" selected={experience === '< 1 Year'}>
            &lt; 1 year
          </option>
          <option value="1 - 3 Years" selected={experience === '1 - 3 Years'}>
            1 - 3 years
          </option>
          <option value="3 - 5 Years" selected={experience === '3 - 5 Years'}>
            3 - 5 years
          </option>
          <option value="5 - 7 Years" selected={experience === '5 - 7 Years'}>
            5 - 7 years
          </option>
          <option value="7+ Years" selected={experience === '7+ Years'}>
            7+ years
          </option>
        </select>
        <button
          className="add-skills-btn"
          disabled={!skillName || !experience}
          tabIndex="3"
          onClick={handleSubmit}
        >
          ADD SKILLS
        </button>
      </div>
      <Skills />
    </div>
  );
};

export default App;
