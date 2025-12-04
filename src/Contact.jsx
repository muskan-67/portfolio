import React from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section py-5"
    >
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Contact Me</h2>
        <p className="text-muted mb-4">
          I'd love to hear from you! Whether you have a question or just want to say hi.
        </p>

        {/* FormSubmit Form */}
        <Form
          action="https://formsubmit.co/muskangupta7172@gmail.com"
          method="POST"
          className="contact-form mx-auto"
          style={{ maxWidth: "600px", textAlign: "left" }}
        >
          {/* Prevent spam */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://your-portfolio-url.com/thankyou"
          />

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter your email" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              placeholder="Type your message"
              required
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
