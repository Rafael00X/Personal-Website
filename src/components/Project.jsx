import React from "react";

const projects = [
    {
        name: "NoteChat - Social media website",
        description:
            "A simple social media web application built using full-stack technology. Users can share posts, like and comment, or engage in real-time chat with other users in their contacts.",
        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "NodeJS",
            "MongoDB",
            "GraphQL",
            "SocketIO",
            "Bootstrap"
        ],
        link: "https://xenodochial-rosalind-e4ce8f.netlify.app/"
    },
    {
        name: "Music Player",
        description:
            "An mp3 player for Android devices. It uses local database to store references to media files so users can pick and choose which files to include in the player.",
        tech: ["Java", "SQL"],
        link: "https://github.com/Rafael00X/MusicApp/releases/tag/v1.0.0/"
    }
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
