import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
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
    { title: '', description: '', imgUrl: '', link: '' },
    { title: '', description: '', imgUrl: '', link: '' },
    { title: '', description: '', imgUrl: '', link: '' },
    { title: '', description: '', imgUrl: '', link: '' },
    { title: '', description: '', imgUrl: '', link: '' },
  ];
  return (
    <Container>
      <h2> Check out some of my projects!</h2>
      {projects.map((project, index) => (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={project.imgUrl} />
          <Card.ImgOverlay>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card.ImgOverlay>
        </Card>
      ))}
    </Container>
  );
}

export default Projects;

// style="margin-right: 2rem; width: calc(((100% + 2rem) / 3) - 2rem); height: 10rem;"
