import React from "react";

const education = [
    {
        institute: "Academy Of Technology",
        program: "B. Tech in Computer Science",
        content: ["Presently in 6th semester.", "Average grade of 9.71 upto 5th semester."],
        start: "July 2019",
        end: "Present"
    },
    {
        institute: "Julien Day School, Kalyani",
        program: "School (ICSE and ISC)",
        content: ["Completed ISC with 89.0% marks.", "Completed ICSE with 88.0% marks."],
        start: "May 2007",
        end: "May 2019"
    }
];

function Education() {
    return (
        <section id="education">
            <div className="display">
                <h2>Education</h2>
                <hr />
                <div className="edu-container">
                    <span className="timeline"></span>
                    <ul className="outer-list">
                        {education.map((item, index) => (
                            <EducationItem key={index} item={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

function EducationItem(props) {
    return (
        <li className="outer-list">
            <div className="timeline-item">
                <div className="dot">
                    <i className="fas fa-graduation-cap timeline-icon"></i>
                </div>
                <div className="date">
                    <p>
                        {props.item.start} - {props.item.end}
                    </p>
                </div>

                <div className="content">
                    <h4>
                        {props.item.program} - {props.item.institute}
                    </h4>
                    <ul className="inner-list">
                        {props.item.content.map((text, index) => (
                            <li className="inner-list" key={index}>
                                {text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    );
}

export default Education;
