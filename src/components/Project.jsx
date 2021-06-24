import React from "react";

const projects = [
    {
        name: "MusicApp",
        description: "A player app that plays mp3 files stored locally. User has the freedom to selectively add files and not include unwanted files into the library.",
        link: "https://github.com/Rafael00X/MusicApp"
    }
]

function projectItem(item, index) {
    return (
        <div className="project-item" key={index}>
            <h4>{item.name}</h4>
            <p>{item.description}<br/></p>
            <a href={item.link} target="_blank">{item.link}</a>
        </div>
    )
}

function Project() {
    return (
        <section id="project">
            <div className="display">
            <h2>Projects</h2>
            <hr/>
            {projects.map((item, index) => projectItem(item, index))}
            <a className="button btn" href="https://github.com/Rafael00X/" target="_blank">Github</a>
            </div>
        </section>
    );
}

export default Project;