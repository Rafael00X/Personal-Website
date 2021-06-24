import React from "react";
import { Container, Row, Col } from "reactstrap";
import { ReactComponent as StarIcon } from "../svg/star.svg";

const languages = [
    { name: "English", proficiency: 5 },
    { name: "Bengali", proficiency: 5 },
    { name: "Hindi", proficiency: 5 }
]

const skills = [
    { name: "Java", proficiency: 5 },
    { name: "JavaScript", proficiency: 3 },
    { name: "C++", proficiency: 4 },
    { name: "Python", proficiency: 3 },
    { name: "Kotlin", proficiency: 1 },
    { name: "ReactJS", proficiency: 3 },
    { name: "AngularJS", proficiency: 1 },
    { name: "NodeJS", proficiency: 4 },
    { name: "MongoDB", proficiency: 4 },
    { name: "MySQL", proficiency: 3 },
    { name: "Bootstrap", proficiency: 3 },
    { name: "HTML", proficiency: 5 },
    { name: "CSS", proficiency: 5 }
]

const tools = [
    {name: "VS Code", proficiency: 5},
    {name: "Git", proficiency: 3},
    {name: "Android Studio", proficiency: 5},
    {name: "Terminal", proficiency: 4}
]

var count;

function getStar() {
    if (count-- > 0)
        return <StarIcon fill="#11999E" />;
    else
        return <StarIcon fill="#DDDDDD" />;
}

function abilityItem(item, index) {
    count = item.proficiency;
    return (
        <li key={index}>
            <span className="ability-name">{item.name}</span>
            <span className="ability-proficiency">{getStar()}{getStar()}{getStar()}{getStar()}{getStar()}</span>            
        </li>
    );
}

function abilityBlock(heading, list) {
    const items = list;
    items.sort((a, b) => b.proficiency - a.proficiency);
    const len = items.length;
    const half = (len + 1) / 2;
    return (
        <Container>        
            <h3>{heading}</h3>
            <Row>
                <Col className="left-block" md="6">
                    <ul>
                        {items.slice(0, half).map((item, index) => {
                            return abilityItem(item, index);
                        })}
                    </ul>
                </Col>
                <Col className="right-block" md="6">
                    <ul>
                        {items.slice(half, len).map((item, index) => {
                            return abilityItem(item, index);
                        })}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

function Ability() {
    return (
        <section id="ability">
            <div className="display">
            <h2>Abilities</h2>
            <hr/>
            {abilityBlock("Skills", skills)}
            <hr/>
            {abilityBlock("Tools", tools)}
            <hr/>
            {abilityBlock("Languages", languages)}
            </div>
        </section>
    );
}

export default Ability;