import React from "react";

const exp = [
    {
        institute: "Academy Of Technology",
        role: "B. Tech in Computer Science",
        content: [
            "Presently in 4th semester.",
            "Average grade of 9.60 upto 3rd semester."
        ],
        start: "2019",
        end: "Present",
        type: "edu"
    },
    {
        institute: "Julien Day School, Kalyani",
        role: "School (ICSE and ISC)",
        content: [
            "Completed ISC with 89% marks.",
            "Completed ICSE with 88% marks."
        ],
        start: "2007",
        end: "2019",
        type: "edu"
    }
]

function Item(item, index) {
    //<i className="fas fa-briefcase timeline-icon"></i>  // For work
    //<i className="fas fa-graduation-cap timeline-icon"></i>  // For education
    return (
        <li className="outer-list" key={index}>
            <div className="timeline-item">
                <div className="dot">
                    {item.type === "edu" && <i className="fas fa-graduation-cap timeline-icon"></i>}
                    {item.type === "work" && <i className="fas fa-briefcase timeline-icon"></i>}
                </div>
                <div className="date">
                    <p>{item.start} - {item.end}</p>
                </div>
                
                <div className="content">
                    <h4>{item.role} - {item.institute}</h4>
                    <ul className="inner-list">
                        {item.content.map((text, index) =>  <li className="inner-list" key={index}>{text}</li>)}
                    </ul>
                </div>
            </div>
        </li>
    );
}

function Experience() {
    return (
        <section id="experience">
            <div className="display">
            <h2>Experience and Education</h2>
            <hr/>
            <div className="exp-container">
                <span className="timeline"></span>
                <ul className="outer-list">
                    {exp.map((item, index) => Item(item, index))}
                </ul>
            </div>
            </div>
        </section>
    );
}

export default Experience;