import React from "react";

export const Education = ({ education }) => {
  return (
    <section className="education-experience section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education__container bd-grid">
        {education.map((school) => (
          <School key={school.institution} {...school} />
        ))}
      </div>
    </section>
  );
};

const School = ({ profession, date, institution }) => {
  return (
    <div className="education__content">
      <div className="education__time">
        <span className="education__rounder"></span>
        <span className="education__line"></span>
      </div>
      <div className="education__data bd-grid">
        <h3 className="education__title">{profession}</h3>
        <span className="education__year">{date}</span>
        <span className="education__studies">{institution}</span>
      </div>
    </div>
  );
};
