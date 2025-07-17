import { useState } from "react";
import "./ContactUs.css";
export const ContactUs = () => {

    const [contact, setContact] =useState({
        username: '',
        email: '',
        message: '',
    })

    const handleGetValue = (e) => {
        const {name, value} = e.target
        setContact( (pre) => ({...pre, [name]: value}) )
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const contactData = contact
        console.log(contactData);
        
    }
  return (
    <>
      <div className="contact-container">
        <form onSubmit={handleFormSubmit}>
        <div className="content-container">
          <h1 className="heading">Contact Form</h1>
          <label className="labels">Username</label>
          <input
            type="text"
            className="input-class"
            name="username"
            autoComplete="off"
            value={contact.username}
            onChange={handleGetValue}
          />

          <label className="labels">Email</label>
          <input
            type="text"
            className="input-class"
            name="email"
            autoComplete="off"
            value={contact.email}
            onChange={handleGetValue}

          />

          <label className="labels">Massage</label>
          <textarea
            className="textAreaClass"
            rows="6"
            cols="27"
            name="message"
            autoComplete="off"
            required
            value={contact.message}
            onChange={handleGetValue}

          />

          <button className="btn-message">Send Message</button>
        </div>
        </form>
      </div>
    </>
  );
};
