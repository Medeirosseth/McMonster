import React, { useState } from "react";
import axios from "axios";
import "./Contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const formId = "GGGz9wQR";
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const submitForm = async (event) => {
    event.preventDefault();
    await postSubmission();
  };

  const postSubmission = async () => {
    const payLoad = {
      message: "Test formspark submission",
    };

    try {
      const result = await axios.postSubmission(formSparkUrl, payLoad);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img
          src="assets/SpatialAwareness.jpg"
          alt="Two ghost walking along the river with a deer"
        />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={submitForm}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">SEND</button>
          {message && <span>thx :D</span>}
        </form>
      </div>
    </div>
  );
}
