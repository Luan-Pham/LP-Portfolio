import emailjs from '@emailjs/browser';
import { Container, Form, Button } from 'react-bootstrap';

function Email() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_vu8xyen',
        'template_k9w004z',
        e.target,
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
    alert('Message Successfuly Sent!');
    e.target.reset();
  };

  return (
    <Container id="contact">
      <Form onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Your Name" name="name" />
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email Address" name="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} name="message" />
        </Form.Group>
        <div className="text-center">
          <Button variant="dark" type="submit" size="lg">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Email;
