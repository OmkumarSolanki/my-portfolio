import React from "react";
import data from "../../data/index.json";

const Experience = () => {
  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Work Experience & Education</h2>
      <div className="timeline">
        {data.timeline.map((item, index) => (
          <div key={index} className={`timeline-item ${item.type}`}>
            <div className="timeline-header">
              <img src={item.logo} alt={`${item.institution || item.company} logo`} className="timeline-logo" />
              <div className="timeline-details">
                <h3 className="timeline-company">
                  {item.type === "education" ? item.institution : item.company} - {item.location}
                </h3>
                <h4 className="timeline-subtitle">
                  {item.type === "education" ? item.degree : item.role}
                </h4>
                <span className="timeline-duration">{item.duration}</span>
                {item.gpa && <p className="timeline-gpa">GPA: {item.gpa}</p>}
              </div>
            </div>
            {item.type === "experience" ? (
              <ul className="timeline-responsibilities">
                {item.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            ) : (
              <div className="timeline-coursework">
                <h4>Relevant Coursework:</h4>
                <ul>
                  {item.coursework.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
