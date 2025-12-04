import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./styles/projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A personal website showcasing my projects and skills using React and Bootstrap.",
      link: "#",
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
    {
      title: "Weather App",
      desc: "A React-based weather app using OpenWeather API with real-time data.",
      link: "#",
      icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
    },
    {
      title: "E-Commerce Store",
      desc: "A MERN stack project including user login, cart system & admin panel.",
      link: "#",
      icon: "https://cdn-icons-png.flaticon.com/512/891/891462.png",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container text-center">
        <h2 className="projects-title">My Projects</h2>

        <Row>
          {projects.map((p, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="project-card">
                <div className="project-icon">
                  <img src={p.icon} alt="" />
                </div>

                <Card.Body>
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Text>{p.desc}</Card.Text>
                  <Button variant="primary" href={p.link}>
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Projects;
