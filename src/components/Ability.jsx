import React from "react";
import { Container, Row, Col } from "reactstrap";

const skills = ["Full-Stack Web Development", "Problem Solving"];

const prog_languages = ["Java", "C++", "JavaScript", "TypeScript"];

const databases = ["MySQL", "MongoDB"];

const others = [
  "HTML",
  "CSS",
  "RestAPI",
  "GraphQL",
  "NodeJs",
  "ReactJs",
  "NextJs",
  "Spring Boot",
];

const tools = ["VS Code", "Git", "Postman", "IntelliJ"];

const languages = ["English", "Bengali", "Hindi"];

function Ability() {
  return (
    <section id="ability">
      <div className="display">
        <h2>Abilities</h2>
        <hr />
        <AbilityBlock heading="Skills" list={skills} />
        <hr />
        <AbilityBlock heading="Programming Languages" list={prog_languages} />
        <hr />
        <AbilityBlock heading="Databases" list={databases} />
        <hr />
        <AbilityBlock
          heading="Libraries, Frameworks and Others"
          list={others}
        />
        <hr />
        <AbilityBlock heading="Tools" list={tools} />
        <hr />
        <AbilityBlock heading="Languages" list={languages} />
      </div>
    </section>
  );
}

function AbilityBlock(props) {
  const items = props.list;
  const len = items.length;
  const half = (len + 1) / 2;
  return (
    <Container>
      <h3>{props.heading}</h3>
      <Row>
        <Col className="left-block" md="6">
          <ul>
            {items.slice(0, half).map((item, index) => {
              return <AbilityItem key={index} item={item} />;
            })}
          </ul>
        </Col>
        <Col className="right-block" md="6">
          <ul>
            {items.slice(half, len).map((item, index) => {
              return <AbilityItem key={index} item={item} />;
            })}
          </ul>
        </Col>
      </Row>
      <br />
    </Container>
  );
}

function AbilityItem(props) {
  return (
    <li className="ability-item">
      <span className="ability-name">{props.item}</span>
    </li>
  );
}

export default Ability;
