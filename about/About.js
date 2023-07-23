import React from 'react';
import { useNavigate } from 'react-router-dom'; // Impor useNavigate
import Avatar from '../avatar/Avatar.js';
import '../styles/Karir.css'
const About = ({ children }) => {
  const navigate = useNavigate(); // Gunakan useNavigate untuk mendapatkan fungsi navigasi

  const handlePersonalClick = () => {
    navigate('/Personal');
  };
  const handleKarirClick = () => {
    navigate('/karir');
  };
  const handleEducationClick = () => {
    navigate('/education');
  };

  return (
    <div>
      <Avatar page="about" />

      <div className="page-list">
        {/* Menggunakan fungsi handlePersonalClick ketika tautan "PERSONAL" di klik */}
        <span className="item1" onClick={handlePersonalClick}>
          PERSONAL
        </span>
        <span className="item2" onClick={handleEducationClick}>
          Education
        </span>
        <span className="item3" onClick={handleKarirClick}>
          KARIR
        </span>
      
      </div>
      {children}
    </div>
    
  );
};

export default About;
