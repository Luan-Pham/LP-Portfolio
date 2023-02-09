import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { FaNodeJs, FaReact, FaCss3 } from 'react-icons/fa';
import ReactOriginalIcon from 'react-devicons/react/original';

function Skills() {
  const skills = [
    { skill: 'HTML', icon: <ReactOriginalIcon /> },
    { skill: 'CSS', icon: FaCss3 },
    { skill: 'Node.js', icon: FaNodeJs },
    { skill: 'React', icon: FaReact },
  ];

  return (
    <div>
      <Container>
        <ListGroup>
          {skills.map((skill) => (
            <ListGroup.Item>
              {skill.skill}
              {skill.icon}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
}

export default Skills;
