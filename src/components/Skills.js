import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ReactOriginalWordmarkIcon from 'react-devicons/react/original-wordmark';
import Css3OriginalWordmarkIcon from 'react-devicons/css3/original-wordmark';
import NodejsOriginalWordmarkIcon from 'react-devicons/nodejs/original-wordmark';
import Html5OriginalWordmarkIcon from 'react-devicons/html5/original-wordmark';
import JqueryOriginalIcon from 'react-devicons/jquery/original';
import MongodbOriginalWordmarkIcon from 'react-devicons/mongodb/original-wordmark';
import MysqlOriginalWordmarkIcon from 'react-devicons/mysql/original-wordmark';
import BootstrapPlainWordmarkIcon from 'react-devicons/bootstrap/plain-wordmark';
import GitOriginalIcon from 'react-devicons/git/original';

function Skills() {
  const skills = [
    { skill: 'HTML', icon: <Html5OriginalWordmarkIcon /> },
    { skill: 'CSS', icon: <Css3OriginalWordmarkIcon /> },
    { skill: 'Node.js', icon: <NodejsOriginalWordmarkIcon /> },
    { skill: 'React', icon: <ReactOriginalWordmarkIcon /> },
    { skill: 'jQuery', icon: <JqueryOriginalIcon /> },
    { skill: 'MongoDB', icon: <MongodbOriginalWordmarkIcon /> },
    { skill: 'MySQL', icon: <MysqlOriginalWordmarkIcon /> },
    { skill: 'Bootstrap', icon: <BootstrapPlainWordmarkIcon /> },
    { skill: 'Git', icon: <GitOriginalIcon /> },
  ];

  return (
    <Container id="skills">
      <h2 style={{ margin: '4rem 0 2rem 0', textAlign: 'center' }}>
        {' '}
        My Skills
      </h2>
      <Row>
        {skills.map((skill) => (
          <Col
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <Card
              style={{
                width: '18rem',
                margin: '1rem',
              }}
            >
              <Card.Body>
                <Card.Header
                  style={{
                    color: 'black',
                    textAlign: 'center',
                    fontWeight: '500',
                    fontSize: '2rem',
                  }}
                >
                  {skill.skill} {skill.icon}
                </Card.Header>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;
