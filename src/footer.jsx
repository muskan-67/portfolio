import React from "react";
import "./styles/footer.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="container">

        {/* Top Row */}
        <div className="footer-content">
          <h3 className="footer-logo">Muskan</h3>

          <p className="footer-tagline">
            Full Stack Developer | Flutter Developer | React Enthusiast
          </p>

          {/* Social Icons */}
          <div className="footer-socials">
  <a href="https://github.com/muskan-67" target="_blank">
    <FaGithub />
  </a>
  <a href="https://www.linkedin.com/in/muskan-gupta-3b6814294/" target="_blank">
    <FaLinkedin />
  </a>
  <a href="#" target="_blank">
    <FaInstagram />
  </a>
</div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Muskan | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
