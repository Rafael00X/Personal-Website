import React from "react";

const projects = [
    {
        name: "MusicApp",
        description: "A player app that plays mp3 files stored locally. User has the freedom to selectively add files and not include unwanted files into the library.",
        link: "https://github.com/Rafael00X/MusicApp"
    }
]

function Project() {
    return (
        <section id="project">
            <div className="display">
            <h2>Projects</h2>
            <hr/>
            {projects.map((item, index) => <ProjectItem key={index} item={item} />)}
            <a className="button btn" href="https://github.com/Rafael00X/" target="Rafael00X_github_page">Github</a>
            </div>
        </section>
    );
}

function ProjectItem(props) {
    return (
        <div className="project-item">
            <h4>{props.item.name}</h4>
            <p>{props.item.description}<br/></p>
            <a href={props.item.link} target="Rafael00X_github_page">{props.item.link}</a>
        </div>
    )
}

export default Project;