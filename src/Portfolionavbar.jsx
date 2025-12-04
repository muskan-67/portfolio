import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const PortfolioNavbar = () => {
  const [scroll, setScroll] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`portfolio-navbar ${scroll ? "navbar-scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand href="#hero" className="logo-text ">
          Muskan<span className="fs-4 text-muted">Gupta</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="portfolio-navbar" />

        <Navbar.Collapse id="portfolio-navbar" className="justify-content-end">
          <Nav className="gap-3 nav-links">
            <Nav.Link href="#hero">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PortfolioNavbar;
