import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="form">
    
        <input type="text" className="name formEntry" placeholder="Name" />
        <input type="text" className="email formEntry" placeholder="Email" />
        <textarea className="message formEntry" placeholder="Message"></textarea>
        <input type="checkbox" className="termsConditions" value="Term" />
        <label style={{ color: 'grey' }} htmlFor="terms">
          I Accept the <span style={{ color: '#0e3721' }}>Terms of Use</span> & <span style={{ color: '#0e3721' }}>Privacy Policy</span>.
        </label>
        <br />
        <button className="submit formEntry" onClick={thanks}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;

function thanks() {
  console.log('Thanks for submitting!');
}
