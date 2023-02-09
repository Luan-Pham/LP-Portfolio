import React, { useState } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import Cook from '../assets/images/Cook.jpg';
import Arcade from '../assets/images/Arcade.jpg';
import Marvel from '../assets/images/Marvel.jpg';
import Blog from '../assets/images/Blog.jpg';
import Schedule from '../assets/images/Schedule.jpg';
import Team from '../assets/images/Team.jpg';
import Weather from '../assets/images/Weather.jpg';
import Octo from '../assets/images/Octo.jpg';
import Secure from '../assets/images/Secure.jpg';

function Projects() {
  const [hover, setHover] = useState(false);

  const projects = [
    {
      title: 'Thyme2Cook',
      description:
        'Latest application that I am working on! An app to help you decide to what to make for dinner using the spoonacular API.',
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
      picture: Weather,
      link: 'https://luan-pham.github.io/Weather-App/',
    },
    {
      title: 'Team Profile Generator',
      description:
        'An application to create a profile for a team. User can follow instructions on the readme to install and run application.',
      picture: Team,
      link: 'https://github.com/Luan-Pham/Team-Profile-Generator',
    },
    {
      title: 'Tech Blog',
      description:
        'Application where users can post personal blogs and also view posts made by others',
      picture: Blog,
      link: 'https://luan-tech-blog.herokuapp.com/',
    },
    {
      title: 'Day Scheduler',
      description:
        'An application that allows the user to schedule out their workday (9-5). Time slots appear in different colors to help you stay organized! (past in red, present in blue, and future in green)',
      picture: Schedule,
      link: 'https://luan-pham.github.io/Scheduler/',
    },
    {
      title: 'Password Generator',
      description:
        'One of my very first applications. Allows the user to create a secured password with specified parameters.',
      picture: Secure,
      link: 'https://luan-pham.github.io/Password-Generator/',
    },
    {
      title: 'My GitHub',
      description: 'Find other projects that I am working on!',
      picture: Octo,
      link: 'https://github.com/Luan-Pham',
    },
  ];
  return (
    <Container id="projects">
      <h2 style={{ margin: '4rem 0 2rem 0', textAlign: 'center' }}>
        {' '}
        Check out some of my projects!
      </h2>
      <Row>
        {projects.map((project, index) => (
          <Col
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <Card
              style={{
                width: '20rem',
                height: '20rem',
                margin: '3rem 0 3rem 0',
                padding: '1px',
                overflow: 'hidden',
                justifyContent: 'center',
                alignContent: 'center',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              <Card.Img
                style={{ position: 'absolute', alignSelf: 'start' }}
                src={project.picture}
              />
              <Card.ImgOverlay>
                <Card.Body
                  className="card-text"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  {hover ? (
                    <Container>
                      <Card.Title style={{ fontSize: '2rem' }}>
                        {project.title}
                      </Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                      <Button variant="secondary">Visit</Button>
                    </Container>
                  ) : (
                    <Card.Title
                      style={{
                        fontSize: '2rem',
                        padding: '100px 0',
                      }}
                    >
                      {project.title}
                    </Card.Title>
                  )}
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
