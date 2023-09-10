import React from "react";

const projects = [
  {
    name: "NoteChat - Social media website",
    description:
      "A simple social media web application built using full-stack technology. Users can share posts, like and comment, or engage in real-time chat with other users in their contacts.",
    tech: ["React", "NodeJS", "MongoDB", "GraphQL", "SocketIO"],
    link: "https://github.com/Rafael00X/NoteChat-Frontend.git",
  },
  {
    name: "Ecommerce",
    description:
      "An e-commerce website built using full-stack web development technologies. The website allows users to browse products and services online.",
    tech: [
      "React",
      "Spring Boot",
      "MySQL",
      "RestAPI",
      "Restful Services",
      "Maven",
      "JUnit",
    ],
    link: "https://github.com/Rafael00X/E-Commerce",
  },
];

function Project() {
  return (
    <section id="project">
      <div className="display">
        <h2>Projects</h2>
        <hr />
        {projects.map((item, index) => (
          <ProjectItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

function ProjectItem(props) {
  return (
    <div className="project-item">
      <h4>{props.item.name}</h4>
      <p>{props.item.description}</p>
      <div className="tech-container">
        {props.item.tech.map((item, index) => (
          <Tech key={index} name={item} />
        ))}
      </div>
      <br />
      <a href={props.item.link} target="Rafael00X_github_page">
        {props.item.link}
      </a>
    </div>
  );
}

function Tech(props) {
  return <span className="tech">{props.name}</span>;
}

export default Project;
