import React, { useState } from "react";
import "./Contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left"></div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">SEND</button>
          {message && <span>thx :D</span>}
        </form>
      </div>
    </div>
  );
}
