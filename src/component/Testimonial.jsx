import React from 'react';
import '../style/Testimonial.css';
import userImg from '../assets/Frame.svg'; // Replace with your actual image path

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">✺ What they say</h2>
      <div className="testimonial-card">
        <div className="testimonial-user">
          <img src={userImg} alt="Floyd Miles" className="user-img" />
          <div className="user-details">
            <h4>Floyd Miles</h4>
            <p>eBay</p>
          </div>
        </div>

        <div className="testimonial-content">
          <p className="quote-icon">“</p>
          <p className="testimonial-text">
            Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.
            Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.
          </p>

          <div className="nav-buttons">
            <button>&larr;</button>
            <button>&rarr;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
