import React, { useEffect } from 'react';
import SkillItem from './components/SkillItem';
import './Skills.scss';

const Skills = ({ skills = [], fetchSkills = () => {} }) => {
  useEffect(() => {
    fetchSkills();
  }, []);

  const skillItems = skills.map((skill, index) => {
    const { id, name, expirience } = skill;
    return (
      <SkillItem
        key={index}
        id={id}
        count={index + 1}
        desc={name}
        experience={expirience}
      />
    );
  });

  return <ul className="skill-list">{skillItems}</ul>;
};

export default Skills;
