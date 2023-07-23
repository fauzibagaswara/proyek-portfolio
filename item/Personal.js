import React from 'react';
import About from './../about/About';

import '../styles/Personal.css'

const Personal = ({deskripsi}) => {

  return (

    <About>
    <div className='Content-personal '>

    <div className='atur'>
      <h1 className="gta-solid">PERSONAL</h1>
      <h2 className=' merpachuk-solid'>FRONTEND DEVELOPER</h2>
      <p className='solid-item'>{deskripsi}</p>
      </div>
    </div>
    </About>
  );
};

export default Personal;
