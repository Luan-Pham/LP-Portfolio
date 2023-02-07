import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { IconBase } from "react-icons";
import { FaNodeJs, FaReact, FaHtml5, FaCss3 } from "react-icons/fa";

function Skills() {
  const skills = [
    { skill: "HTML", icon: FaHtml5 },
    { skill: "CSS", icon: FaCss3 },
    { skill: "Node.js", icon: FaNodeJs },
    { skill: "React", icon: FaReact },
  ];

  return (
    <div>
      <Container>
        <ListGroup>
          {skills.map((skill) => (
            <ListGroup.Item>
              {skill.skill} <IconBase a></IconBase>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
}

export default Skills;
