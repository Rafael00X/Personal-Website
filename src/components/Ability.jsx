import React from "react";
import { Container, Row, Col } from "reactstrap";
import { ReactComponent as StarIcon } from "../svg/star.svg";

const skills = [
    { name: "Web Development", proficiency: 4 },
    { name: "Android Development", proficiency: 3 },
    { name: "Problem Solving", proficiency: 4 }
];

const prog_languages = [
    { name: "Core Java", proficiency: 5 },
    { name: "C++", proficiency: 4 },
    { name: "JavaScript", proficiency: 4 },
    { name: "Python", proficiency: 3 }
];

const others = [
    { name: "ReactJS", proficiency: 4 },
    { name: "GraphQL", proficiency: 1 },
    { name: "NodeJS", proficiency: 3 },
    { name: "MongoDB", proficiency: 3 },
    { name: "SQL", proficiency: 3 },
    { name: "Bootstrap", proficiency: 3 },
    { name: "HTML", proficiency: 4 },
    { name: "CSS", proficiency: 4 }
];

const tools = [
    { name: "VS Code", proficiency: 5 },
    { name: "Git", proficiency: 3 },
    { name: "Android Studio", proficiency: 5 },
    { name: "Terminal", proficiency: 4 }
];

const languages = [
    { name: "English", proficiency: 5 },
    { name: "Bengali", proficiency: 5 },
    { name: "Hindi", proficiency: 4 }
];

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
                <AbilityBlock heading="Libraries, Frameworks and Others" list={others} />
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
    items.sort((a, b) => b.proficiency - a.proficiency);
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
    let count = props.item.proficiency;
    return (
        <li className="ability-item">
            <span className="ability-name">{props.item.name}</span>
            <span className="ability-proficiency">{getStars(count)}</span>
        </li>
    );
}

function getStars(count) {
    let stars = [];
    for (let i = 0; i < 5; i++)
        stars[i] = count-- > 0 ? <StarIcon fill="#11999E" /> : <StarIcon fill="#DDDDDD" />;
    return <>{stars}</>;
}

export default Ability;
