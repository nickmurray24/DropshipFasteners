// src/components/ContactForm.js
import React from 'react';

const ContactForm = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <p>Drop us a line!</p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email*" required />
        <textarea placeholder="Message" rows="6"></textarea>
        <label className="checkbox">
          <input type="checkbox" />
          Sign up for our email list for updates, promotions, and more.
        </label>
        <button type="submit">SEND</button>
      </form>
    </section>
  );
};

export default ContactForm;
