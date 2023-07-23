import React from 'react';
import '../styles/Skill.css';
import avatar from '../assets/avatar1.png';
import skillsData from './skillsData';

const skills = () => {
  const skills = skillsData[1];

  return (
    <div className="Container-skills">
      <div className="atur-page">
        <img src={avatar} alt="Avatar" className="gambar-avatar" />
      </div>
      <div className="skills-container">
      <h1 className='FRONTEND'>FRONTEND DEVELOPER </h1>

        {skills.map((skill, index) => (
          <div key={index} className={`skill-box level-${skill.level}`}>
            <div className="test-1">
              <h3 className="title-skill">{skill.title}</h3>
              <p className="title-level">Level: {skill.level}</p>
            </div>
            <div className="level-container">
              {[...Array(skill.level)].map(( i) => (
                <div
                  key={i}
                  className={`level-point filled`}
                />
              ))}
              {[...Array(6 - skill.level)].map(( i) => (
                <div
                  key={i}
                  className={`level-point unfilled`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default skills;
