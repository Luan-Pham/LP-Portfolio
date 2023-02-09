import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Grad from '../assets/images/Grad.jpg';

function About() {
  return (
    <div>
      <Container className="banner" id="home">
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span> Welcome to my Portfolio!</span>
            <h1> Hi I'm Luan Pham</h1>
            <p>
              My name is Luan Pham and I am web developer. I graduated from UC
              Davis in 2016 with a degree in Exercise Biology. Afterwards, I
              studied physical therapy and have been working in the field ever
              since. I have always been interested in programming and want to
              change to a career that will help my professional and personal
              growth. I decided to attend the UC Berkeley Coding Camp which
              helped me learn valuable web development skills. I used these
              skills to create the applications in my projects section below.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <figure class="framebox">
              <img src={Grad} alt="Profile Pic" />
              <figcaption>
                <h3>
                  Luan <span>Pham</span>
                </h3>
                <h4>Web Developer</h4>
              </figcaption>
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
