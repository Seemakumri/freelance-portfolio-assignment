import React from 'react';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Marquee Banner */}
      <div className="marquee-wrapper">
        <div className="marquee">
          <span className="keyword">FLOW</span>
          <span className="star">✴</span>
          <span className="keyword">FIGMA</span>
          <span className="star">✴</span>
          <span className="keyword">DESIGNER</span>
          <span className="star">✴</span>
          <span className="keyword">DEVELOPER</span>

          {/* Repeat for infinite scroll effect */}
          <span className="keyword">FLOW</span>
          <span className="star">✴</span>
          <span className="keyword">FIGMA</span>
          <span className="star">✴</span>
          <span className="keyword">DESIGNER</span>
          <span className="star">✴</span>
          <span className="keyword">DEVELOPER</span>
        </div>
      </div>

      {/* CTA */}
      <div className="footer-cta">
        <h2>LET’S TALK!</h2>
        <a href="mailto=rehanurraihan@gmail.com" className="email-link">
          rehanurraihan@gmail.com ↗
        </a>
      </div>

      {/* Bottom Info */}
      <div className="footer-bottom">
        <p>© Rehan Raihan - 2023</p>
        <div className="footer-socials">
          <a href="#">Dribbble</a>
          <a href="#">Behance</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
