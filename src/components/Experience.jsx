import React from "react";

const experience = [
  {
    institute: "Cognizant Technology Solutions",
    role: "Java Full Stack Engineer Intern",
    content: [
      "Worked on full-stack web application",
      "Developed responsive and user friendly UI using React",
      "Developed scalable server application using Spring Boot",
      "Learned about designing microservice architecture",
    ],
    start: "March 2023",
    end: "June 2023",
  },
];

function Experience() {
  return (
    // <section id="experience">
    //   <div className="display">
    //     <h2>Experience</h2>
    //     <hr />
    //     <div className="exp-container">
    //       <span className="timeline"></span>
    //       <ul className="outer-list">
    //         {experience.map((item, index) => (
    //           <ExperienceItem key={index} item={item} />
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </section>
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
