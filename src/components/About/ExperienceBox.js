import React from 'react';
import './ExperienceBox.css';

const ExperienceBox = ({ title, company, date, location, details }) => {
  return (
    <div className="experience-box">
      <h3>{title}</h3>
      <h4 className='purple'>{company}</h4>
      <p>{date} | {location}</p>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceBox;
