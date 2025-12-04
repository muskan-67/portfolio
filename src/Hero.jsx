import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const Hero = () => {
  return (
    <section id="hero" className="hero-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          
          {/* LEFT SIDE TEXT */}
          <Col md={6} className="text-center text-md-start">
            <h1 className="hero-title">
              Hi, I’m <span className="highlight">Muskan</span>
            </h1>

            <h4 className="hero-subtitle">
              Full Stack Developer | Flutter App Developer | React Developer
            </h4>

            <p className="hero-description">
              I create modern web and mobile applications with clean UI,
              powerful functionality, and seamless user experiences.
            </p>

            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              <Button variant="" href="#projects" className="hero-btn view">
                View My Work
              </Button>

              <Button
                variant="outline-dark"
                href="#contact"
                className="hero-btn"
              >
                Contact Me
              </Button>
            </div>
          </Col>

          {/* RIGHT SIDE IMAGE */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <Image
              src="src/assets/image/my1.jpg"
              alt="Muskan Developer"
              className="hero-image"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
