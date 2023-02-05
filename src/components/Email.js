import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Form, Button } from 'react-bootstrap';

function Email() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_vu8xyen',
        'template_k9w004z',
        form.current,
        '5sDfmC3edxSQWcGSm'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="name" placeholder="Your Name" />
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Email;
