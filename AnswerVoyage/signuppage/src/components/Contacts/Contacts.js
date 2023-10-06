import React from 'react';
import "./Contacts.css"
import contactimage from "./QA.png";

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h1>Answer Voyage</h1>
      <div className="contact-info">
        <div className="contact">
          <h2>Sudarshan Jha</h2>
          <p>Email: sudarshanjha2004@gmnail.com</p>
          <p>Phone: +91 9004115437</p>
        </div>
        <div className="contact">
          <h2>Vikesh Kumar</h2>
          <p>Email: vikesh3640@gmail.com</p>
          <p>Phone: +91 7903288699</p>
        </div>
      </div>
      <p className='contacts-address'>Address: IIIT Surat, Kamrej, Surat</p>
      <img src={contactimage} className="contact-image"></img>
    </div>
  );
};

export default Contacts;
