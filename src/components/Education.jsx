import React from "react";

const education = [
  {
    institute: "Academy Of Technology",
    program: "Bachelor of Technology",
    content: [
      "Major in Computer Science and Engineering",
      "Completed with 9.46 CGPA",
    ],
    start: "July 2019",
    end: "July 2023",
  },
  {
    institute: "Julien Day School, Kalyani",
    program: "Class 12 (CISCE)",
    content: ["Major in Computer Science", "Completed with 87% aggregate"],
    start: "May 2018",
    end: "May 2019",
  },
  {
    institute: "Julien Day School, Kalyani",
    program: "Class 10 (CISCE)",
    content: ["Major in Science", "Completed ICSE with 85% aggregate"],
    start: "May 2016",
    end: "May 2017",
  },
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
