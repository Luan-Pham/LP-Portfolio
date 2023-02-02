import React, { useState } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import Cook from '../assets/Cook.jpg';
import Arcade from '../assets/Arcade.jpg';
import Marvel from '../assets/Marvel.jpg';

function Projects() {
  const [hover, setHover] = useState();

  const projects = [
    {
      title: 'Thyme2Cook',
      description:
        'Latest application that I am working on! Ap app to help you decide to what to make for dinner using the spoonacular API.',
      picture: Cook,
      link: 'https://luan-pham.github.io/Thyme2Cook/',
    },
    {
      title: 'Barcade',
      description:
        'Group project collaborating with other students in bootcamp. A virtual bar and arcade platform used to socialize with friends, play games, and set high scores!',
      picture: Arcade,
      link: 'https://secure-everglades-09731.herokuapp.com/',
    },
    {
      title: 'Marvel Search',
      description: `Collaborative project to use the marvel API in order to search for information about its expansive universe. Users can serach for data about a character's backstory, comic books, and movies`,
      picture: Marvel,
      link: 'https://luan-pham.github.io/Thyme2Cook/',
    },
    {
      title: 'Weather Forecast',
      description:
        'Application to search the weather forecast for a city using the OpenWeather API.',
      picture: '',
      link: 'https://luan-pham.github.io/Weather-App/',
    },
    { title: '', description: '', picture: '', link: '' },
    {
      title: 'Tech Blog',
      description:
        'Application where users can post personal blogs and also view posts made by others',
      picture: '',
      link: 'https://luan-tech-blog.herokuapp.com/',
    },
  ];
  return (
    <Container>
      <h2> Check out some of my projects!</h2>
      <Row>
        {projects.map((project, index) => (
          <Col xs={6} md={4}>
            <Card
              style={{
                width: '20rem',
                height: '20rem',
                margin: '3rem',
                padding: '1px',
                overflow: 'hidden',
                justifyContent: 'center',
              }}
            >
              <Card.Img src={project.picture} className="cardPictures" />
              <Card.ImgOverlay>
                <Card.Body className="card-text">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;

// style="margin-right: 2rem; width: calc(((100% + 2rem) / 3) - 2rem); height: 10rem;"
