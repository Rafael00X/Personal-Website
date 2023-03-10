import React from "react";

const experience = [
  {
    institute: "Academy Of Technology",
    role: "B. Tech in Computer Science",
    content: [
      "Presently in 6th semester.",
      "Average grade of 9.71 upto 5th semester.",
    ],
    start: "July 2019",
    end: "Present",
  },
  {
    institute: "Julien Day School, Kalyani",
    role: "School (ICSE and ISC)",
    content: [
      "Completed ISC with 89.0% marks.",
      "Completed ICSE with 88.0% marks.",
    ],
    start: "May 2007",
    end: "May 2019",
  },
];

function Experience() {
  return (
    <section id="experience">
      <div className="display">
        <h2>Experience</h2>
        <hr />
        <div className="exp-container">
          <span className="timeline"></span>
          <ul className="outer-list">
            {experience.map((item, index) => (
              <ExperienceItem key={index} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem(props) {
  return (
    <li className="outer-list">
      <div className="timeline-item">
        <div className="dot">
          <i className="fas fa-briefcase timeline-icon"></i>
        </div>
        <div className="date">
          <p>
            {props.item.start} - {props.item.end}
          </p>
        </div>

        <div className="content">
          <h4>
            {props.item.role} - {props.item.institute}
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

export default Experience;
