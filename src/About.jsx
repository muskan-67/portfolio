import React from "react";
import "./styles/about.css"; // make sure file exists

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-card">
          <div className="about-content">
            

            <p className="about-text">
              I am <span className="highlight">Muskan</span>, a passionate 
              <strong> Full Stack Developer</strong> trained from 
              <strong> Paras Infotech, Rishikesh</strong>.  
              I specialize in building modern and user-friendly web applications 
              using technologies like <strong>React, JavaScript, Bootstrap, Node.js,</strong> 
              and databases like <strong>MongoDB</strong>.
            </p>

            <p className="about-text">
              Along with web development, I also have hands-on experience in 
              <strong> Flutter App Development</strong>.  
              I love creating fast, beautiful, and functional mobile apps.
            </p>

            <p className="about-text">
              I enjoy learning new technologies and turning ideas into reality.  
              My goal is to become a professional developer who builds 
              meaningful and impactful digital solutions.
            </p>
          </div>

          <div className="about-box">
            <ul>
              <li><span> Web Development:</span> React, JavaScript, Bootstrap</li>
              <li><span> App Development:</span> Flutter</li>
              <li><span> Full Stack Skills:</span> Node.js, Express, MongoDB</li>
              <li><span> Training:</span> Paras Infotech, Rishikesh</li>
              <li><span> Location:</span> Rishikesh, India</li>
              <li><span> Availability:</span> Open for Projects & Internships</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
