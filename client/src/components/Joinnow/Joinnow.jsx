import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import logo from "../../assets/logo.png"
import "./Joinnow.css"
// npm i @emailjs/browser

const Joinnow = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bqx5yh9",
        "template_4rdnap2",
        form.current,
        "rPx0RU-Cv8ld5GK8h"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    
        
          // <form ref={form} onSubmit={sendEmail}>
          //   <label>Name</label>
          //   <input type="text" name="from_name" required/>
          //   <label>Email</label>
          //   <input type="email" name="from_email" required/>
          //   <label>Message</label>
          //   <textarea name="message" />
          //   <input type="submit" value="Send" />
          // </form>
          <div className="body">
          <div class="cont">
          <div class="brand-logo">
            <img src={logo} alt="" />
          </div>
          <div class="brand-title">TWITTER</div>
          <div class="inputs">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="from_name" required/>
            <label>EMAIL</label>
            <input type="email" name="from_email" required/>
            <label>MESSAGE</label>
            <textarea name="message" />
            <button type="submit">SEND</button>
          </form>
          </div>
        </div></div>
    
    
  );
};

export default Joinnow;

