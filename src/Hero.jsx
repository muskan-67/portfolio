import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import myImage from "./assets/image/my1.jpg";

const Hero = () => {
  return (
    <section id="hero" className="hero-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center">

          {/* LEFT CONTENT */}
          <Col md={6} className="text-center text-md-start">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Muskan 👋</span>
              </h1>

              <h3 className="hero-subtitle">
                Building Modern Web & Mobile Experiences
              </h3>

              <p className="hero-description">
                Full Stack Developer specializing in React, Flutter, and modern UI.
                I craft fast, responsive, and user-friendly applications.
              </p>

              <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-4">
                
                <Button href="#projects" className="hero-btn primary">
                  🚀 View Projects
                </Button>

                <Button href="#contact" className="hero-btn outline">
                  📩 Contact Me
                </Button>

              </div>
            </motion.div>

          </Col>

          {/* RIGHT IMAGE */}
          <Col md={6} className="text-center mt-5 mt-md-0">

            <motion.img
              src={myImage}
              alt="Muskan Developer"
              className="hero-image img-fluid"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />

          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Hero;