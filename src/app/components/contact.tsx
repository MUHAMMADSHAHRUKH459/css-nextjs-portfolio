import React from 'react';
import './contact.css'; // Import custom CSS

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <section className="contact-section">
        <div className="contact-content">
          <div className="map-container">
            <iframe
              className="map-iframe"
              title="map"
              frameBorder={0}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.984473412121!2d67.00706297610184!3d24.864379877926694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f120858096f%3A0xaaf23f89a3a373a0!2sK.M.C%20Workshop%20Sana%20Apartment!5e0!3m2!1sen!2s!4v1730151686725!5m2!1sen!2s"
              style={{ filter: 'contrast(1.2) opacity(0.4)' }}
            />
          </div>

          <div className="contact-info">
            <div className="contact-address">
              <h2>ADDRESS</h2>
              <p>KMC Workshop Nishter, Road Karachi</p>
            </div>
            <div className="contact-details">
              <h2>EMAIL</h2>
              <a href="mailto:shahrukhjaved459@email.com">shahrukhjaved459@email.com</a>
              <h2>PHONE</h2>
              <p>+92-3205421692</p>
            </div>
          </div>

          <div className="contact-form">
            <h2>Contact Us</h2>
            <p>Reach out to us with any questions or ideas. We are here to help and connect!</p>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message"></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
