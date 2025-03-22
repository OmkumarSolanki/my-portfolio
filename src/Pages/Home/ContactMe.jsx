import React from 'react';

export default function ContactMe() {
  // Google Apps Script endpoint URL
  const googleAppsScriptUrl = process.env.REACT_APP_SCRIPT; 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Getting form data
    const form = e.target;
    const formData = new FormData(form);

    // Create the request URL with the form data
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    fetch(googleAppsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          alert('Message sent successfully!');
          form.reset();
        } else {
          alert('Error: ' + data.message);
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        alert('An unexpected error occurred.');
      });
    
  };

  return (
    <section id="Contact" className="contact--section">
      {/* <h2>Contact Me</h2> */}
      <div>
        <h2>Send me a message</h2>
      </div>
      <form
        className="contact--form--container"
        onSubmit={handleSubmit}
      >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="entry.2005620554" // This is the field ID for 'Name' in the Google Form
              id="first-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="entry.1045781291" // This is the field ID for 'Email' in the Google Form
              id="email"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="entry.839337160" // This is the field ID for 'Message' in the Google Form
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Send</button>
        </div>
      </form>
    </section>
  );
}
