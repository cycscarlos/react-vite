import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ib6yxf1",
      "template_ihaqofv",
      form.current,
      "7SVfRhL18Upw8lmdP"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Get in Touch</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ccolmenaresa@gmail.com</h5>
            <a
              href="mailto:cycs.instalacion@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiLinkedinBoxFill className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Visit my Linkedin</h5>
            <a
              href="https://www.linkedin.com/in/carlos-colmenares-a-5a717375/"
              target="_blank"
              rel="noreferrer"
            >
              View my Profile
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+58 414 324 63 96</h5>
            <a
              href="https://api.whatsapp.com/send?phone+584143246396"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End of Contact Options */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="your full name"
            required
          />
          <input type="email" name="email" placeholder="your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
