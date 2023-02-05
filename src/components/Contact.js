import { useState } from 'react';
import { Container } from 'react-bootstrap';

function Contact() {
  const formInformation = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  const [formState, setFormState] = useState(formInformation);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

const onFormUpdate = (category, value) => {
    setFormState{(
        ...formInformation,
        [category]: value
    )}
}

const submitHandler = ()


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact" />
          </Col>
          <Col md={6}>
            <h2>Contact Me</h2>
            <form onSubmit={submitHandler}>
              <Row>
                <Col sm={6} className="px-1">
                    <input type='text' value={formInformation.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstname', e.target.value)}/>
                </Col>
                <Col sm={6} className="px-1">
                    <input type='text' value={formInformation.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastname', e.target.value)}/>
                </Col>
                <Col sm={6} className="px-1">
                    <input type='email' value={formInformation.email} placeholder='Email Address' onChange={(e) => onFormUpdate('email', e.target.value)}/>
                </Col>
                <Col>
                <textarea row='6' value={formInformation.message} placeholder='Your Message Here' onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                <button type='submit'><span>{buttonText}</span></button>
                </Col>
                {
                    status.message &&
                    <Col><p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    </Col>
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
