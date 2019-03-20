import React from 'react';
import './SkillItem.scss';

const SkillItem = ({ count = 1, desc = '', experience = '' }) => {
  return (
    <li class="skill-item">
      <div class="count">{count}</div>
      <div class="desc">
        <div>{desc}</div>
        <div>{experience}</div>
      </div>
      <div class="actions">
        <i class="fas fa-times" />
      </div>
    </li>
  );
};

export default SkillItem;
