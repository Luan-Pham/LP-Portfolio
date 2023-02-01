import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';

function Projects() {
  const projects = [
    {
      title: 'Thyme2Cook',
      description:
        'Latest application that I am working on! Ap app to help you decide to what to make for dinner using the spoonacular API.',
      imgUrl: '',
      link: '',
    },
    { title: '', description: '', imgUrl: '', link: '' },
    { title: '', description: '', imgUrl: '', link: '' },
    { title: '', description: '', imgUrl: '', link: '' },
    { title: '', description: '', imgUrl: '', link: '' },
    { title: '', description: '', imgUrl: '', link: '' },
    { title: '', description: '', imgUrl: '', link: '' },
    { title: '', description: '', imgUrl: '', link: '' },
  ];

  return (
    <Container className="slideContainer">
      <h2> Check out some of my projects!</h2>
      <Splide>
        {projects.map((project) => {
          return (
            <SplideSlide>
              <Card className="splideCard">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Container>
  );
}

export default Projects;

// style="margin-right: 2rem; width: calc(((100% + 2rem) / 3) - 2rem); height: 10rem;"
