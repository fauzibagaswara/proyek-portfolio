// Project.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Impor useNavigate

const Project = () => {
  const navigate = useNavigate(); // Gunakan useNavigate untuk mendapatkan fungsi navigasi

  // Fungsi untuk mengatur deskripsi dan melakukan navigasi ke rute "/Personal"
  const handlePersonalClick = () => {
    navigate('/ProjectOne'); // Navigasi ke rute "/Personal"
    navigate('/ProjectTwo')
    navigate('/ProjectTree')
  };
  return (



      <div className='List-project'>

        <h1 className='meti4 '>COMING SOON</h1>
 
      </div>

  );
};

export default Project;
