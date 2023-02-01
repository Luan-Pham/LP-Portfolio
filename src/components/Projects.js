import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import '@splidejs/react-splide/css';
import Thyme from '../assets/Thyme.jpg';

function Projects() {
  const projects = [
    {
      title: 'Thyme2Cook',
      description:
        'Latest application that I am working on! Ap app to help you decide to what to make for dinner using the spoonacular API.',
      imgUrl: { Thyme },
      link: 'https://luan-pham.github.io/Thyme2Cook/',
    },
    { title: '', description: '', imgUrl: '', link: '' },
    { title: '', description: '', imgUrl: '', link: '' },
    { title: '', description: '', imgUrl: '', link: '' },
    { title: '', description: '', imgUrl: '', link: '' },
  ];

  return (
    <Container
      options={{
        rewind: true,
        gap: '2rem',
        perPage: 4,
        pagination: false,
        drag: 'free',
        breakpoints: {
          2050: { perPage: 3 },
          1500: { perPage: 2 },
          640: {
            perPage: 1,
          },
        },
      }}
      className="slideContainer"
    >
      <h2> Check out some of my projects!</h2>
      <Splide>
        {projects.map((project, index) => {
          return (
            <SplideSlide>
              <Card className="splideCard" key={index}>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <img src={project.imgUrl} alt={project.title}></img>
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
