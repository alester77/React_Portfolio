import React, { useState } from 'react';

function Contact() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State for validation messages
  const [validationMessage, setValidationMessage] = useState('');

  // Handle input change
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Validate email format
  const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Check for empty fields
    if (!formData.name || !formData.email || !formData.message) {
      setValidationMessage('All fields are required');
      return;
    }
    // Validate email
    if (!isValidEmail(formData.email)) {
      setValidationMessage('Please enter a valid email address');
      return;
    }

    setValidationMessage('');
    // Form submission logic goes here
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        {validationMessage && <p className="validationMessage">{validationMessage}</p>}
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;