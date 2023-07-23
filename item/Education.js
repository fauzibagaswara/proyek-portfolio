import React from 'react';
import avatarimage from '../assets/avatar.png';

import About from './../about/About';


 
const Education = ({deskripsi}) => {
  return (
    <About>
    <div className='Content-personal '>
    <diav className='atur'>
      <h1 className="gta-solid">EDUCATION</h1>
      <h2 className=' merpachuk-solid'>BEGINNER IN WEBSITE ABOUT PROGAMMER </h2>
      <p className='solid-item'>{deskripsi}</p>
      </diav>
    </div>
    </About>
  );
};

export default Education;
