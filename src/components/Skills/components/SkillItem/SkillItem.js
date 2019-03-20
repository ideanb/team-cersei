import React from 'react';
import './SkillItem.scss';

const SkillItem = ({
  id,
  count = 1,
  desc = '',
  experience = '',
  removeSkill = () => {}
}) => {
  return (
    <li className="skill-item">
      <div className="count">{count}</div>
      <div className="desc">
        <div>{desc}</div>
        <div>{experience}</div>
      </div>
      <div className="actions" onClick={() => removeSkill(id)}>
        <i className="fas fa-times" />
      </div>
    </li>
  );
};

export default SkillItem;
