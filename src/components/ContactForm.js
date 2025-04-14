import * as React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_u35uakg',
        'template_6a3680t',
        form.current,
        'wJLa7zz9Y6fow_5bG'
      )
      .then(
        (result) => {
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Your information has successfully be sent and we will respond as soon as possible!
          </Alert>
          form.current.reset();
        },
        (error) => {
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            There was a problem receiving your information. If this issue persists, feel free to email us at placeholder-email.com. Sorry for the inconvenience!
          </Alert>
          console.error(error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <p>Drop us a line!</p>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email*" required />
        <textarea name="message" placeholder="Message" rows="6" required></textarea>
        <label className="checkbox">
          <input type="checkbox" name="subscribe" value="Yes" />
          Sign up for our email list for updates, promotions, and more.
        </label>
        <button type="submit">SEND</button>
      </form>
    </section>
  );
};

export default ContactForm;
