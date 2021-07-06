import React from "react";
import { Container, Row, Col } from "reactstrap";
import { ReactComponent as StarIcon } from "../svg/star.svg";

const skills = [
    { name: "Web Development", proficiency: 3 },
    { name: "Android Development", proficiency: 3},
    { name: "Problem Solving", proficiency: 4}
]

const prog_languages = [
    { name: "Java", proficiency: 5 },
    { name: "C++", proficiency: 5 },
    { name: "JavaScript", proficiency: 4 },
    { name: "Python", proficiency: 3 },
    { name: "Kotlin", proficiency: 1 }
]

const others = [
    { name: "ReactJS", proficiency: 3 },
    { name: "GraphQL", proficiency: 1 },
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

const languages = [
    { name: "English", proficiency: 5 },
    { name: "Bengali", proficiency: 5 },
    { name: "Hindi", proficiency: 5 }
]

function Ability() {
    return (
        <section id="ability">
            <div className="display">
            <h2>Abilities</h2>
            <hr/>
            <AbilityBlock heading="Skills" list={skills} />
            <hr/>
            <AbilityBlock heading="Programming Languages" list={prog_languages} />
            <hr/>
            <AbilityBlock heading="Libraries, Frameworks and Others" list={others} />
            <hr/>
            <AbilityBlock heading="Tools" list={tools} />
            <hr/>
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
            <br/>
        </Container>
    );
}

var count;

function AbilityItem(props) {
    count = props.item.proficiency;
    return (
        <li>
            <span className="ability-name">{props.item.name}</span>
            <span className="ability-proficiency">{getStar()}{getStar()}{getStar()}{getStar()}{getStar()}</span>            
        </li>
    );
}

function getStar() {
    if (count-- > 0)
        return <StarIcon fill="#11999E" />;
    else
        return <StarIcon fill="#DDDDDD" />;
}

export default Ability;