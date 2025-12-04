import React from "react";
import "./styles/skills.css";

const Skills = () => {
  const skillData = [
    {
      name: "React.js",
      level: 90,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "JavaScript (ES6+)",
      level: 90,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Bootstrap",
      level: 95,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "HTML & CSS",
      level: 95,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "Node.js",
      level: 75,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "MongoDB",
      level: 70,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Flutter",
      level: 80,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "C++",
      level: 70,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Java",
      level: 70,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Python",
      level: 60,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="skills-title">My Skills</h2>

        <div className="row">
          {skillData.map((skill, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="skill-card">
                <div className="skill-header">
                  <div className="skill-logo">
                    <img src={skill.logo} alt={skill.name} />
                  </div>
                  <h5>{skill.name}</h5>
                  <span>{skill.level}%</span>
                </div>

                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="skills-bottom-text">
          Continuously learning & improving — always excited for new
          technologies 🚀
        </p>
      </div>
    </section>
  );
};

export default Skills;
