import React from 'react';
import '../styles/Personal.css'
import About from './../about/About';

const Karir = ({ deskripsi }) => {
  return (
    <About>
      <div className='Content-personal '>
        <div className='atur'>
          <h1 className="gta-solid">KARIR</h1>
          <h2 className=' merpachuk-solid'>HAI THIS DONT NOT KARIR </h2>
          <p className='solid-item'>{deskripsi}</p>
        </div>
        
      </div>
      </About>

  );
};

export default Karir;
