import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider';
import Thyme from '../assets/Thyme.jpg';

function Projects() {
  const projects = [
    {
      title: 'Thyme2Cook',
      description:
        'Latest application that I am working on! Ap app to help you decide to what to make for dinner using the spoonacular API.',
      imgUrl: Thyme,
      link: 'https://luan-pham.github.io/Thyme2Cook/',
    },
    {
      title: 'Barcade',
      description:
        'Group project collaborating with other sudents in bootcamp. A virtual bar and arcade platform used to socialize with friends, play games, and set high scores!',
      imgUrl: '',
      link: 'https://secure-everglades-09731.herokuapp.com/',
    },
    {
      title: 'Marvel Search',
      description: `Collaborative project to use the marvel API in order to serach for information about its expansive universe. Users can serach for data about a character's backstory, comic books, and movies`,
      imgUrl: '',
      link: 'https://luan-pham.github.io/Thyme2Cook/',
    },
    { title: '', description: '', imgUrl: '', link: '' },
    { title: '', description: '', imgUrl: '', link: '' },
    { title: '', description: '', imgUrl: '', link: '' },
  ];
  return (
    <Container>
      <h2> Check out some of my projects!</h2>
      <Row>
        {projects.map((project, index) => (
          <Col xs={6} md={4}>
            <Card
              style={{
                width: '18rem',
                margin: '3rem',
                padding: '1px',
              }}
            >
              <Card.Img variant="top" src={project.imgUrl} />
              <Card.ImgOverlay>
                <Card.Body>
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
