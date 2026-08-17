import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./styles/projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A responsive personal portfolio website built with React and Bootstrap to showcase my skills, projects, and experience.",
      link: "#",
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
    {
      title: "Online Plant Store",
      desc: "An e-commerce website for buying plants online, featuring product browsing, shopping cart, and a smooth user-friendly experience.",
      link: "#",
      icon: "https://cdn-icons-png.flaticon.com/512/2909/2909761.png",
    },
    {
      title: "Smart Expense Tracker",
      desc: "A smart expense tracking application that helps users manage income, expenses, and personal finances efficiently.",
      link: "#",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135679.png",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container text-center">
        <h2 className="projects-title">My Projects</h2>

        <Row>
          {projects.map((p, index) => (
            <Col
  md={4}
  className="mb-4"
  key={index}
  style={{ "--delay": `${index * 0.2}s` }}
>
              <Card className="project-card">
                <div className="project-icon">
                  <img src={p.icon} alt={p.title} />
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